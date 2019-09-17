import React from "react";
import { graphql } from "gatsby";
import Layout from '../Layout/Layout';
import Disqus from './disqus';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <Layout
        PageTitle={`${post.frontmatter.title} - Dillion's Blog`}
        PageLink={post.fields.slug}
        PageDescription={post.frontmatter.pageDescription}
        PageKeywords={post.frontmatter.pageKeywords}
        TwitterBlogImage='https://res.cloudinary.com/dillionmegida/image/upload/v1567211530/images/website/favicon.png'
      >
        <h1 style={{color: 'var(--lightBlue)'}}>{post.frontmatter.title}</h1>
        <p style={{color: 'var(--mainColor1)', fontWeight: 'bold'}}>{post.frontmatter.date} | {post.frontmatter.readTime} read</p>
        <hr/>
        <div style={{lineHeight: '30px', fontSize: '20px'}}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <p style={{fontSize: '25px', fontWeight: 'bold', margin: '0'}}>Share this article</p>
        <p style={{fontSize: '30px', margin: '0'}}>
          <a href={`https://twitter.com/intent/tweet?text=${post.frontmatter.title} by @iamdillion - https://dillionmegida.com${post.fields.slug}`}>
            <i style={{color: '#1DA1F2'}} class='fa fa-twitter'></i>
          </a>
          </p>
        <hr/>
        <Disqus Url={post.fileAbsolutePath} PostId={post.id} PostTitle={post.frontmatter.title}/>
        {console.log(data)}
      </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        date
        readTime
        pageDescription
        pageKeywords
      }
    }
  }
`