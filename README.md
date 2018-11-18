# IEC-Website 

This is the website for Innovative Eye Care optometry practice in Adelaide, South Australia.


## Building

To build and serve:
```
hugo serve
```

Or to just build to `public` directory:

```
hugo
```


## Hosting
We use Netlify for hosting.
This is wired up to github, and will automatically deploy on push to master.


## CMS
This uses the Netlify CMS wired up to Netlify authentication for user management, and commits content changes to the repo on github.
Netlify CMS is a single page react app - there is no back-end server required.

Because of the way this works (reading files from Github), you can't really test the CMS localy.
It would be possible to edit the config.toml to use an additional branch (eg `beta`) in order to test changes to the CMS. 
This would effectively set up another live version of the site.
However, we haven't handed over to the client yet, so we can just use `master` at this time.