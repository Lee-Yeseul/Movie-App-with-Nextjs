import axios from 'axios';
import { useEffect, useState } from 'react';
import Helmet from '../components/Helmet';

export default function Home({ results }) {
  return (
    <div>
      <Helmet title='Home' />
      {results?.map((movie) => {
        return (
          <div key={movie.id}>
            <h4>{movie.original_title}</h4>
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
