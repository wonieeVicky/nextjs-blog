'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/service/posts';

type Props = {
  data: Post[];
};

export default function SiblingPosts({ data }: Props) {
  return (
    <>
      <div className="border flex">
        {data.map((post, idx) => (
          <div key={idx} className="text-center h-48 overflow-hidden relative">
            <Link href={`/posts/${post.path}`} className="inline-block h-full overflow-hidden">
              <Image src={`/images/posts/${post.path}.png`} className="brightness-50" width={800} height={300} alt={`${post.path} image`} />
              <div className="absolute w-full top-0 h-full flex flex-col justify-center text-slate-50">
                <h5 className="mb-2 font-bold text-2xl tracking-tight">{post.title}</h5>
                <p className="font-light">{post.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
