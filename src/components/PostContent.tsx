import { FcCalendar } from 'react-icons/fc';
import MarkDownViewer from '@/components/MarkDownViewer';
import { PostData } from '@/service/posts';

type Props = {
  post: PostData;
};

export default function PostContent({ post }: Props) {
  const { title, description, date, content } = post;
  return (
    <section className="flex flex-col p-4 w-full">
      <div className="flex items-center self-end text-orange-600">
        <FcCalendar />
        <p className="font-semibold ml-2 text-base">{date.toString()}</p>
      </div>
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      <p className="text-lg font-semibold">{description}</p>
      <div className="w-40 border-2 border-orange-600 mt-5 mb-8" />
      <MarkDownViewer content={content} />
    </section>
  );
}
