import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Helmet from '../components/Helmet';
import Card from '../components/common/Card';
import * as API from './api/api';

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 20px;
  justify-content: center;
  // background: #1f2229;
  overflow: hidden;
`;

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <CardContainer>
      <Helmet title='Home' />
      {results?.map((movie) => {
        return (
          <Link href={`movies/${movie.original_title}/${movie.id}`}>
            <a>
              <Card
                className='movie'
                key={movie.id}
                onClick={() => {
                  onClick(movie.id, movie.original_title);
                }}
                title={movie.original_title}
                imgUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              ></Card>
            </a>
          </Link>
        );
      })}
    </CardContainer>
  );
}

export async function getServerSideProps() {
  const { results } = await (await API.get(`/api/globalmovies`)).data;
  return {
    props: {
      results,
    },
  };
}
