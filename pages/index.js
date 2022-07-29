import { useEffect, useState } from 'react';
import Helmet from './Helmet';

const API_KEY = '5fffd35338a11175cd1be7a54e8333f0';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const data = await res.json();
      const { results } = data;
      setMovies(results);
      console.log(movies);
    })();
  }, []);

  return (
    <div>
      <Helmet title='Home' />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => {
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
