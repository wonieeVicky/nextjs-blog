import { getPosts } from '@/service/posts';
import FeaturedPosts from './FeaturedPosts';
import UMayLike from '@/components/UMayLike';

export default async function Posts() {
  const posts = await getPosts();
  const featuredPosts = posts.filter((post) => post.featured);
  const normalPosts = posts.filter((post) => !post.featured);

  return (
    <div className="w-full">
      <FeaturedPosts data={featuredPosts} />
      <br />
      <br />
      <UMayLike data={normalPosts} />
    </div>
  );
}
