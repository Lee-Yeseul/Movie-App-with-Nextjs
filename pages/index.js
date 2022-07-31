import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Helmet from '../components/Helmet';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id) => {
    router.push(`movies/${id}`);
  };
  return (
    <div>
      <Helmet title='Home' />
      {results?.map((movie) => {
        return (
          <div
            key={movie.id}
            onClick={() => {
              onClick(movie.id);
            }}
          >
            <Link href={`movies/${movie.id}`}>
              <a>
                <h4>{movie.original_title}</h4>
              </a>
            </Link>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await axios.get(`http://localhost:3000/api/movies`)
  ).data;
  return {
    props: {
      results,
    },
  };
}
