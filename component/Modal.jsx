import Image from 'next/image';
import styles from '../styles/Showlist.module.scss';
import moment from 'moment/moment';
const Modal = ({ movie, modalPos }) => {
  console.log(movie);
  function createMarkup(desc) {
    return { __html: desc.slice(0, 300) + '...' };
  }
  return (
    <div className={`modal`} style={modalPos}>
      <h1>{movie.name}</h1>
      <Image
        src={movie.show.image.original}
        width={450}
        height={340}
        objectFit='contain'
        alt={movie.name}
        placeholder='blur'
        blurDataURL={movie.show.image.original}
        loading='lazy'
      />
      <div className={styles.desc}>
        <div className={styles.rate}></div>
        <h3>{movie.name}</h3>
        <p>Runtime: {movie.runtime} min</p>
        <p>Airdate: {moment(movie.airdate).format('MMM Do YY')}</p>
        <div dangerouslySetInnerHTML={createMarkup(movie.show.summary)} />
      </div>
    </div>
  );
};

export default Modal;
