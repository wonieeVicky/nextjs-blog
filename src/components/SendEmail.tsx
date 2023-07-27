'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().email().required(''),
    subject: yup.string().required(),
    message: yup.string().required()
  })
  .required();

export default function SendEmail() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      reset();
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email');
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="py-4 mt-8 min-w-[50%]">
          <h2 className="text-2xl font-bold mb-10">Or Send me an email📮</h2>
          <form className="grid grid-cols-1 gap-6 text-left" onSubmit={handleSubmit(onSubmit)}>
            <label className="block">
              <span>Your Email</span>
              <input className="mt-1 block w-full rounded-md" placeholder="john@example.com" {...register('email')} />
              <p className="text-xs mt-1">{errors.email?.message}</p>
            </label>
            <label className="block">
              <span>Subject</span>
              <input type="text" className="mt-1 block w-full rounded-md" placeholder="" {...register('subject')} />
              <p className="text-xs mt-1">{errors.subject?.message}</p>
            </label>
            <label className="block">
              <span className="text-gray-700">Message</span>
              <textarea className="mt-1 block w-full rounded-md" rows={3} {...register('message')}></textarea>
              <p className="text-xs mt-1">{errors.message?.message}</p>
            </label>
            <button
              type="submit"
              className="rounded-md py-3 bg-orange-500 font-semibold text-white text-sm transition ease-in-out duration-300 hover:bg-orange-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
