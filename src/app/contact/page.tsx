import SendEmail from '@/components/SendEmail';
import Link from 'next/link';
import { SiGithub, SiNotion } from 'react-icons/si';

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full text-center p-6">
        <h3 className="text-2xl font-bold my-3">Contact Me</h3>
        <div className="text-sm">hwfongfing@gmail.com</div>
        <div className="flex justify-center my-5 text-2xl hover:text">
          <Link href="//github.com/wonieeVicky" target="_blank" className="mx-1 transition ease-in-out duration-300 hover:text-orange-600">
            <SiGithub />
          </Link>
          <Link
            href="//fongfing.notion.site/Vicky-s-FE-Engineering-Wiki-d7e660205c0047118a78d664b07418fd"
            target="_blank"
            className="mx-1 transition ease-in-out duration-200 hover:text-orange-600"
          >
            <SiNotion />
          </Link>
        </div>
        <SendEmail />
      </div>
    </main>
  );
}
