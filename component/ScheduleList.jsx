import Image from 'next/image';
import styles from '../styles/Showlist.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import Paginate from './Paginate';
import MovieCard from './MovieCard';
const ScheduleList = ({ list }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(12);

  const pageNum = [];
  const idxOflLast = currentPage * moviesPerPage;
  const idxOfFirst = idxOflLast - moviesPerPage;
  const currentMovie = list.slice(idxOfFirst, idxOflLast);

  for (let i = 1; i <= Math.ceil(list.length / moviesPerPage); i++) {
    pageNum.push(i);
  }
  const paginate = (n) => {
    setCurrentPage(n);
  };

  return (
    <div className={styles.listWrapper}>
      <h1 className={styles.title}>last added shows</h1>
      <div className={styles.movieList}>
        {currentMovie.map((m) => (
          <MovieCard key={m.id} m={m} />
        ))}
      </div>
      <Paginate pageNum={pageNum} paginate={paginate} />
    </div>
  );
};

export default ScheduleList;
