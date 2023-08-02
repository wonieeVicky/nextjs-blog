import { getPosts } from '@/service/posts';
import PostGrid from '@/components/PostGrid';

export default async function FeaturedPosts() {
  const posts = await getPosts();
  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Featured Posts</h2>
      <PostGrid posts={featuredPosts} />
    </section>
  );
}
