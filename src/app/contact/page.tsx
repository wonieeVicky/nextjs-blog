import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { SiGithub, SiLinkedin, SiNotion } from 'react-icons/si';

export function generateMetadata(): Metadata {
  return {
    title: `Vicky's blog | Contact`,
    description: 'Vicky 블로그 Contact 페이지'
  };
}

const LINKS = [
  {
    icon: <SiGithub />,
    url: '//github.com/wonieeVicky'
  },
  {
    icon: <SiNotion />,
    url: '//fongfing.notion.site/Vicky-s-FE-Engineering-Wiki-d7e660205c0047118a78d664b07418fd'
  },
  {
    icon: <SiLinkedin />,
    url: '//www.linkedin.com/in/%ED%98%9C%EC%9B%90-%EC%B5%9C-b97a45285/'
  }
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-bold my-3">Contact Me</h2>
      <p>hwfongfing@gmail.com</p>
      <ul className="flex gap-4 my-5">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-orange-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-2xl font-bold my-3">Or Send me an email📮</h2>
      <ContactForm />
    </section>
  );
}
