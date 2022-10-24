import axios from 'axios';
import styles from '@/styles/MoviePage.module.scss';
import Image from 'next/image';
import Layout from '@/layouts/Layout';
import movieImg from '@/images/pexels-tima-miroshnichenko-7991378.jpg';
import { Rating } from 'react-simple-star-rating';

import { useState, useEffect } from 'react';
const Movie = ({ movie }) => {
  const [loading, setLoading] = useState(true);

  const createMarkup = () => {
    return { __html: movie.summary };
  };

  useEffect(() => {
    if (movie) {
      setLoading(false);
    }
  }, [movie]);

  return (
    <Layout title={movie.name} content='Movies, TV series, Shows'>
      {loading && <h2>Loading...</h2>}
      <div className={`${styles.moviePage}`}>
        <div className={styles.bgImage}>
          <Image src={movieImg} layout='fill' objectFit='cover' alt='' />
        </div>
        <div className={styles.movie}>
          <div className={styles.image}>
            <Image
              src={movie.image.original}
              alt=''
              width={400}
              height={600}
              objectFit='cover'
              placeholder='blur'
              blurDataURL={movie.image.original}
              loading='lazy'
            />
          </div>
          <div className={styles.desc}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Rating
                allowFraction
                size={18}
                initialValue={movie.rating?.average / 2}
              />
              <span>{movie.rating.average}</span>
            </div>

            <h1>{movie.name}</h1>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
        </div>
        <div className={styles.scheduleAndStarring}>
          <div className={styles.schedule}>
            <h3>Show info</h3>
            <div className={styles.info}>
              <div className={styles.days}>
                <p>Schedule: </p>
                {movie.schedule.days.map((day) => (
                  <p key={day}> {day}</p>
                ))}
              </div>
              <div className={styles.status}>
                <p>status: </p>
                <p>{movie.status}</p>
              </div>
              <div className={styles.status}>
                <p>network: </p>
                <p>{movie.network.name}</p>
              </div>
              <div className={styles.genres}>
                <p>genres: </p>
                {movie.genres.map((g) => (
                  <p key={g}> {g}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.schedule}>
            <h3>Show info</h3>
            <div className={styles.info}>
              <div className={styles.days}>
                <p>Schedule: </p>
                {movie.schedule.days.map((day) => (
                  <p key={day}> {day}</p>
                ))}
              </div>
              <div className={styles.status}>
                <p>status: </p>
                <p>{movie.status}</p>
              </div>
              <div className={styles.status}>
                <p>network: </p>
                <p>{movie.network.name}</p>
              </div>
              <div className={styles.genres}>
                <p>genres: </p>
                {movie.genres.map((g) => (
                  <p key={g}> {g}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Movie;

export async function getServerSideProps({ params }) {
  const res = await axios.get(`https://api.tvmaze.com/shows/${params.id}`);
  return {
    props: {
      movie: res.data,
    },
  };
}

// export const getStaticProps = async ({ params }) => {
//   console.log(context.params.id);
//   const res = await axios.get(`https://api.tvmaze.com/shows/${params.id}`);
//   console.log(res);
//   return {
//     props: { movie: res.data },
//   };
// };
// export const getStaticPaths = async () => {
//   const res = await axios.get('https://api.tvmaze.com/shows');
//   const paths = res.data.map((m) => ({
//     params: { id: m.id.toString() },
//   }));
//   console.log(res.data);
//   return {
//     paths,
//     fallback: false,
//   };
// };
