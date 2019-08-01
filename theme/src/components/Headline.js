/** @jsx jsx */
import { jsx } from "theme-ui"

function Headline({ url, title, id }) {
  return (
    <div
      sx={{
        fontFamily: "Helvetica",
        fontSize: [20],
        p: 2,
        width: ["100%"],
        a: {
          color: "text",
          textDecoration: "none",
          fontWeight: "bold",
          ":hover": {
            textDecoration: "underline",
          },
        },
      }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
        {id}
      </a>
    </div>
  )
}

export default Headline
