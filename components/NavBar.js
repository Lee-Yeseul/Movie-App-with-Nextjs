import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <img src='/vercel.svg' />
      <ul>
        <li>
          <Link href='/'>
            <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a className={router.pathname === '/about' ? 'active' : ''}>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href='/koreanMovies'>
            <a className={router.pathname === '/koreanMovies' ? 'active' : ''}>
              Korean Movies
            </a>
          </Link>
        </li>
        <li>
          <Link href='/globalMovies'>
            <a className={router.pathname === '/globalMovies' ? 'active' : ''}>
              Global Movies
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
          padding-bottom: 10px;
          // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          //   rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        ul {
          display: flex;
          gap: 1.5rem;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
