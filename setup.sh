#!/bin/bash

# Create necessary directories
mkdir -p src/_includes src/_layouts src/blog

# Move existing files to their new locations
mv index.html src/
mv portfolio.html src/
mv posts.html src/
mv css src/
mv public src/
mv components src/

# Create a .gitignore file
echo "_site
.DS_Store
node_modules" > .gitignore

echo "Setup complete! You can now run 'npm start' to start the development server." 