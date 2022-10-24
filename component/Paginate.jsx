import styles from '../styles/Showlist.module.scss';

const Paginate = ({ pageNum, paginate }) => {
  const PAGINATION_STYLE = {
    width: '100%',
    gap: '5px',
  };

  const LI_STYLE = {
    cursor: 'pointer',
    border: '1px solid rgb(32, 14, 14)',
    width: '30px',
    height: '30px',
    color: '#f5f5f5',
  };

  return (
    <ul className={`${PAGINATION_STYLE} flex-center`} style={PAGINATION_STYLE}>
      {pageNum.map((pageNum, idx) => (
        <li
          style={LI_STYLE}
          key={idx}
          className='flex-center'
          onClick={() => paginate(pageNum)}
        >
          {pageNum}
        </li>
      ))}
    </ul>
  );
};

export default Paginate;
