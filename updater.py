import os
import re

import os
import re

def process_files(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith(".md"):
            file_path = os.path.join(folder_path, filename)
            with open(file_path, 'r') as file:
                content = file.read()

            # Adjusted pattern to capture the location block more robustly
            block_pattern = re.compile(r"location:\s*\n\s*city:\s*.*\s*\n\s*state:\s*.*", re.MULTILINE)
            match = block_pattern.search(content)

            if match:
                block_found = match.group(0)

                # Insert the block at line 2
                lines = content.split('\n')
                lines.insert(1, block_found)
                new_content = '\n'.join(lines)


                # Write back the modified content to the file
                with open(file_path, 'w') as file:
                    file.write(new_content)

if __name__ == "__main__":
    folder_path = './content'  # Replace with the path to your folder
    process_files(folder_path)
