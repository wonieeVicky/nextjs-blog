import { getPosts } from '@/service/posts';
import PostList from '@/components/PostList';

export default async function PostPage() {
  const posts = await getPosts();

  return (
    <>
      <div className="flex flex-row">
        <PostList posts={posts} />
      </div>
    </>
  );
}
