import { getPosts } from '@/service/posts';
import { Metadata } from 'next';
import FilterablePosts from '@/components/FilterablePosts';

export const metadata: Metadata = {
  title: `Vicky's Blog | Posts`,
  description: 'Vicky 블로그 Posts 페이지'
};

export default async function PostPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))]; // Set: 카테고리 중복 제거

  return <FilterablePosts posts={posts} categories={categories} />;
}
