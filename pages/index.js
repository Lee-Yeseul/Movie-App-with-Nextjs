import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Helmet from '../components/Helmet';
import Title from '../components/common/Title';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className='container'>
      <Helmet title='Home' />
      {results?.map((movie) => {
        return (
          <div
            className='movie'
            key={movie.id}
            onClick={() => {
              onClick(movie.id, movie.original_title);
            }}
          >
            <Link href={`movies/${movie.original_title}/${movie.id}`}>
              <a>
                <Title props={movie.original_title} />
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
