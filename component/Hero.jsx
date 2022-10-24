import Image from 'next/image';
import styles from '../styles/Hero.module.scss';
import Popcorn from '../images/pexels-tima-miroshnichenko-7991378.jpg';

const Hero = () => {
  return (
    <section className={`${styles.hero} flex-center`}>
      <div className='img-container'>
        <Image
          src={Popcorn}
          layout='fill'
          objectFit='cover'
          alt='popcorn'
          placeholder='blur'
          blurDataURL={Popcorn}
          loading='lazy'
        />
      </div>
      <div className={styles.nowPlaying}>
        <p>NOW PLAYING</p>
        <h1>
          <span>NOW</span> PLAYING
        </h1>
        <div className={styles.heroDesc}>
          <p>
            TV Shows and web series database
            <br />
            Create personalized schedules. Episode guide cast, crew and
            character information
          </p>
        </div>
      </div>
      <div className='gradient' />
    </section>
  );
};

export default Hero;
