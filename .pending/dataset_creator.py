import os
import unicodedata

def create_dataset(main_folder):
    dataset = {
        "uppercase": {},
        "lowercase": {},
        "numbers_and_specials": {}
    }

    # Define subfolder names
    subfolders = {
        "uppercase": "Uppercase",
        "lowercase": "Lowercase",
        "numbers_and_specials": "NumbersAndSpecials"
    }

    for category, subfolder in subfolders.items():
        folder_path = os.path.join(main_folder, subfolder)

        if not os.path.exists(folder_path):
            print(f"Warning: Folder {folder_path} does not exist. Skipping.")
            continue

        for file_name in os.listdir(folder_path):
            if file_name.endswith(".png"):
                # Extract the key from the file name (e.g., 'b' from 'b.png')
                char = file_name.split(".")[0]

                # Normalize the character to NFC (better for web use)
                char = unicodedata.normalize("NFC", char)

                # Handle special case for '?' character
                if char == "?":
                    char = "QUESTION_MARK"

                # Add to the appropriate category in the dataset
                dataset[category][char] = os.path.join(subfolder, file_name)

    return dataset

# Example usage
if __name__ == "__main__":
    main_folder_path = "letters"  # Replace with the actual path
    dataset = create_dataset(main_folder_path)

    # Save dataset to a JSON file for later use
    import json
    with open("dataset.json", "w", encoding="utf-8") as json_file:
        json.dump(dataset, json_file, indent=4, ensure_ascii=False)

    print("Dataset created successfully and saved to dataset.json")
