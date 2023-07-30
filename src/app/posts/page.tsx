import { getPosts } from '@/service/posts';
import PostList from '@/components/PostList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Vicky's Blog | Posts`,
  description: 'Vicky 블로그 Posts 페이지'
};

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
