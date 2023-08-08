import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = { post: Post };
export default function PostCard({
  post: { title, description, date, category, path }
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-700 text-sm">
            {date.toString()}
          </time>
          <h3 className="font-bold my-1">{title}</h3>
          <p className="w-full truncate text-center font-light text-sm">
            {description}
          </p>
          <span className="text-xs bg-lime-100 px-3 p-1 my-3 rounded-xl">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
