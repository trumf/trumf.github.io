#!/bin/bash
set -e  # Exit immediately if a command fails

# Store the current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📝 Current branch is: $CURRENT_BRANCH"

# Create a temporary directory outside the repository
TEMP_DIR="/tmp/site-publish-$(date +%s)"
mkdir -p "$TEMP_DIR"
echo "📁 Created temporary directory at $TEMP_DIR"

# Step 1: Make sure you're on main branch
echo "🔄 Switching to main branch..."
git checkout main
git pull origin main

# Step 2: Build the site
echo "🏗️ Building site with 11ty..."
npm install  # Ensure dependencies are installed
npm run build

# Step 3: Backup the _site directory to the temporary location
echo "💾 Backing up _site directory to $TEMP_DIR..."
cp -R _site/* "$TEMP_DIR/"
# Also copy any hidden files
cp -R _site/.[!.]* "$TEMP_DIR/" 2>/dev/null || true

# Step 4: Switch to publish branch
echo "🔄 Switching to publish branch..."
git checkout publish
git pull origin publish

# Step 5: Save any important files that should be preserved
echo "🔍 Checking for files to preserve..."
if [ -f CNAME ]; then
    echo "📄 Preserving CNAME file..."
    cp CNAME "$TEMP_DIR/CNAME"
fi
if [ -f .nojekyll ]; then
    echo "📄 Preserving .nojekyll file..."
    cp .nojekyll "$TEMP_DIR/.nojekyll"
fi

# Step 6: Clear the publish branch contents
echo "🧹 Clearing publish branch contents..."
# Keep only the .git directory
find . -mindepth 1 -maxdepth 1 -not -path "./.git" -exec rm -rf {} \;

# Step 7: Copy the built site from the temporary directory to the publish branch
echo "📋 Copying built site to publish branch..."
cp -R "$TEMP_DIR/"* .
# Also copy any hidden files
cp -R "$TEMP_DIR/".* . 2>/dev/null || true

# Step 8: Check for large files and remove them BEFORE adding to git
echo "🔍 Checking for large files (>90MB)..."
LARGE_FILES=$(find . -type f -size +90M -not -path "./.git/*" | sed 's|^\./||')
if [ -n "$LARGE_FILES" ]; then
    echo "⚠️ WARNING: The following files are too large for GitHub (>90MB):"
    echo "$LARGE_FILES"
    
    # Create .gitignore to exclude these files
    echo "# Ignore files larger than 90MB (GitHub limit is 100MB)" > .gitignore
    echo "$LARGE_FILES" >> .gitignore
    
    # IMPORTANT: Remove large files from filesystem so they don't get committed
    for file in $LARGE_FILES; do
        if [ -f "$file" ]; then
            echo "🗑️ Removing large file: $file"
            rm -f "$file"
            # Also untrack from git if it was previously tracked
            git rm --cached "$file" 2>/dev/null || true
        fi
    done
    
    echo "✅ Large files removed and added to .gitignore"
fi

# Step 9: Commit and push changes
echo "💾 Committing changes to publish branch..."
git add .
git commit -m "Manual publish: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

# Push changes
echo "🚀 Pushing to publish branch..."
git push origin publish

# Step 10: Clean up and return to original branch
echo "🧹 Cleaning up..."
rm -rf "$TEMP_DIR"

echo "🔄 Returning to $CURRENT_BRANCH branch..."
git checkout "$CURRENT_BRANCH"

echo "✅ Publishing complete! Your site should be live shortly at your GitHub Pages URL."
echo "🌐 Typically: https://rosenqvist.xyz"