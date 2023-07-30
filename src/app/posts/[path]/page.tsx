import {
  getPost,
  getPostMarkdown,
  getPosts,
  getSiblingPosts
} from '@/service/posts';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { FcCalendar } from 'react-icons/fc';
import SiblingPosts from '@/components/SiblingPosts';
import MarkDownPost from '@/components/MarkDownPost';
import { Metadata } from 'next';

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

export default async function ProductPage({ params: { path } }: Props) {
  const post = await getPost(path);
  if (!post) {
    redirect('/posts'); // 존재하지 않는 path 입력한 경우 posts redirect
  }
  const siblingPosts = await getSiblingPosts(path);
  const markdown = await getPostMarkdown(path);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="max-h-80 overflow-hidden">
        <Image
          className="rounded-t-lg"
          src={`/images/posts/${post.path}.png`}
          width={1280}
          height={500}
          alt={`${post.path} image`}
        />
      </div>
      <div className="p-5 bg-slate-50">
        <p className="text-sm text-right text-semibold flex items-center justify-end text-orange-600">
          <FcCalendar />
          &nbsp;
          {post.date}
        </p>
        <h5 className="mb-2 font-semibold text-4xl tracking-tight">
          {post.title}
        </h5>
        <p className="mb-5 font-semibold text-sm">{post.description}</p>
        <div className="w-40 border-2 border-orange-500 mb-5"></div>
        <div className="prose lg:prose-xl">
          <MarkDownPost markdown={markdown} />
        </div>
      </div>
      {siblingPosts && <SiblingPosts data={siblingPosts} />}
    </div>
  );
}

// 미리 페이지를 만들어두고 싶은 경우 generateStaticParams 함수 사용
export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 두도록 설정함(SSG)
  const posts = await getPosts();
  return posts.map(({ path }) => ({ path }));
}
