import Posts from './(main)/Posts';
import Me from '@/components/Me';

export default function HomePage() {
  return (
    <section>
      <Me />
      <Posts />
    </section>
  );
}
