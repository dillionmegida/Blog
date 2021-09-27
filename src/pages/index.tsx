import { graphql } from "gatsby"
import React from "react"
import Helmet from "../components/Helmet"
import Layout from "../components/Layout"
import constants from "../constants"
import HomePage from "../containers/HomePage"
import { AllContentsQql } from "../interfaces/Contents"
import { AllPostsGql } from "../interfaces/Post"

type Props = {
  data: {
    youtube: AllContentsQql
    allArticlesOnMyWebite: AllPostsGql
  }
}

const { meta } = constants

export default function Home({ data }: Props) {
  return (
    <Layout>
      <Helmet pageTitle={meta.TITLE} pageLink="/" pageDesc={meta.DESC} />
      <HomePage contents={data} />
    </Layout>
  )
}

export const query = graphql`
  query ContentsQuery {
    youtube: allYoutubeYaml {
      edges {
        node {
          id
          link
          platform
          content {
            title
            link
            tags
          }
        }
      }
    }

    allArticlesOnMyWebite: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^(/p/)/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          timeToRead
          frontmatter {
            tags
            title
            date
            pageDescription
          }
        }
      }
    }
  }
`