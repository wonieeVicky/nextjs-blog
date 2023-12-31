import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Vicky Blog',
    template: 'Vicky Blog | %s'
  },
  description: "Frontend Engineer Vicky's Blog",
  icons: {
    icon: 'favicon.ico'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(sans.className, 'flex flex-col')}>
        <Header />
        <main className="w-full max-w-screen-2xl mx-auto grow mb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
