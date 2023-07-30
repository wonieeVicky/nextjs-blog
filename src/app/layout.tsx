import './globals.css';
import type { Metadata } from 'next';
import { Nanum_Gothic, Open_Sans } from 'next/font/google';
import Link from 'next/link';

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({ weight: '700', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Vicky's Blog",
  description: 'Generated Blog by next app'
};

const navigation = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'posts', href: 'posts' },
  { name: 'contact', href: 'contact' }
];

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(sans.className, 'mb-32')}>
        <header className="sticky top-0 right-0 left-0 bg-white z-10">
          <nav
            className="flex items-center justify-between p-4 md:p-6 max-w-screen-xl mx-auto "
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <h1
                className={(gothic.className, 'text-lg font-bold lg:text-xl')}
              >
                <Link href="/">Vicky&apos;s blog</Link>
              </h1>
            </div>
            <div className="flex gap-x-4 text-sm md:text-base lg:gap-x-10 md:gap-x-6">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <div className="max-w-screen-xl mx-auto p-4 md:p-6">{children}</div>
        <div className="fixed inset-x-0 bottom-0 text-center p-3 bg-black text-white">
          <p className="text-sm">
            Don&apos;t forget to CODE you DREAM | All Right Reserved.
          </p>
        </div>
      </body>
    </html>
  );
}
