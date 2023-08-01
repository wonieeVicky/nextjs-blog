import Link from 'next/link';

const navigation = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'posts', href: 'posts' },
  { name: 'contact', href: 'contact' }
];

export default function Header() {
  return (
    <header className="p-4 sticky top-0 bg-white z-10">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-lg lg:text-2xl md:text-xl font-bold">{"Vicky's blog"}</h1>
        </Link>
        <nav className="flex gap-4" aria-label="Global">
          <div className="flex gap-x-4 text-sm md:text-base lg:gap-x-10 md:gap-x-6">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
