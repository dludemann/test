import os
import re

def process_files(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith(".md"):
            file_path = os.path.join(folder_path, filename)
            with open(file_path, 'r') as file:
                lines = file.readlines()

            block_pattern = re.compile(r"location:\s*\n\s*city:\s*Albuquerque\s*\n\s*state:\s*New Mexico", re.MULTILINE)
            block_found = None

            # Search for the block in the file
            for i, line in enumerate(lines):
                if block_pattern.match(''.join(lines[i:i+3])):
                    block_found = ''.join(lines[i:i+3])
                    break

            # If the block is found, insert it at line 2
            if block_found:
                new_lines = lines[:1] + [block_found] + lines[1:]
                with open(file_path, 'w') as file:
                    file.writelines(new_lines)

if __name__ == "__main__":
    folder_path = 'content'  # Replace with the path to your folder
    process_files(folder_path)
