import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { AnchorLink, NewTabLink } from "../../src/components/Link"
import { ContentGql } from "../../src/interfaces/Contents"
import { GqlPost } from "../../src/interfaces/Post"

const Container = styled.div`
  h2 {
    margin: 0 0 10px;
    a {
      text-decoration: underline;
      color: var(--midMainColor1);
    }
  }
  .content-block__item {
    a {
      color: var(--mainColor);
      text-decoration: underline;
      margin-bottom: 10px;
      display: block;
    }
  }
`

type Props = {
  heading: {
    title: string
    link: string
  }
  items: { link: string; title: string }[]
}

export default function ContentBlock({
  heading: { title, link },
  items,
}: Props) {
  const isExternalLink = link.startsWith("http")

  return (
    <Container>
      <h2>
        {isExternalLink ? (
          <NewTabLink link={link}>{title}</NewTabLink>
        ) : (
          <Link to={link}>{title}</Link>
        )}
      </h2>
      <div className="content-block__items">
        {items.map(i => (
          <div key={i.title} className="content-block__item">
            <AnchorLink link={i.link}>{i.title}</AnchorLink>
          </div>
        ))}
      </div>
    </Container>
  )
}
