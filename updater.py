import os
import re

def replace_image_block(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith(".md"):
            file_path = os.path.join(folder_path, filename)
            with open(file_path, 'r') as file:
                content = file.read()

            # Pattern to capture and replace the image block with title
            image_pattern = re.compile(r"image:\s*\n\s*src:\s*/images/work/.*\s*\n\s*title:\s*Transform Your Online Dating Profile", re.MULTILINE)
            new_image_block = """
image:
      src: /web/images/nick-before-after-1.png
    title: Transform Your Online Dating Profile
            """
            
            new_content = image_pattern.sub(new_image_block.strip(), content)
            
            # Write back the modified content to the file
            with open(file_path, 'w') as file:
                file.write(new_content)


if __name__ == "__main__":
    folder_path = './content'  # Replace with the path to your folder
    replace_description_block(folder_path)
