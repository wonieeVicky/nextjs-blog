'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Toast from './Toast';
import { useState } from 'react';

const schema = yup
  .object({
    email: yup.string().email().required(''),
    subject: yup.string().required(),
    message: yup.string().required()
  })
  .required();

type FormValues = yup.InferType<typeof schema>;

export default function SendEmail() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: yupResolver(schema)
  });
  const [status, setStatus] = useState('loading');

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      reset();
      setStatus('success');
      setTimeout(() => setStatus('loading'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('loading'), 5000);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="py-4 mt-8 min-w-[100%] md:min-w-[70%] lg:min-w-[50%]">
          <h2 className="text-2xl font-bold mb-10">Or Send me an email📮</h2>
          {status !== 'loading' && <Toast isSuccess={status === 'success'} />}
          <form
            className="grid grid-cols-1 gap-6 text-left"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="block">
              <span>Your Email</span>
              <input
                className="mt-1 block w-full rounded-md"
                placeholder="john@example.com"
                disabled={isSubmitting}
                {...register('email')}
              />
              <p className="text-xs mt-1">{errors.email?.message}</p>
            </label>
            <label className="block">
              <span>Subject</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md"
                placeholder=""
                disabled={isSubmitting}
                {...register('subject')}
              />
              <p className="text-xs mt-1">{errors.subject?.message}</p>
            </label>
            <label className="block">
              <span className="text-gray-700">Message</span>
              <textarea
                className="mt-1 block w-full rounded-md"
                rows={3}
                disabled={isSubmitting}
                {...register('message')}
              ></textarea>
              <p className="text-xs mt-1">{errors.message?.message}</p>
            </label>
            <button
              disabled={isSubmitting}
              type="submit"
              className="text-white flex bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-semibold rounded text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-600 flex w-full justify-center items-center"
            >
              {isSubmitting && (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline mr-2 w-4 h-4 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  ></path>
                </svg>
              )}
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
