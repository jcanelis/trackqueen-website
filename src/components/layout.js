import * as React from "react"

// Gatsby
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Other
import styled from "styled-components"
import PropTypes from "prop-types"

// Components
import { baseUnit } from "./constants"
import Button from "./button"
import GlobalStyle from "../components/globalstyle"

// Hook
import getAppIcon from "../hooks/app-icon"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${baseUnit * 1}px;
  align-items: center;
  margin: ${baseUnit * 8}px 0px;

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`

const IconWrapper = styled.div`
  opacity: 1;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`

const Header = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-family: "Sohne Breit Dreiviertelfett";
  color: rgba(255, 255, 255, 0.85);
`

const Subheader = styled.p`
  margin: 0 0 ${baseUnit * 2}px;
  padding: 0;
  font-size: ${baseUnit * 3}px;
  font-weight: 400;
  line-height: ${baseUnit * 3}px;
  // color: rgba(255, 255, 255, 0.55);
  color: #7e6f63;
`

const Footer = styled.footer`
  margin: ${baseUnit * 3}px 0 0;
  padding: ${baseUnit * 4}px ${baseUnit * 3}px ${baseUnit * 6}px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: ${baseUnit * 6}px;

  @media (max-width: 1400px) {
    flex-direction: column;
    padding: ${baseUnit * 4}px ${baseUnit * 3}px ${baseUnit * 6}px
      ${baseUnit * 6}px;
  }

  a {
    font-size: ${baseUnit * 4.7}px;
    line-height: ${baseUnit * 9}px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    font-family: "Sohne Breit Fett";
  }
`

const Layout = ({ children }) => {
  const appIconImage = getAppIcon()
  const appIcon = getImage(appIconImage)

  return (
    <>
      <GlobalStyle />
      <div>
        <Wrapper>
          <IconWrapper>
            <Link to={"/"}>
              <GatsbyImage
                image={appIcon}
                height={`${baseUnit * 8}`}
                width={`${baseUnit * 8}`}
                layout="fixed"
                style={{
                  height: `${baseUnit * 8}px`,
                  width: `${baseUnit * 8}px`,
                  borderRadius: `${baseUnit * 2}px`,
                }}
                alt={"TrackQueen app icon"}
              />
            </Link>
          </IconWrapper>

          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Header style={{ textTransform: "none" }}>TrackQueen</Header>
          </Link>

          <Subheader>Learn more about your music.</Subheader>

          <Button
            text={"Download on the App Store"}
            func={() => {
              window.location.href =
                "https://apps.apple.com/us/app/trackqueen/id1622531765"
            }}
          />
        </Wrapper>

        {children}

        <Footer>
          <Link to={"/features"} activeClassName={"activeNav"}>
            Features
          </Link>

          <Link to={"/privacy-policy"} activeClassName={"activeNav"}>
            Privacy
          </Link>

          <Link to={"/terms-of-service"} activeClassName={"activeNav"}>
            Terms
          </Link>

          <Link to={"/contact"} activeClassName={"activeNav"}>
            Contact
          </Link>
        </Footer>

        <div className={"open-source-disclaimer"}>
          <p>
            TrackQueen is an open source project. You can view the source code
            for <a href="https://github.com/jcanelis/trackqueen">the app</a> and{" "}
            <a href="https://github.com/jcanelis/trackqueen-website">
              this website
            </a>{" "}
            on GitHub.
          </p>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout
