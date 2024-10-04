import * as React from "react"
import getFeaturesContent from "../hooks/features"
import ContentWrapper from "../components/contentwrapper"
import Seo from "../components/seo"

export default function Page() {
  const content = getFeaturesContent()
  return <ContentWrapper html={content.body.childMarkdownRemark.html} />
}

export function Head() {
  const { title } = getFeaturesContent()
  return (
    <Seo>
      <title>TrackQueen – {title}</title>
    </Seo>
  )
}
