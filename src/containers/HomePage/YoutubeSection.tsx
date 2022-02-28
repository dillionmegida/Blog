import styled from "styled-components"
import { AllContentGql } from "../../interfaces/Content"
import React from "react"
import YouTube from "react-youtube"
import constants from "../../constants"
import { NewTabLink } from "../../components/Link"
import { FormattedMessage } from "react-intl"

const Section = styled.section`
  .articles {
    display: grid;
    --columns: 2;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-column-gap: 40px;
  }
  .more-articles-link {
    color: var(--mainColor1);
    font-size: 20px;
    text-decoration: underline;
  }

  .grid {
    grid-gap: 40px;
  }
`

type Props = {
  youtube: AllContentGql
  deeecode: AllContentGql
}

const { pageLinks, social } = constants

export default function YoutubeSection({ youtube, deeecode }: Props) {
  return (
    <Section>
      <h2 className="underline">Youtube</h2>
      <div className="grid">
        {deeecode.edges.map(({ node }) =>
          node.content.slice(0, 2).map(({ link }) => {
            const videoId = link.split(/(=|\/)/).pop()

            return (
              <YouTube
                opts={{ width: "100%" }}
                key={videoId}
                videoId={videoId}
              />
            )
          })
        )}
        {youtube.edges.map(({ node }) =>
          node.content.slice(0, 2).map(({ link }) => {
            const videoId = link.split(/(=|\/)/).pop()

            return (
              <YouTube
                opts={{ width: "100%" }}
                key={videoId}
                videoId={videoId}
              />
            )
          })
        )}
      </div>
      <NewTabLink className="view-all-link" link={social.YouTube.link}>
        <FormattedMessage id="view all videos" />
      </NewTabLink>
    </Section>
  )
}
