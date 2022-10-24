import Link from 'next/link';

const Navbar = () => {
  const STYLE = {
    backgroundColor: '#101010',
    color: '#f1f2f3',
    padding: '20px 60px',
  };
  return (
    <nav className='flex-between' style={STYLE}>
      <Link href='/'>
        <a>
          <h1>TV Bland</h1>
        </a>
      </Link>
      <Link href='/'>
        <a>TV shows</a>
      </Link>
    </nav>
  );
};

export default Navbar;
