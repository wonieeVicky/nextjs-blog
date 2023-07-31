import Link from 'next/link';

const navigation = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'posts', href: 'posts' },
  { name: 'contact', href: 'contact' }
];

export default function Header() {
  return (
    <header className="sticky top-0 right-0 left-0 bg-white z-10">
      <nav
        className="flex items-center justify-between p-4 md:p-6 max-w-screen-xl mx-auto "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <h1 className="text-lg font-bold lg:text-xl">
            {/* <Link href="/">Vicky&apos;s blog</Link> */}
            <Link href="/">{"Vicky's blog"}</Link>
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
  );
}
