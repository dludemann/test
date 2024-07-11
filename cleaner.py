import glob
import re

# Define the text to be replaced and the replacement text
old_text = """text: Improved social media presence"""
new_text = """text: Find your partner faster"""

# Get all .md files in the directory
files = glob.glob('./content/*.md')

# Go through each file
for file in files:
    # Read the entire content of the file
    with open(file, 'r') as f:
        content = f.read()

    # Replace the old text with the new text
    content = content.replace(old_text, new_text)

    # Write the modified content back to the file
    with open(file, 'w') as f:
        f.write(content)
