import { useStaticQuery, graphql } from "gatsby"

export default function getSocialImage() {
  const socialImage = useStaticQuery(graphql`
    query getSocialImage {
      allContentfulAsset(
        filter: { contentful_id: { eq: "ZxYUNjUS0kqnnu5eC41S4" } }
      ) {
        edges {
          node {
            file {
              url
            }
          }
        }
      }
    }
  `)

  return socialImage.allContentfulAsset.edges[0].node.file
}
