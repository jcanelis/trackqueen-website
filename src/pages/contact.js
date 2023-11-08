import * as React from "react"
import getContactContent from "../hooks/contact"
import ContentWrapper from "../components/contentwrapper"
import Seo from "../components/seo"

export default function Page() {
  const content = getContactContent()
  return <ContentWrapper html={content.body.childMarkdownRemark.html} />
}

export function Head() {
  const { title } = getContactContent()
  return (
    <Seo>
      <title>TrackQueen – {title}</title>
    </Seo>
  )
}
