

import fileinput
import glob
# Define the text to be replaced and the replacement text
old_text = '''images:
      - /images/work/favorites-4491.webp
      - /images/work/tma-123.webp
      - /images/work/tma-1234.webp
      - /images/work/tma-best-2584.webp
      - /images/work/tma-best-4346.webp
      - /images/work/tma-favs-0047.webp
      - /images/work/tma-favs-6152.webp
      - /images/work/tmafav-5683.webp'''

new_text = '''    images:
      - /images/connor-tma-210.jpg
      - /images/shureed-7405361-282.jpg
      - /images/jeff.jpg
      - /images/shakked-tma-06.jpg
      - /images/tejesh-tma-0033.jpg
      - /images/20220921-18-10-35-johnkilmer-7403399.jpg
      - /images/rohith-tma-2-191.jpg\n'''

# Get all .md files in the directory
files = glob.glob('./content/*.md')

# Go through each file
for file in files:
    # Open the file
    with fileinput.input(files=(file), inplace=True) as f:
        for line in f:
            # If the line is the start of the old text, replace the entire block of text
            if line.strip() == old_text.split('\n')[0]:
                print(new_text, end='')
                # Skip the next lines of the old text
                for _ in range(len(old_text.split('\n')) - 1):
                    next(f)
            else:
                # Otherwise, print the line as is
                print(line, end='')