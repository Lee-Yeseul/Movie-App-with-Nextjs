import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Helmet from '../components/Helmet';
import Title from '../components/common/Title';
import ImgCard from '../components/common/ImgCard';
import Card from '../components/common/Card';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className='container'>
      <Helmet title='Home' />
      <Card
        title={`안녕`}
        imgUrl={`https://cdnweb01.wikitree.co.kr/webdata/editor/202202/03/img_20220203152221_f00e3cfa.webp`}
      />
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
            <ImgCard
              imgUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/globalmovies`)
  ).data;
  return {
    props: {
      results,
    },
  };
}
