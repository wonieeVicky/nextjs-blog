import path from 'path';
import { promises as fs } from 'fs';
import { cache } from 'react';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

// 중복 방지 처리 - cache는 동일한 인자로 호출하면 캐시된 값을 반환한다.
// 서버가 동작하는 모든 구간에서 캐시 적용하는 것이 아닌 한번 렌더링 되는 사이클에 한해서만 캐시 적용
// 다른 페이지로 이동 시 캐시된 값은 사라지고 새로운 값을 불러와 값을 캐시한다.
export const getPosts = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return await fs
    .readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getFeaturedPosts(): Promise<Post[]> {
  return getPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const posts = await getPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`Post ${fileName} not found`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const content = await fs.readFile(filePath, 'utf-8');
  return { ...post, content, next, prev };
}
