# IEC-Website 

This is the website for Innovative Eye Care optometry practice in Adelaide, South Australia.


## Building

To build and serve for development:

```
hugo serve
```

Or:
```
hugo serve --disableFastRender
```


## Project structure and asset pipeline
We use the Hugo asset pipeline to build scss files. 
See [here](https://blog.fullstackdigital.com/how-to-use-hugo-template-variables-in-scss-files-in-2018-b8a834accce).

This requires installing the Hugo extended version. 
On Windows, this is done using `choco install hugo-extended`, and it should be just as easy on other Linux/MacOS.

We use a site structure similar to [here](https://github.com/gohugoio/hugoDocs/tree/master/static). 


## Hosting
We use Netlify for hosting.
This is wired up to github, and will automatically deploy on commits to master.


## CMS
This uses the Netlify CMS wired up to Netlify authentication for user management, and commits content changes to the repo on github.
Netlify CMS is a single page react app - there is no back-end server required.

Because of the way this works (reading files from Github), you can't really test the CMS localy.
It would be possible to edit the config.toml to use an additional branch (eg `beta`) in order to test changes to the CMS. 
This would effectively set up another live version of the site.
However, we haven't handed over to the client yet, so we can just use `master` at this time.