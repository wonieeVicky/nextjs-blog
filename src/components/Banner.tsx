import Image from 'next/image';
import meImage from '../../public/images/me.jpeg';

export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

export default function Banner({
  banner: { message, state }
}: {
  banner: BannerData;
}) {
  const isSuccess = state === 'success';
  return (
    <>
      <div
        className={`w-full p-4 text-black-500 rounded-lg shadow mb-10 ${
          isSuccess ? 'bg-emerald-100' : 'bg-red-100'
        }`}
        role="alert"
      >
        <div className="flex">
          <div className="w-8 h-8 border-radius overflow-hidden rounded-full shadow-lg">
            <Image
              src={meImage}
              alt="me image"
              className="relative -top-1"
              priority
            />
          </div>
          <div className="ml-3 max-w-xs text-sm text-left font-normal">
            <div className="text-sm font-semibold mb-1">Vicky</div>
            <div className="text-xs font-normal">{message}</div>
          </div>
        </div>
      </div>
    </>
  );
}
