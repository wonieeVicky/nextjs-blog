import { getPost, getPostMarkdown, getPosts } from '@/service/posts';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FcCalendar } from 'react-icons/fc';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const revalidate = 3;

type Props = {
  params: {
    path: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `${params.path} : Vicky's blog`
  };
}

export default async function ProductPage({ params: { path } }: Props) {
  const post = await getPost(path);
  if (!post) {
    redirect('/posts'); // 존재하지 않는 path 입력한 경우 posts redirect
  }

  const markdown = await getPostMarkdown(path);

  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아와 그 정보를 보여준다.
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="max-h-80 overflow-hidden">
        <Image className="rounded-t-lg" src={`/images/posts/${post.path}.png`} width={1280} height={500} alt={`${post.path} image`} />
      </div>
      <div className="p-5 bg-slate-50">
        <p className="text-sm text-right text-semibold flex items-center justify-end text-orange-600">
          <FcCalendar />
          &nbsp;
          {post.date}
        </p>
        <h5 className="mb-2 font-semibold text-4xl tracking-tight">{post.title}</h5>
        <p className="mb-5 font-semibold text-sm">{post.description}</p>
        <div className="w-40 border-2 border-orange-500 mb-5"></div>
        <div className="prose lg:prose-xl">
          <ReactMarkdown
            // react-markdown에서 지원해 주지 않는 문법들을 추가로 변형시키는데 사용하는 플러그인 ( table, link 등 )
            remarkPlugins={[remarkGfm]}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

// 미리 페이지를 만들어두고 싶은 경우 generateStaticParams 함수 사용
export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 두도록 설정함(SSG)
  const posts = await getPosts();
  return posts.map(({ path }) => ({ path }));
}
