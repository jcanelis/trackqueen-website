import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

// Utility
import { baseUnit } from "./constants"

const Wrapper = styled.button`
  margin: 0;
  padding: 0 ${baseUnit * 4}px;
  display: inline-block;
  height: ${baseUnit * 7}px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Sohne Mono Buch";
  font-weight: normal;
  letter-spacing: 0.3px;
  white-space: nowrap;
  appearance: button;
  color: rgba(240, 240, 240, 1);
  background: rgba(0, 0, 0, 1);
  transition: all 150ms ease;
  transform: translateY(0px);
  box-shadow: none;
  border-radius: ${baseUnit * 6}px;
  background: rgba(10, 10, 10, 1);
  border: 2px solid rgba(145, 145, 145, 1);

  &:active {
    background: rgba(80, 80, 80, 1);
    border: 2px solid rgba(151, 115, 69, 1);
  }

  &:hover {
    cursor: pointer;
    background: rgba(33, 33, 33, 1);
    border: 2px solid rgba(151, 115, 69, 1);
    transform: translateY(-1px);
  }
`

const Button = ({ func, text }) => <Wrapper onClick={func}>{text}</Wrapper>

Button.propTypes = {
  text: PropTypes.string,
  func: PropTypes.func,
}

export default Button
