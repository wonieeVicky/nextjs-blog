import Me from '@/components/Me';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Vicky Career & Skills'
};

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-4';

export default function AboutPage() {
  return (
    <>
      <Me />
      <section className="bg-gray-100 shadow-md p-8 m-4 text-center rounded-md">
        <h2 className={`${TITLE_CLASS} mt-0`}>Who am I?</h2>
        <p className="text-sm">비즈니스의 가치를 구현하는 프론트엔드 개발자</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p className="text-sm">
          UneedComms.Inc (2018 ~ Now)
          <br />
          DesignSoft.Inc (2015 ~ 2017)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p className="text-sm">
          React, Node, Next.js, Typescript, Javascript
          <br />
          Three.js, Git, VsCode, IntelliJ, Webpack, Sourcetree, Atlassian,
          Confluence
        </p>
      </section>
    </>
  );
}
