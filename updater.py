import os
import re

def replace_description_block(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith(".md"):
            file_path = os.path.join(folder_path, filename)
            with open(file_path, 'r') as file:
                content = file.read()

            # Pattern to capture and replace the description block
            description_pattern = re.compile(r"description:\s*\n\s*Everything you need to know about the product and billing. Can’t find\n\s*the answer you’re looking for\? Please chat to our friendly team.", re.MULTILINE)
            new_description_block = """
description:
  Have more questions than what you see here? Reach out to our team—we'd
  love to chat and help however we can.
            """
            
            new_content = description_pattern.sub(new_description_block.strip(), content)
            
            # Write back the modified content to the file
            with open(file_path, 'w') as file:
                file.write(new_content)

if __name__ == "__main__":
    folder_path = './content'  # Replace with the path to your folder
    replace_description_block(folder_path)
