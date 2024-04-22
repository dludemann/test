import os
from bs4 import BeautifulSoup

# Directory containing the Markdown files
directory = './content/bumble'

# Iterate over each file in the directory
for filename in os.listdir(directory):
    if filename.endswith('.md'):  # Check for Markdown files
        filepath = os.path.join(directory, filename)
        
        # Read the content of the file
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Use BeautifulSoup to parse HTML content
        soup = BeautifulSoup(content, 'html.parser')
        
        # Find all <h2> tags that contain <a> tags
        for h2 in soup.find_all('h2'):
            if h2.a:
                # Replace the h2 contents with just the text inside the <a>
                new_tag = soup.new_tag('h2', id=h2['id'])
                new_tag.string = h2.a.string
                h2.replace_with(new_tag)
        
        # Write the modified content back to the file
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(str(soup))

print("All files have been processed.")
