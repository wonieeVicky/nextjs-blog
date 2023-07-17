import Posts from './(main)/Posts';
import Me from './Me';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between lg:px-8 p-6">
      <Me />
      <Posts />
    </main>
  );
}
