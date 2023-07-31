import Me from '../Me';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vicky's Blog | About",
  description: 'Vicky 블로그 About 페이지'
};

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-between">
      <Me />
      <div className="w-full bg-slate-100 text-center p-6 shadow">
        <h3 className="text-xl font-semibold my-3">Who am I?</h3>
        <div className="text-sm">
          비즈니스의 가치를 구현하는 프론트엔드 개발자
        </div>
        <h3 className="text-xl font-semibold my-3 mt-5">Career</h3>
        <div className="text-sm">UneedComms.Inc (2018 ~ Now)</div>
        <h3 className="text-xl font-semibold my-3 mt-5">Skill</h3>
        <div className="text-sm">
          React, Node, Next.js, Typescript, Javascript, Three.js
        </div>
        <div className="text-sm mb-3">
          Git, VsCode, IntelliJ, Sourcetree, Webpack
        </div>
      </div>
    </section>
  );
}
