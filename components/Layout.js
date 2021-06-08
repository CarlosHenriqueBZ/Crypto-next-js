import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'CHcrypto' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        
      </Head>


    
       
       
      <header className='header'>
        <Link href='/' passHref>
          <a>
          <center><img className="center" src="https://i.ibb.co/7r2K45h/ch.png" alt="LogoPSD" width="200px" ></img> </center> 
          </a>
        </Link>
      </header>
      <main>{children}</main>
    
    </div>
  );
};

export default Layout;