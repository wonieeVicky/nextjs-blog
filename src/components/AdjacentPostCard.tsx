import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {
  post: Post;
  type: 'next' | 'prev';
};

const ICON_CLASS = 'text-3xl text-orange-300 m-4 transition-all group-hover:text-4xl';

export default function AdjacentPostCard({ post: { path, title, description }, type }: Props) {
  return (
    <Link href={`/posts/${path}`} className="relative w-full bg-black max-h-56">
      <Image
        className="w-full opacity-40"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-around items-center text-white px-1 sm:px-3 md:px-5">
        {type === 'prev' && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
          <p className="text-xs md:text-sm">{description}</p>
        </div>
        {type === 'next' && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
