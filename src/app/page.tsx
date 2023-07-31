import Posts from './(main)/Posts';
import Me from './Me';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-between">
      <Me />
      <Posts />
    </section>
  );
}
