import Link from 'next/link';

const Header = () => (
  <div className='container-fluid marco bg-dark'>
    <div className='Feactures'>
      <Link href="/">
        <a className='text-white'>Home..</a>
      </Link>
    </div>
    <style jsx>
      {`
        .marco{
          border: 1px solid #000;
        }

        .Feactures{
          margin-left: 50px;
          margin-top: 20px;
          margin-bottom: 20px;
        }
      `}
    </style>
  </div>
);

export default Header;