import axios from 'axios';

export default function Detail({ params, data }) {
  const [title, id] = params;
  const { belongs_to_collection, original_language, genres } = data;
  console.log(genres);

  return (
    <div>
      <h4>{title || 'Loading...'}</h4>
      <img
        src={`https://image.tmdb.org/t/p/w500/${belongs_to_collection.poster_path}`}
      />
      <h4>{original_language}</h4>
      {genres?.map((genre, idx) => {
        return <div key={idx}>{genre.name}</div>;
      })}
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  const [title, id] = params;
  const res = await axios.get(`http://localhost:3000/api/movies/${id}`);
  const data = res.data;

  return {
    props: { params, data },
  };
}
