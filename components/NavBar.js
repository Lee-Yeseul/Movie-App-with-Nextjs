import Link from 'next/link';

export default function NavBar() {
  return (
    <div>
      <img scr='/vercel.svg' />
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </div>
  );
}
