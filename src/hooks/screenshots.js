import { useStaticQuery, graphql } from "gatsby"

export default function getScreenshots() {
  const data = useStaticQuery(graphql`
    query getScreenshotss {
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
                quality: 55
                placeholder: BLURRED
                backgroundColor: "#333333"
                width: 428
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
