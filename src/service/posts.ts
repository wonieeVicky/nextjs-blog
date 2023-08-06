﻿import path from 'path';
import { promises as fs } from 'fs';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string };
export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return await fs
    .readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return getPosts().then((posts) => posts.filter((post) => post.featured));
}
export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getSiblingPosts(path: string): Promise<Post[] | undefined> {
  const posts = await getPosts();
  const idx = posts.findIndex((post) => post.path === path);
  const prev = posts[idx - 1] || posts[posts.length - 1];
  const next = posts[idx + 1] || posts[0];
  return [prev, next];
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const metadata = await getPosts().then((posts) => posts.find((post) => post.path === fileName));
  if (!metadata) throw new Error(`Post ${fileName} not found`);
  const content = await fs.readFile(filePath, 'utf-8');
  return { ...metadata, content };
}
