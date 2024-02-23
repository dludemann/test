import os
import glob

# Define the path to the "content" folder
path = 'content'

# Get all .md files in the directory and its subdirectories
files = glob.glob(os.path.join(path, '**/*.md'), recursive=True)

# Go through each file
for file in files:
    # Open the file in read mode
    with open(file, 'r') as f:
        # Read the file's content
        content = f.read()

        # Check if "city_input" is in the file's content
        if 'city_input' in content:
            # If it is, read the file's content again line by line
            f.seek(0)

            state = ''
            for line in f:
                # Check if "state:" is in the line
                if 'state:' in line:
                    # If it is, split the line by ":" and print the second part, which is the state
                    state = line.split('state:')[1].strip()
                    break
            

            if state is not None:
                print(f"File: {file}, State: {state}")
                # Read the file's content into a list of lines
                f.seek(0)
                lines = f.readlines()

            
                # Write the lines back to the file
                try:
                    # Replace line 177 with the string "      state: <insert state>"
                    lines[176] = f"      state: {state}\n"
                    lines[177] = f"---\n"


                    with open(file, 'w') as f:
                        f.writelines(lines)
                except Exception as e:
                    print(f"Error writing to file: {file}, Error: {e}")