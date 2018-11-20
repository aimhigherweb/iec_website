import os
import shutil

for dir in os.listdir('content/what-we-do'):
    if dir!="_index.md":
        print(dir)
        shutil.copy("content/what-we-do/%s/_index.md" %dir, "content/what-we-do/%s.md" %dir)