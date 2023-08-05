'use client';

import Image from 'next/image';
import meImage from '../../public/images/me.jpeg';

export default function Toast({ isSuccess }: { isSuccess: boolean }) {
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
            <Image src={meImage} alt="me image" className="relative -top-1" priority />
          </div>
          <div className="ml-3 max-w-xs text-sm text-left font-normal">
            <div className="text-sm font-semibold mb-1">Vicky</div>
            <div className="text-xs font-normal">
              {isSuccess
                ? '메일 전송이 성공했습니다. 빠른 시일 내에 답변 드리겠습니다.'
                : '메일 전송이 실패했습니다. 다시 시도해주세요.'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
