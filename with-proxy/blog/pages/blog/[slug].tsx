import * as React from 'react'
import { NextPage } from 'next'
import Error from 'next/error'
import convert from 'htmr'

import Page from 'components/Page'
import Navigation from 'components/Navigation'
import Content from 'components/Content'
import { Post } from 'interfaces/post'
import formatDate from 'utils/formatDate'

interface DisplayPostProps {
  errorCode?: number
  post?: Post
}

const DisplayPost: NextPage<DisplayPostProps> = ({ errorCode, post }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  if (post) {
    return (
      <Page title="About | Next.js TypeScript Quickstart">
        <Navigation />
        <Content>
          <article>
            <header>
              <time className="published-at" dateTime={post.date}>
                {formatDate(new Date(post.date))}
              </time>
              <h1 className="title">{post.title}</h1>
              {post.description && <p className="subtitle">{post.description}</p>}
              {post.headerImage && <img className="header-image" src={post.headerImage} alt={post.title} />}
            </header>

            {convert(post.contentHtml)}
          </article>
        </Content>
        <style jsx>{`
          header {
            margin-bottom: 1.5rem;
          }

          .title {
            margin-top: 0;
            margin-bottom: 0.5rem;
            font-size: 2rem;
          }

          .subtitle {
            margin: 0;
            font-size: 1.25rem;
          }

          .published-at {
            display: block;
            margin-bottom: 0.5rem;
          }

          .header-image {
            margin-top: 1.5rem;
            margin-bottom: 0;
            width: 100%;
          }
        `}</style>
      </Page>
    )
  }

  return <Error statusCode={500} title="This shouldn't happen." />
}

DisplayPost.getInitialProps = async ({ query }) => {
  const json = await import('../../data/posts.json')
  const posts: Post[] = json.default
  const post = posts.find(p => p.slug === query.slug)

  if (!post) {
    return { errorCode: 404 }
  }

  return { post }
}

export default DisplayPost
