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
            <Image
              src={meImage}
              alt="me image"
              className="relative -top-1"
              priority
            />
          </div>
          <div className="ml-3 max-w-xs text-sm text-left font-normal">
            <div className="text-sm font-semibold mb-1">Vicky</div>
            <div className="text-xs font-normal">
              {isSuccess
                ? '메일 전송이 성공했습니다. 빠른 시일 내에 답변 드리겠습니다.'
                : '메일 전송이 실패했습니다. 다시 시도해주세요.'}
            </div>
          </div>
          {/* <button
            type="button"
            className={`ml-auto -mx-1.5 -my-1.5 justify-center items-center flex-shrink-0 rounded-lg focus:ring-0 p-1.5  inline-flex h-8 w-8 ${
              isSuccess
                ? 'text-emerald-700 hover:text-emerald-900'
                : 'text-red-700 hover:text-red-900'
            }`}
            data-dismiss-target="#toast-message-cta"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </>
  );
}
