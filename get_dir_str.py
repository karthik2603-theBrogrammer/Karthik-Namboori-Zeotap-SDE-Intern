import os

# List of directories to exclude from traversal
EXCLUDE_DIRS = {'__pycache__', 'node_modules', '.git'}

def print_directory_structure(root_dir, indent_level=0):
    try:
        # List all files and folders in the current directory
        with os.scandir(root_dir) as entries:
            for entry in entries:
                # Skip excluded directories
                if entry.name in EXCLUDE_DIRS:
                    continue

                print(' ' * indent_level + '|-- ' + entry.name)  # Print entry with indentation

                # If the entry is a directory, recursively explore it
                if entry.is_dir():
                    print_directory_structure(entry.path, indent_level + 4)

    except PermissionError as e:
        print(' ' * indent_level + '|-- [Permission Denied]', e)

if __name__ == "__main__":
    root_path = input("Enter the path of the root directory: ").strip()
    
    if os.path.exists(root_path) and os.path.isdir(root_path):
        print(f"\nDirectory structure for: {root_path}\n")
        print_directory_structure(root_path)
    else:
        print("The provided path is not a valid directory. Please try again.")
