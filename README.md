# IEC-Website 

## ported from Kirby to Hugo 

- All assets (images, videos, css and js) are under /static/assets.
- All templating is done using the layouts folder. 
- Section folders who, what, resources and blog each have a template.txt file. To create a new page in that section, create a folder (under the section folder), copy the template.txt to _index.md under that new folder, update metadata and add content in that .md file. The new folder name will be in the URL/permalink, so use appropriate string. 

### Metadata 

- The metadata **foldernum** in the _index.md file is the old number prefix of the folder, and to be used in looping, if required. 
- The metadata **preview-image** is kept for future use, if required. 
- The metadata **intro** was attempted in the what section, but due to non-standard and HTML content it was not possible to integrate it as hugo metadata. 


