'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/service/contact';
import Spinner from './Spinner';

type Form = {
  from: string;
  subject: string;
  message: string;
};

const INPUT_CLASS = 'rounded-md mb-2';
const LABEL_CLASS = 'font-semibold text-sm';
const DEFAULT_DATA = { from: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    sendContactEmail(form)
      .then(() => {
        setBanner({
          message:
            '메일 전송이 성공했습니다. 빠른 시일 내에 답변 드리겠습니다.',
          state: 'success'
        });
        setForm(DEFAULT_DATA);
      })
      .catch(() =>
        setBanner({
          message: '메일 전송이 실패했습니다. 다시 시도해 주세요.',
          state: 'error'
        })
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setBanner(null), 3000);
      });
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form onSubmit={onSubmit} className="w-full flex flex-col gap-2 my-4 p-4">
        <label htmlFor="from" className={LABEL_CLASS}>
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          placeholder="john@example.com"
          onChange={onChange}
          className={INPUT_CLASS}
          disabled={isSubmitting}
        />
        <label htmlFor="subject" className={LABEL_CLASS}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          placeholder="add subject here"
          onChange={onChange}
          className={INPUT_CLASS}
          disabled={isSubmitting}
        />
        <label htmlFor="message" className={LABEL_CLASS}>
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          placeholder="add message here"
          onChange={onChange}
          className={INPUT_CLASS}
          disabled={isSubmitting}
        />
        <button
          disabled={isSubmitting}
          type="submit"
          className="text-white font-semibold rounded text-sm text-center  bg-orange-500 hover:bg-orange-500 p-3"
        >
          {isSubmitting && <Spinner />}
          Submit
        </button>
      </form>
    </section>
  );
}
