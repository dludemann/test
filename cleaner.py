

import fileinput
import glob
# Define the text to be replaced and the replacement text
old_text = 'src: /images/location/group-image.webp'
new_text = 'src: /images/dan-collage.png'
# Get all .md files in the directory
files = glob.glob('./content/*.md')

# Go through each file
for file in files:
    # Open the file
    with fileinput.input(files=(file), inplace=True) as f:
        for line in f:

            print(line.replace(old_text, new_text), end='')

            # if '      - /images/work/tmafav-5683.webp' not in line:
            #     print(line, end='')

            # line = line.replace('/images/work/favorites-4491.webp', '/images/connor-tma-210.jpg')
            # line = line.replace('/images/work/tma-123.webp', '/images/shureed-7405361-282.jpg')
            # line = line.replace('/images/work/tma-1234.webp', '/images/jeff.jpg')
            # line = line.replace('/images/work/tma-best-2584.webp', '/images/shakked-tma-06.jpg')
            # line = line.replace('/images/work/tma-best-4346.webp', '/images/tejesh-tma-0033.jpg')
            # line = line.replace('/images/work/tma-favs-0047.webp', '/images/20220921-18-10-35-johnkilmer-7403399.jpg')
            # line = line.replace('/images/work/tma-favs-6152.webp', '/images/rohith-tma-2-191.jpg')
            # line = line.replace('/images/work/tmafavs-5683.webp', '')
            # print(line, end='')