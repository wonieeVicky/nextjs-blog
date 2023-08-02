import FeaturedPosts from './(main)/FeaturedPosts';
import Posts from './(main)/Posts';
import Me from '@/components/Me';

export default function HomePage() {
  return (
    <>
      <Me />
      <FeaturedPosts />
      <Posts />
    </>
  );
}
