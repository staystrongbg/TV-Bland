import Link from 'next/link';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';
import styles from '../styles/MovieCard.module.scss';
const MovieCard = ({ m }) => {
  return (
    <div className={styles.showCard}>
      <Link href={`/shows/${m.show.id}`}>
        <a>
          <Image
            src={m.show.image.medium}
            width={240}
            height={340}
            alt={m.name}
            placeholder='blur'
            blurDataURL={m.show.image.medium}
            loading='lazy'
          />
        </a>
      </Link>
      <div className={styles.desc}>
        <div className={styles.rate}>
          <Rating
            allowFraction
            size={18}
            initialValue={m.show.rating?.average / 2}
          />
          <span className={styles.showRating}>{m.show.rating.average}</span>
        </div>
        <h3>{m.name}</h3>
        <p>Runtime: {m.runtime} min</p>
        <p>Airdate: {m.airtime}</p>
      </div>
    </div>
  );
};

export default MovieCard;
