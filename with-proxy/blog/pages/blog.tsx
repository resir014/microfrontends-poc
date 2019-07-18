import * as React from 'react'
import { NextPage } from 'next'
import Error from 'next/error'

import Page from 'components/Page'
import Navigation from 'components/Navigation'
import Content from 'components/Content'
import PostCard from 'components/PostCard'
import { Post } from 'interfaces/post'

interface BlogPageProps {
  posts?: Post[]
}

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  if (posts) {
    return (
      <Page title="Blog Posts | Next.js TypeScript Quickstart">
        <Navigation />
        <Content>
          <h1 className="title">Our Blog</h1>
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </Content>
        <style jsx>{`
          .title {
            margin-top: 0;
            font-size: 2rem;
          }
        `}</style>
      </Page>
    )
  }

  return <Error statusCode={500} title="This shouldn't happen." />
}

BlogPage.getInitialProps = async () => {
  const posts = await import('../data/posts.json')

  return { posts: posts.default }
}

export default BlogPage
