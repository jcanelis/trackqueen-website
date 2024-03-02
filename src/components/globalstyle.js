import { createGlobalStyle } from "styled-components"

// Design
import { baseUnit, typeSpace } from "./constants"

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
    opacity: 0.7;
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
    text-decoration: auto;
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

  .screenshot {
    width: 430px;
    display: inline-block;

    @media(max-width: 800px) {
      width: 290px;
    }
  }

  // Style of the active page text in the navigation
  .activeNav {
    text-decoration: none;
    cursor: initial;
    opacity: 0.6;
  }

  // YouTube embeds
  .embedVideoContainer {
    margin: ${baseUnit * 3}px 0 ${baseUnit * 2}px;
  }

  .open-source-disclaimer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${baseUnit * 4}px ${baseUnit * 3}px;
  }

  .open-source-disclaimer p {
    text-align: center;
    font-size: ${typeSpace * 4}px;
    line-height: ${typeSpace * 6}px;
    font-family: "Sohne Mono Buch";
    letter-spacing: 0.2px;
    color: rgba(142, 128, 108, 1)
  }

  .open-source-disclaimer a {
    text-align: center;
    font-size: ${typeSpace * 4}px;
    line-height: ${typeSpace * 6}px;
    font-family: "Sohne Mono Buch";
    letter-spacing: 0.2px;
    color: rgba(255, 255, 255, 0.65);
  }

  .open-source-disclaimer a:hover {
    transition: color 0.2s ease;
    color: rgba(255, 255, 255, 0.9);
  }

`

export default GlobalStyle
