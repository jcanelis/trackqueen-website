import { useStaticQuery, graphql } from "gatsby"

export default function getPrivacyContent() {
  const { allContentfulPage } = useStaticQuery(graphql`
    query getPrivacyContent {
      allContentfulPage(
        filter: { contentful_id: { eq: "2xt16MEsjBgWDZfSgvC7D6" } }
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
