import Hero from '../component/Hero';
import ScheduleList from '../component/ScheduleList';
import Layout from '../layouts/Layout';
import axios from 'axios';
export default function Home({ movies }) {
  return (
    <div className='container'>
      <Layout title='TV Bland | Welcome' desc='Tv Shows'>
        <Hero />
        <ScheduleList list={movies} />
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get('https://api.tvmaze.com/schedule');
  return {
    props: {
      movies: res.data,
    },
  };
};
