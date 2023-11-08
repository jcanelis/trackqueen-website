import * as React from "react"
import PropTypes from "prop-types"

// Hooks
import getSocialImage from "../hooks/social-image"

const Seo = ({ children }) => {
  const socialImage = getSocialImage()
  const tagline = "Learn more about your music."
  return (
    <>
      {children}

      <meta charset="UTF-8" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={tagline} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:author" content="John Canelis" />
      <meta property="og:title" content="TrackQueen" />
      <meta property="og:description" content={tagline} />
      <meta property="og:image" content={`https:${socialImage.url}`} />
      <meta
        property="og:image:secure_url"
        content={`https:${socialImage.url}`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:image:alt" content="TrackQueen cover photo" />
      <meta property="og:url" content="https://trackqueen.app" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="TrackQueen" />
      <meta name="twitter:description" content={tagline} />
      <meta name="twitter:image" content={`https:${socialImage.url}`} />
      <meta name="twitter:image:alt" content="TrackQueen cover photo" />
      <meta name="twitter:url" content="https://trackqueen.app" />
    </>
  )
}

Seo.propTypes = {
  children: PropTypes.object,
}

export default Seo
