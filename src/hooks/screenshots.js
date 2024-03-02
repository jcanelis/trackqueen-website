import { useStaticQuery, graphql } from "gatsby"

export default function getScreenshots() {
  const data = useStaticQuery(graphql`
    query getScreenshots {
      allContentfulScreenshots(
        filter: { contentful_id: { eq: "6ldjvkr97ZtnzWJJyDQkxr" } }
      ) {
        edges {
          node {
            screenshots {
              contentful_id
              title
              description
              gatsbyImageData(
                formats: WEBP
                quality: 65
                placeholder: BLURRED
                backgroundColor: "#333333"
                width: 430
              )
              publicUrl
            }
          }
        }
      }
    }
  `)

  return data.allContentfulScreenshots.edges
}
