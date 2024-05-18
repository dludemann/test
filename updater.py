import os
import re

def replace_description_block(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith(".md"):
            file_path = os.path.join(folder_path, filename)
            with open(file_path, 'r') as file:
                content = file.read()

            # Pattern to capture and replace the images block
            images_pattern = re.compile(r"images:\s*\n(\s*- /images/.*\n)+", re.MULTILINE)
            new_images_block = """
images:
      - https://photostma.blob.core.windows.net/marketing/tejesh-tma-0033.jpeg
      - https://photostma.blob.core.windows.net/marketing/jeff.jpeg
      - https://photostma.blob.core.windows.net/marketing/justen-tma-9079.jpeg
      - https://photostma.blob.core.windows.net/marketing/DSCF7389222.jpeg
      - https://photostma.blob.core.windows.net/marketing/rohith-tma-2-191.jpeg
      - https://photostma.blob.core.windows.net/marketing/connor-tma-210.jpeg
      - https://photostma.blob.core.windows.net/marketing/DSCF5511.jpeg
      - https://photostma.blob.core.windows.net/marketing/DSCF4069.jpeg
      - https://photostma.blob.core.windows.net/marketing/ian-tma-0396.jpeg
      - https://photostma.blob.core.windows.net/marketing/shakked-tma-06.jpeg
      - https://photostma.blob.core.windows.net/marketing/juan-1172.jpeg
            """
            
            content = images_pattern.sub(new_images_block.strip(), content)
            
            # Write back the modified content to the file
            with open(file_path, 'w') as file:
                file.write(content)


if __name__ == "__main__":
    folder_path = './content'  # Replace with the path to your folder
    replace_description_block(folder_path)
