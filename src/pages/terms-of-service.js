import * as React from "react"
import getTermsContent from "../hooks/terms"
import ContentWrapper from "../components/contentwrapper"
import Seo from "../components/seo"

export default function Page() {
  const content = getTermsContent()
  return <ContentWrapper html={content.body.childMarkdownRemark.html} />
}

export function Head() {

  const isBrowser = typeof window !== `undefined`

  const { title } = getTermsContent()
  return (
    <Seo>
      <title>TrackQueen – {title}</title>
    </Seo>
  )
}
