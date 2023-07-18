import Image from 'next/image';
import meImage from '../../public/images/me.jpeg';
import Link from 'next/link';

export default function Me() {
  return (
    <div className="p-8 text-center w-full">
      <div className="border w-52 h-52 border-radius overflow-hidden rounded-full mb-3 inline-block">
        <Image src={meImage} alt="me image" className="relative -top-3" priority />
      </div>
      <h2 className="text-xl font-bold mb-1">Hi! I&apos;m Vicky 👩🏻‍💻</h2>
      <p className="text-sm mb-3">Creating delightful experiences</p>
      <button className="rounded-full bg-orange-500 p-1 px-3 text-xs font-semibold text-white">
        <Link href="/about">Contact Me</Link>
      </button>
    </div>
  );
}
