import { useStaticQuery, graphql } from "gatsby"

export default function getContactContent() {
  const { allContentfulPage } = useStaticQuery(graphql`
    query getContactContent {
      allContentfulPage(
        filter: { contentful_id: { eq: "3VWI4OMweMc0FzkUbVeS4q" } }
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
