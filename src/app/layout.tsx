import './globals.css';
import type { Metadata } from 'next';
import { Inter, Nanum_Gothic, Open_Sans } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({ weight: '700', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Vicky's Blog",
  description: 'Generated Blog by next app'
};

const navigation = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'products', href: 'products' },
  { name: 'contact', href: 'contact' }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={gothic.className}>
        <header>
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <h1 className={gothic.className}>Vicky's blog</h1>
            </div>
            <div className="flex gap-x-12">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
