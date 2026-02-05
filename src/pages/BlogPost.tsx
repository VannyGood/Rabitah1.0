import { Navigate } from "react-router-dom";

/**
 * Blog posts were replaced with testimonials at /blog.
 * Redirect any old /blog/:id URLs to the testimonials page.
 */
const BlogPost = () => {
  return <Navigate to="/blog" replace />;
};

export default BlogPost;
