import Base from '../components/Base';
import Nav from '../components/Nav';
import Head from 'next/head';
import Footer from '../components/Footer';
import Banner from '../public/Banner-hombre'

export default class extends React.Component{
    render(){
        return(
            <Base>
                <Head>
                    <title>SoK | Tienda de Ropa Chirri</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
                </Head>
                <Nav/>
                <div className='banner-hombre'>
                    <Banner/>
                </div>
                <div className='marco'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-12'>

                        </div>
                        <div className='col-lg-9 col-md-9 col-sm-12'>
                            
                        </div>
                    </div>
                </div>
                <Footer/>
                <style jsx>
                    {`
                        .banner-hombre{
                            margin-top: 100px;
                            margin-left: 130px;
                        }

                        .marco{
                            margin-left: 185px;
                            margin-bottom: 50px;
                        }
                    `}
                </style>
            </Base>
        );
    }
}