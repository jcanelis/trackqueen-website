import { useStaticQuery, graphql } from "gatsby"

export default function getAppIcon() {
  const image = useStaticQuery(graphql`
    query getAppIcon {
      allContentfulAsset(
        filter: { contentful_id: { eq: "5NjpLdKW8zATosISwuv6E" } }
      ) {
        edges {
          node {
            gatsbyImageData(
              formats: WEBP
              quality: 100
              placeholder: BLURRED
              backgroundColor: "#AB957B"
              height: 128
              width: 128
            )
            file {
              url
            }
          }
        }
      }
    }
  `)

  return image.allContentfulAsset.edges[0].node
}
