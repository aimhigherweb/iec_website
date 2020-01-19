import React, { Component } from "react"
import { Helmet } from 'react-helmet'
import { Link } from "gatsby"
import PropTypes from "prop-types"

class Header extends Component {

  render() {
    return (
      <>
        <Helmet>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <script type="application/ld+json">
          {
            "@context": "http://innovativeeyecare.com.au/",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "{{ .Site.BaseURL }}"
            },
            "articleSection" : "{{ .Section }}",
            "name" : "{{ .Title }}",
            "headline" : "{{ .Title }}",
            "description" : "{{ if .Description }}{{ .Description }}{{ else }}{{if .IsPage}}{{ .Summary }}{{ end }}{{ end }}",
            "inLanguage" : "en-US",
            "author" : "{{ .Params.Author }}",
            "creator" : "{{ .Params.Author }}",
            "publisher": "{{ .Params.Author }}",
            "accountablePerson" : "{{ .Params.Author }}",
            "copyrightHolder" : "{{ .Params.Author }}",
            "copyrightYear" : "{{ .Date.Format "2006" }}",
            "datePublished": "{{ .Date }}",
            "dateModified" : "{{ .Date }}",
            "url" : "{{ .Permalink }}",
            "wordCount" : "{{ .WordCount }}",
            "keywords" : [ {{ if isset .Params "tags" }}{{ range .Params.tags }}"{{ . }}",{{ end }}{{ end }}"Blog" ]
          }
        </script>
        <title>{{.Title}}</title>
        <link rel="shortcut icon" href="/images/favicon.ico"/>

        <script src="https://code.jquery.com/jquery-1.11.2.min.js">
        </script>

        {{$main_js: = resources.Get "js/main.js" | resources.Fingerprint}}
        <script src="{{ $main_js.Permalink }}">
        </script>

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
          type="text/css"
        />

        {{$styles: = resources.Get "scss/main.scss" | toCSS(dict "enableSourceMap" true)}}
        <link rel="stylesheet" href="{{$styles.Permalink}}"/>

        {{$practice_booker_js: = resources.Get "js/practice-booker.js" | fingerprint}}
        <script src="{{ $practice_booker_js.Permalink }}">
        </script>

        <link rel="stylesheet" href="/css/video-js.min.css"/>
        <script src="/js/video.min.js" type="text/javascript"></script>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script>
          if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }
        </script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129433065-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];

          function gtag() {
          dataLayer.push(arguments);
        }

          gtag('js', new Date());
          gtag('config', 'UA-129433065-1');
        </script>
        <script>
          !function (g, s, q, r, d) {
          r = g[r] = g[r] || function () {
            (r.q = r.q || []).push(
              arguments)
          };
          d = s.createElement(q);
          q = s.getElementsByTagName(q)[0];
          d.src = '//d1l6p2sc9645hc.cloudfront.net/tracker.js';
          q.parentNode.insertBefore(d, q)
        }(window, document, 'script', '_gs');

          _gs('GSN-212646-P');
        </script>
      </Helmet>
        <div id="wrapper">
          <!-- padding-top added by sr looks like some mod at server -->
          <header id="header">
            <ul className="socials-list">
              <li>
                <a href="https://www.facebook.com/innovativeeyecareadelaide">
                  <i className="icon-facebook"/><span className="hidden">facebook</span>
                </a>
              </li>
              <li>
                <a href="http://instagram.com/innovative_eyecare">
                  <i className="icon-instagramm"/><span className="hidden">instagram</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/iecadelaide">
                  <i className="icon-twitter"/><span className="hidden">twitter</span>
                </a>
              </li>
              <li>
              </li>
            </ul>

            <ul className="navbar__contact-list">
              <li>
                <i className="icon-call-answer"/>
                <span className="navbar__contact-list__title">City</span>
                <a href="tel:0882319341">(08) 8231 9341</a>
              </li>
              <li>
                <i className="icon-call-answer"/>
                <span className="navbar__contact-list__title">Woodville</span>
                <a href="tel:0884459050">(08) 8445 9050</a>
              </li>
            </ul>

            <a href="/contact" className="book-online book-online--floated-right">
              <i className="icon-wifi"/> book online
            </a>
          </header>
        </div>
      </>
    )
  }
}
