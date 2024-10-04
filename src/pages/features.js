import * as React from "react"
import { Script } from "gatsby"
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
      <Script id="hotjar">{(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:5159917,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')}</Script>
      <title>TrackQueen – {title}</title>
    </Seo>
  )
}
