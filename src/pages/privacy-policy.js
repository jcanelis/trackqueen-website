import * as React from "react"
import getPrivacyContent from "../hooks/privacy"
import ContentWrapper from "../components/contentwrapper"
import Seo from "../components/seo"

export default function Page() {
  const content = getPrivacyContent()
  return <ContentWrapper html={content.body.childMarkdownRemark.html} />
}

export function Head() {
  const { title } = getPrivacyContent()
  return (
    <Seo>
      <title>TrackQueen – {title}</title>
    </Seo>
  )
}
