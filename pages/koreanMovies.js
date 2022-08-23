import axios from 'axios';
import { useEffect } from 'react';
import Helmet from '../components/Helmet';

export default function KoreanMovies() {
  const date = new Date();

  const year = date.getFullYear();
  const month = ('0' + (1 + date.getMonth())).slice(-2);
  const day = date.getDate() - 1;

  const targetDt = `${year}${month}${day}`;

  async function getAPI() {
    const res = await axios.get(
      `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.NEXT_PUBLIC_KOR_API_KEY}&targetDt=${targetDt}`
    );
    console.log(res.data);
  }
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <div>
      <Helmet title='About' />
    </div>
  );
}
