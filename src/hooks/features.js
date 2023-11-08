import { useStaticQuery, graphql } from "gatsby"

export default function getFeaturesContent() {
  const { allContentfulPage } = useStaticQuery(graphql`
    query getFeaturesContent {
      allContentfulPage(
        filter: { contentful_id: { eq: "7zuDVAVxGKKEUheBBV1Dn3" } }
      ) {
        edges {
          node {
            id
            title
            slug
            createdAt(formatString: "")
            updatedAt(fromNow: true)
            body {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)

  return allContentfulPage.edges[0].node
}
