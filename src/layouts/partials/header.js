import React, { Component } from "react"
import { Helmet } from 'react-helmet'
import { Link } from "gatsby"
import PropTypes from "prop-types"

class Header extends Component {

  componentDidMount() {
    const e = document.createElement('script');
    e.type = 'application/ld+json';
    e.async = true;
    e.json = {
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
      "copyrightYear" : "{{ .Date.Format '2006' }}",
      "datePublished": "{{ .Date }}",
      "dateModified" : "{{ .Date }}",
      "url" : "{{ .Permalink }}",
      "wordCount" : "{{ .WordCount }}",
      "keywords" : '[ {{ if isset .Params "tags" }}{{ range .Params.tags }}"{{ . }}",{{ end }}{{ end }}"Blog" ]' //todo
    };
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);

    document.body.appendChild(s);
  }

  render() {
    return (
      <>
        <Helmet></Helmet>
        <div id="wrapper">
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

            <Link to="/contact" className="book-online book-online--floated-right">
              <i className="icon-wifi"/> book online
            </Link>
          </header>
        </div>
      </>
    )
  }
}

export default Header;
