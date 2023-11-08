import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

// Design
import { baseUnit } from "./constants"

const Wrapper = styled.div`
  margin: 0;
  padding: ${baseUnit * 2}px 0 ${baseUnit * 2}px;

  @media (max-width: ${baseUnit * 94}px) {
    padding: ${baseUnit * 3}px;
  }
`

const Content = styled.div`
  margin: 0 auto;
  width: ${baseUnit * 90}px;
  font-size: ${baseUnit * 6}px;
  line-height: ${baseUnit * 9}px;
  text-align: left;

  blockquote p {
    margin: 0;
    padding: 0;
    font-family: "Sohne Breit Kraftig";
    font-size: 40px;
    line-height: ${baseUnit * 7}px;
    text-align: center;
  }

  h2 {
    margin: 0 0 ${baseUnit * 2}px;
    font-family: "Sohne Breit Fett";

    @media (max-width: 800px) {
      line-height: ${baseUnit * 7}px;
    }
  }

  h3 {
    margin: ${baseUnit * 10}px 0 0;
    font-family: "Sohne Breit Fett";
    font-size: ${baseUnit * 5}px;
    line-height: ${baseUnit * 8}px;
  }

  h4 {
    margin: 0 0 ${baseUnit * 1}px;
    font-family: "Sohne Breit Kraftig";
    font-size: ${baseUnit * 2.8}px;
    line-height: ${baseUnit * 4}px;
    letter-spacing: 0.3px;
  }

  h5 {
    margin: 0 0 ${baseUnit * 1}px;
    font-family: "Sohne Mono Buch";
    font-size: ${baseUnit * 2}px;
    line-height: ${baseUnit * 3}px;
    letter-spacing: 0.3px;
  }

  li {
    margin: 0;
    display: block;
    font-size: 14px;
    line-height: ${baseUnit * 4}px;
  }

  img {
    margin: 0 0 ${baseUnit * 14}px;
  }

  @media (max-width: ${baseUnit * 94}px) {
    width: 100%;
  }
`

const ContentWrapper = ({ html }) => {
  return (
    <Wrapper>
      <Content dangerouslySetInnerHTML={{ __html: html }}></Content>
    </Wrapper>
  )
}

ContentWrapper.propTypes = {
  html: PropTypes.string,
}

export default ContentWrapper
