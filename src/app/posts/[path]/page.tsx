import { getPostData, getPosts, getSiblingPosts } from '@/service/posts';
import { FcCalendar } from 'react-icons/fc';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import MarkDownViewer from '@/components/MarkDownViewer';
import Image from 'next/image';

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
  const { title, description, date, path: PostPath, content } = await getPostData(path);

  if (!title) {
    redirect('/posts'); // 존재하지 않는 path 입력한 경우 posts redirect
  }

  return (
    <article className="rounded-xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5s max-h-[500px]"
        src={`/images/posts/${PostPath}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-orange-600">
          <FcCalendar />
          <p className="font-semibold ml-2 text-base">{date.toString()}</p>
        </div>
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <p className="text-lg font-semibold">{description}</p>
        <div className="w-40 border-2 border-orange-600 mt-5 mb-8" />
        <MarkDownViewer content={content} />
      </section>
    </article>
  );
}

// 미리 페이지를 만들어두고 싶은 경우 generateStaticParams 함수 사용
export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 두도록 설정함(SSG)
  const posts = await getPosts();
  return posts.map(({ path }) => ({ path }));
}
