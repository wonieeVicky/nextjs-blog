import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/service/posts';

type Props = {
  data: Post[];
};

export default async function FeaturedPosts({ data }: Props) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Featured Posts</h2>
      <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2">
        {data.map((post, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow text-center">
            <Link href={`/posts/${post.path}`}>
              <Image className="rounded-t-lg" src={`/images/posts/${post.path}.png`} width={800} height={300} alt={`${post.path} image`} />
              <div className="p-3 pb-5">
                <p className="text-xs text-right mb-2">{post.date}</p>
                <h5 className="mb-1 font-semibold tracking-tight">{post.title}</h5>
                <p className="mb-3 font-light text-sm">{post.description}</p>
                <span className="inline-block bg-lime-200 rounded-full px-3 py-1 text-xs font-light text-gray-700">{post.category}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
