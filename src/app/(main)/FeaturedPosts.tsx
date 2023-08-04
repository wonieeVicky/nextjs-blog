import { getFeaturedPosts } from '@/service/posts';
import PostGrid from '@/components/PostGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="my-4">
      <h2 className="text-xl font-semibold my-2">Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
