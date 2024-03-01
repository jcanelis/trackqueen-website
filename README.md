[![Lint & Gatsby Build](https://github.com/jcanelis/trackqueen-website/actions/workflows/gatsby-build-prod.yml/badge.svg)](https://github.com/jcanelis/trackqueen-website/actions/workflows/gatsby-build-prod.yml)

## TrackQueen website 💿 👑

Learn more about your music. TrackQueen gives you analysis, background info, comments, lyrics, videos and other content about your currently playing song.

### Overview

The marketing website for TrackQueen is built with [Gatsby](https://www.gatsbyjs.com/) using React. [Contentful](https://www.contentful.com/) is used to manage most of the content. Some Google [Cloud Functions](https://cloud.google.com/functions) are made available using Node.js with [Firebase](https://firebase.google.com/). These function endpoints are used to send text messages with [Twilio](https://www.twilio.com/) and emails with [SendGrid](https://sendgrid.com/). The site is hosted on [Netlify](https://www.netlify.com/). Pull requests from GitHub will generate a preview URL and anything merged will ship to production after running a quick lint and build check using [GitHub Actions](https://github.com/features/actions).

### Content

All of the imagery and most of the text content for each page on the site is managed by using the Contentful [headless](https://www.contentful.com/headless-cms/) CMS. If content is updated, a new site build is triggered on Netlify via a webhook. If changes to the codebase are merged, a new build is triggered and Netlify will fetch the latest from Contentful.

### Fonts

This project has a web license to use the Söhne typeface from [Klim Type Foundry](https://klim.co.nz/collections/soehne/). The font files cannot be included in the public repo so they are imported during the Netlify build process.

### Development

Here's how to get started building:

```shell
git clone git@github.com:jcanelis/trackqueen-website.git
nvm use 20.11.0
cd trackqueen-website && yarn
gatsby develop
gatsby build
gatsby serve
```
