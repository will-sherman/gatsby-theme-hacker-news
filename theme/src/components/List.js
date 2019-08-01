/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Headline from "./Headline"

function List() {
  const data = useStaticQuery(graphql`
    {
      allHnStory {
        edges {
          node {
            id
            title
            url
          }
        }
      }
    }
  `)

  return (
    data.allHnStory.edges && (
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mx: -2,
        }}
      >
        {data.allHnStory.edges.map(({ node }) => (
          <Headline key={node.id} title={node.title} url={node.url} />
        ))}
      </div>
    )
  )
}

export default List
