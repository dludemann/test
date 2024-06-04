import glob
import re

# Define the text to be replaced and the replacement text
old_text = """      text: Before getting pics taken by The Match Artist, I was getting 2-3
        tinder matches a week. After getting new high value pictures from
        The Match Artist and tweaking my bio I was getting over 5 matches
        per day with really great girls. The results truly speak for
        themselves."""
new_text = """      text:
        I was hesitant to invest in what I thought were glorified glamour shots,
        and worried that the results would be a little cheesy... but I was also
        fed up with hours of mediocre results with my mirror selfies and cropped
        group photos... I was intimidated going into it but that was immediately
        alleviated. They did a great job of making me relaxed, comfortable, and
        confident.  And the results... WOW! Way more matches and likes, but the
        increase in the follow-through rate was the noticeable difference. No
        more expired Bumble matches waiting for that first outreach!"""

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
