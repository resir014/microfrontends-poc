import * as React from 'react'
import { Post } from 'interfaces/post'
import formatDate from 'utils/formatDate'

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article>
      <time className="published-at" dateTime={post.date}>
        {formatDate(new Date(post.date))}
      </time>
      <h1 className="title">{post.title}</h1>
      {post.headerImage && <img className="header-image" src={post.headerImage} alt={post.title} />}
      {post.description && <p className="subtitle">{post.description}</p>}
      <p className="read-more">
        <a href={`/blog/${post.slug}`}>Read more...</a>
      </p>
      <style jsx>{`
        article {
          padding: 2rem 0;
          border-bottom: 1px solid #eaeaea;
        }
        article:last-child {
          border-bottom: 0;
        }

        .published-at {
          display: block;
          margin-bottom: 0.5rem;
        }

        .title {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }

        .subtitle {
          margin: 0;
          font-size: 1rem;
        }

        .header-image {
          margin: 1rem 0;
          max-width: 100%;
        }

        .read-more {
          margin-bottom: 0;
        }
      `}</style>
    </article>
  )
}

export default PostCard
