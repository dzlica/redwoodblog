import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostCell'

const BlogPostPage = ({ id }) => {
  return (
    <BlogLayout>
      <BlogPostsCell id={id} />
    </BlogLayout>
  )
}

export default BlogPostPage
