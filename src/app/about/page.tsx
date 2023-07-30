import Me from '../Me';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vicky's Blog | About",
  description: 'Vicky 블로그 About 페이지'
};

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Me />
      <div className="w-full bg-slate-100 text-center p-6 shadow">
        <h3 className="text-xl font-semibold my-3">Who am I?</h3>
        <div className="text-sm">
          비즈니스의 가치를 구현하는 프론트엔드 개발자
        </div>
        <h3 className="text-xl font-semibold my-3 mt-5">Career</h3>
        <div className="text-sm">(주)유니드컴즈 (2018 ~ Now)</div>
        <h3 className="text-xl font-semibold my-3 mt-5">Skill</h3>
        <div className="text-sm">
          React, Node, Next.js, Typescript, Javascript, Three.js
        </div>
        <div className="text-sm">
          Git, VsCode, IntelliJ, Sourcetree, Webpack
        </div>
        <h3 className="text-xl font-semibold my-3 mt-5">
          Education & Certificate
        </h3>
        <div className="text-sm">한국방송통신대학교 컴퓨터과학과 (2023.08)</div>
        <div className="text-sm">
          정보처리기사, 웹디자인기능사, 그래픽기술자격(GTQ),
          그래픽기술자격일러스트(GTQi)
        </div>
      </div>
    </main>
  );
}
