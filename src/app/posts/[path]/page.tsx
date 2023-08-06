import { getPostData, getPosts, getSiblingPosts } from '@/service/posts';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import MarkDownViewer from '@/components/MarkDownViewer';

export const revalidate = 3;

type Props = {
  params: {
    path: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Vicky's blog | ${params.path}`,
    description: 'Vicky 블로그 Posts 상세 페이지'
  };
}

export default async function PostPage({ params: { path } }: Props) {
  const post = await getPostData(path);

  if (!post) {
    redirect('/posts'); // 존재하지 않는 path 입력한 경우 posts redirect
  }

  return (
    <>
      <h1>{post.title}</h1>
      <MarkDownViewer content={post.content} />
    </>
  );
}

// 미리 페이지를 만들어두고 싶은 경우 generateStaticParams 함수 사용
export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 두도록 설정함(SSG)
  const posts = await getPosts();
  return posts.map(({ path }) => ({ path }));
}
