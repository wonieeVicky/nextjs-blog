import { getPosts } from '@/service/posts';
import UMayLike from '@/components/UMayLike';

export default async function Posts() {
  const posts = await getPosts();
  const normalPosts = posts.filter((post) => !post.featured);

  return (
    <div className="w-full">
      <br />
      <br />
      <UMayLike data={normalPosts} />
    </div>
  );
}
