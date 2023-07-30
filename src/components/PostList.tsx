'use client';

import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  const [category, setCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (category === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post: Post) => post.category === category)
      );
    }
  }, [category]);

  return (
    <>
      <div className="basis md:basis-5/6">
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 w-auto">
          {filteredPosts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow text-center">
              <Link href={`/posts/${post.path}`}>
                <Image
                  className="rounded-t-lg"
                  src={`/images/posts/${post.path}.png`}
                  width={800}
                  height={300}
                  alt={`${post.path} image`}
                />
                <div className="p-3 pb-5">
                  <p className="text-xs text-right mb-2">{post.date}</p>
                  <h5 className="mb-1 font-semibold tracking-tight">
                    {post.title}
                  </h5>
                  <p className="mb-3 font-light text-sm">{post.description}</p>
                  <span className="inline-block bg-lime-200 rounded-full px-3 py-1 text-xs font-light text-gray-700">
                    {post.category}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="basis-1/6 text-right hidden md:block">
        <div className="text-center inline-block">
          <h5 className="mb-4 text-lg font-bold pb-1 px-2 border-b-2 border-orange-600">
            Category
          </h5>
          <ul>
            <li
              className={`mb-1 cursor-pointer hover:text-orange-400 ${
                category === 'all' && 'text-orange-600'
              }`}
              onClick={() => setCategory('all')}
            >
              All Posts
            </li>
            <li
              className={`mb-1 cursor-pointer hover:text-orange-400 ${
                category === 'my story' && 'text-orange-600'
              }`}
              onClick={() => setCategory('my story')}
            >
              my story
            </li>
            <li
              className={`mb-1 cursor-pointer hover:text-orange-400 ${
                category === 'frontend' && 'text-orange-600'
              }`}
              onClick={() => setCategory('frontend')}
            >
              frontend
            </li>
            <li
              className={`mb-1 cursor-pointer hover:text-orange-400 ${
                category === 'backend' && 'text-orange-600'
              }`}
              onClick={() => setCategory('backend')}
            >
              backend
            </li>
            <li
              className={`mb-1 cursor-pointer hover:text-orange-400 ${
                category === 'javascript' && 'text-orange-600'
              }`}
              onClick={() => setCategory('javascript')}
            >
              javascript
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
