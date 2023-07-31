import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Vicky's Blog",
  description: 'Generated Blog by next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(sans.className, 'mb-32')}>
        <Header />
        <main className="max-w-screen-xl mx-auto p-4 md:p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
