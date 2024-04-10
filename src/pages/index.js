import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

// Components
import getScreenshots from "../hooks/screenshots"
import Seo from "../components/seo"
import Separator from "../components/separator"
import { baseUnit } from "../components/constants"

const Wrapper = styled.div`
  background-color: rgba(20, 20, 20, 1);
`

const ImageWrapper = styled.li`
  display: inline-block;
  margin: ${baseUnit * 3}px ${baseUnit * 1}px ${baseUnit * 3}px
    ${baseUnit * 3}px;

  @media (max-width: 600px) {
    margin: ${baseUnit * 2}px 0 ${baseUnit * 2}px ${baseUnit * 3}px;
  }
`

const Caption = styled.p`
  font-size: 16px;
  font-family: Sohne Mono Buch;
  font-weight: normal;
`

export default function Home() {
  const screenshots = getScreenshots()
  return (
    <>
      <Separator />
      <Wrapper>
        <div
          style={{
            width: "100%",
            overflowX: "scroll",
          }}
        >
          <ul
            style={{
              width: "max-content",
              paddingTop: "16px",
              paddingLeft: "24px",
              paddingBottom: "8px",
              paddingRight: "48px",
            }}
          >
            {screenshots[0].node.screenshots.map((node, index) => {
              const image = getImage(node)
              const loading = index > 3 ? "lazy" : "eager"

              return (
                <ImageWrapper key={node.contentful_id}>
                  <Caption>{node.title}</Caption>
                  <a
                    className={"image-link"}
                    aria-label={`View ${node.title} screenshot`}
                    href={node.publicUrl}
                  >
                    <GatsbyImage
                      className={"screenshot"}
                      image={image}
                      alt={node.title}
                      loading={loading}
                    />
                  </a>
                </ImageWrapper>
              )
            })}
          </ul>
        </div>
      </Wrapper>
    </>
  )
}

export function Head() {
  return (
    <Seo>
      <title>TrackQueen</title>
    </Seo>
  )
}
