import axios from 'axios';
import { useEffect } from 'react';
import Helmet from '../components/Helmet';

export default function KoreanMovies() {
  async function getAPI() {
    const res = await axios.get(
      `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.NEXT_PUBLIC_KOR_API_KEY}&targetDt=20220801`
    );
    console.log(res);
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
