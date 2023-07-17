'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Post } from '@/service/posts';
import Link from 'next/link';
import Image from 'next/image';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 550 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

type Props = {
  data: Post[];
};

export default function UMayLike({ data }: Props) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">You may like</h2>

      <Carousel centerMode={true} responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
        {data.map((post, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow text-center m-2">
            <Link href={`/posts/${post.path}`}>
              <Image className="rounded-t-lg" src={`/images/posts/${post.path}.png`} width={800} height={300} alt={`${post.path} image`} />
              <div className="p-5">
                <p className="text-xs text-right mb-2">{post.date}</p>
                <h5 className="mb-1 font-semibold tracking-tight">{post.title}</h5>
                <p className="mb-3 font-light text-sm">{post.description}</p>
                <span className="inline-block bg-lime-200 rounded-full px-3 py-1 text-xs font-light text-gray-700">{post.category}</span>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </>
  );
}
