import Image from 'next/image';
import meImage from '../../public/images/me.jpeg';
import Link from 'next/link';

export default function Me() {
  return (
    <section className="p-8 text-center mx-auto">
      <div className="w-44 h-44 md:w-52 md:h-52 overflow-hidden rounded-full inline-block">
        <Image
          src={meImage}
          alt="Picture of the author"
          width={250}
          height={250}
          className="relative -top-3"
          priority // 먼저 로드 처리
        />
      </div>
      <h2 className="text-2xl font-bold my-3">Hi! I&apos;m Vicky 🐝</h2>
      <h3 className="text-sm mb-3">Crafting delightful experiences</h3>

      <Link href="/contact">
        <button className="rounded-xl bg-orange-500 py-1 px-3 text-xs font-semibold text-white">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
