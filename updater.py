import os

# Folder containing markdown files
folder_path = './content'

# New content to replace the image src section
new_image_content = '''
    image:
      src: https://images.thematchartist.com/images/portfolio/BeforeAfter/richard-before.jpg
    image2:
      src: https://images.thematchartist.com/images/portfolio/BeforeAfter/richard-after.jpg
'''

# Iterate through each file in the folder
for filename in os.listdir(folder_path):
    if filename.endswith('.md'):
        file_path = os.path.join(folder_path, filename)
        
        # Read the content of the file
        with open(file_path, 'r') as file:
            content = file.read()
        
        # Replace the image src section
        new_content = content.replace(
            '''image:
      src: /web/images/nick-before-after-1.png''', new_image_content)
        
        # Write the updated content back to the file
        with open(file_path, 'w') as file:
            file.write(new_content)

print("Replacement completed.")
