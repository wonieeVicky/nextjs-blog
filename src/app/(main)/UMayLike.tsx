import PostCard from '@/components/PostCard';
import MultiCarousel from '@/components/MultiCarousel';
import { getNonFeaturedPosts } from '@/service/posts';

export default async function UMayLike() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="my-6 mx-4">
      <h2 className="text-xl font-semibold my-3">You may like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
