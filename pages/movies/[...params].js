import { useRouter } from 'next/router';

export default function Detail({ params, results }) {
  const router = useRouter();
  // console.log(router);
  const [title, id] = params;
  return (
    <div>
      <h4>{title || 'Loading...'}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  const { results } = await (
    await axios.get(`http://localhost:3000/api/movies/${params.id}`)
  ).data;

  return {
    props: { params, results },
  };
}
