import { useStaticQuery, graphql } from "gatsby"

export default function getTermsContent() {
  const { allContentfulPage } = useStaticQuery(graphql`
    query getTermsContent {
      allContentfulPage(
        filter: { contentful_id: { eq: "54WUwMQ1dxVedtxRIyTYp6" } }
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
