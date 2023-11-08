import { createGlobalStyle } from "styled-components"

// Design
import { baseUnit } from "./constants"

// Sohne by Klim Type Foundry
// https://klim.co.nz/retail-fonts/soehne/

// Breit
import SohneBreitKraftig from "../../static/fonts/soehne-breit-kraftig.woff2"
import SohneBreitDreiviertelfett from "../../static/fonts/soehne-breit-dreiviertelfett.woff2"
import SohneBreitFett from "../../static/fonts/soehne-breit-fett.woff2"

// Mono
import SohneMonoBuch from "../../static/fonts/soehne-mono-buch.woff2"

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: "Sohne Mono Buch";
    src: url(${SohneMonoBuch}) format("woff2");
    font-display: swap;
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Sohne Breit Dreiviertelfett";
    src: url(${SohneBreitDreiviertelfett}) format("woff2");
    font-display: swap;
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Sohne Breit Fett";
    src: url(${SohneBreitFett}) format("woff2");
    font-display: swap;
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Sohne Breit Kraftig";
    src: url(${SohneBreitKraftig}) format("woff2");
    font-display: swap;
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, "Segoe UI Emoji", "Segoe UI Symbol";
  }

  body {
    width: 100%;
    background-color: rgba(0,0,0,1);
  }

  // Typography
  h1, h2, h3, h4, h5, ul, li, ol, a, p, span, blockquote, figcaption {
    padding: 0;
    margin: 0;
    font-weight: normal;
    font-famiy: "Sohne Breit Fett", -apple-system, BlinkMacSystemFont, Segoe UI;
    color: rgba(255,255,255,0.8);
  }

  h1, h2 {
    font-size: ${baseUnit * 6}px;
    line-height: ${baseUnit * 9}px;
    letter-spacing: 0.2px;
  }

  h3 {
    font-size: ${baseUnit * 3}px;
    line-height: ${baseUnit * 8}px;

  }

  h4 {
    font-size: ${baseUnit * 2}px;
    line-height: ${baseUnit * 3}px;
    color: rgba(255,255,255,0.65);
  }

  p {
    font-size: ${baseUnit * 2.2}px;
    line-height: 28px;
    font-weight: 400;
    margin: ${baseUnit * 1}px 0 ${baseUnit * 4}px;
    color: rgba(255,255,255,0.75);
  }

  figcaption { 
    font-size: ${baseUnit * 2}px;
    line-height: ${baseUnit * 3}px;
    text-align: center;
    opacity: 0.7
  }

  strong { 
    font-weight: 600;
  }

  // Lists
  ul {
    width: max-content;
    list-style: none;
  }

  ul, ol {
    margin: 0 0 ${baseUnit * 5}px;
    text-decoration: none;
  }

  ol { 
    text-decoration: auto
  }

  li {
    display: inline-block;
    margin: ${baseUnit * 2}px;    
  }

  hr {
    margin: ${baseUnit * 6}px 0;
    border: 1px solid rgba(255,255,255,0.2);
  }

  .gatsby-resp-image-link {
    margin: 0;
    padding: ${baseUnit * 10}px ${baseUnit * 10}px ${baseUnit * 6}px;

    @media (max-width: 800px) {
      margin: ${baseUnit * 4}px 0 0;
      padding: 0 0 ${baseUnit * 3}px;
    }
  }

  .gatsby-image-wrapper {
    width: ${baseUnit * 50}px;
  }

  // .image-link {
  //   display: inline-block;
  // }

  .screenshot {
    width: 428px;
    display: inline-block;
    // opacity: 1;
    // box-shadow: 0.5px 0.4px 1.1px rgba(0, 0, 0, 0.022), 1.2px 1px 2.9px rgba(0, 0, 0, 0.031), 2.5px 1.9px 5.8px rgba(0, 0, 0, 0.039), 5.1px 4px 12px rgba(0, 0, 0, 0.048), 14px 11px 33px rgba(0, 0, 0, 0.07);

    @media(max-width: 800px) {
      width: 290px;
    }
  }

  // Style of the active page text in the navigation
  .activeNav {
    text-decoration: none;
    cursor: initial;
    opacity: 0.6
  }

  // YouTube embeds
  .embedVideoContainer {
    margin: ${baseUnit * 3}px 0 ${baseUnit * 2}px;
  }
`

export default GlobalStyle
