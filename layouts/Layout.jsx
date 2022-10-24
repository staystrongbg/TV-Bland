import Head from 'next/head';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Layout = ({ children, title, desc }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={desc} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
