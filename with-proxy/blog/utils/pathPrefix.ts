export default function pathPrefix(url: string) {
  return process.env.NODE_ENV === 'development' ? url : `/blog${url}`
}
