import * as React from "react"
import ContentWrapper from "../components/contentwrapper"
import Seo from "../components/seo"

export default function Page() {
  return (
    <ContentWrapper html={"<h1 style=text-align:center>Page not found</h1>"} />
  )
}

export function Head() {
  return (
    <Seo>
      <title>TrackQueen – Page not found</title>
    </Seo>
  )
}
