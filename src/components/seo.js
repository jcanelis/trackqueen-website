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

      <script>{`
        <script src='https://chat-assets.frontapp.com/v1/chat.bundle.js'></script>
        <script>window.FrontChat('init', { chatId: '544856256d56b0e320c0f13815aada5a', useDefaultLauncher: true});</script>
      `}</script>

      {/* Structured data for Google */}
      <script>{`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_XcpeeZdlOw2t5dq7v3S2JtwikHghyQljvW2GrTontme', {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
    })
      `}</script>

      <meta charset="UTF-8" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={tagline} />

      {/* App Store banner */}
      <meta name="apple-itunes-app" content="app-id=1622531765" />

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
