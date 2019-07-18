export interface Post {
  title: string
  slug: string
  description?: string
  headerImage?: string
  date: string
  contentHtml: string
  tags: string[]
}

export interface PostWithoutSlug {
  title: string
  description?: string
  date: string
  contentHtml: string
  tags: string[]
}
