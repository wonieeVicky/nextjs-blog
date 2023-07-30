'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/service/posts';
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi';

type Props = {
  data: Post[];
};

export default function SiblingPosts({ data }: Props) {
  return (
    <>
      <div className="flex">
        {data.map((post, idx) => (
          <div
            key={idx}
            className="text-center h-20 sm:h-44 md:h-48 overflow-hidden relative"
          >
            <Link
              href={`/posts/${post.path}`}
              className={`inline-block h-full overflow-hidden`}
            >
              <Image
                src={`/images/posts/${post.path}.png`}
                className="brightness-50"
                width={800}
                height={500}
                alt={`${post.path} image`}
              />
              <div
                className={`absolute w-full top-0 h-full flex flex-col justify-center text-slate-50 transition ease-in-out delay-150 duration-500 ${
                  idx ? 'hover:translate-x-3' : 'hover:-translate-x-3'
                }`}
              >
                {idx ? (
                  <HiArrowCircleRight className="absolute top-0 h-full text-yellow-500 w-8 md:w-16 right-4 md:right-10" />
                ) : (
                  <HiArrowCircleLeft className="absolute top-0 h-full text-yellow-500 w-8 md:w-16 left-4 md:left-10" />
                )}
                <h5 className="font-bold text-base sm:text-lg sm:text-xl tracking-tight">
                  {post.title}
                </h5>
                <p className="mt-2 font-light hidden md:block">
                  {post.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
