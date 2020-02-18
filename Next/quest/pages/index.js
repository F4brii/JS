import Base from '../components/Base';
import Nav from '../components/Nav';
import Head from 'next/head';
import Footer from '../components/Footer';
import Banner from '../public/banner';
import Boton from '../components/Boton';
import Tabla from '../components/Tabla';
import Tabla1 from '../components/Tabla1';

export default class extends React.Component{
    render(){
        return(
            <div>
                <Base>
                    <Head>
                        <title>SoK | Tienda de Ropa Chirri</title>
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
                    </Head>
                    <Nav/>
                    <div className='container-fluid banner'>
                        <Banner/>
                    </div>
                    <div className='marco espaciar'>
                        <div className='abs-center row'>
                            <Boton/>
                        </div>
                        <div id='tabla1' className='row'>
                            <Tabla/>
                        </div>
                        <div id='tabla2' className='row d-none'>
                            <Tabla1/>
                        </div>
                    </div>
                    <Footer/>                
                </Base>
                <style jsx>
                    {`
                        .marco{
                            margin-left: 185px;
                            margin-bottom: 50px;
                        }
                        
                        .banner{
                            margin-top: 120px;
                            margin-left: 120px;
                        }

                        .abs-center {
                            margin-top:50px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    `}
                </style>
            </div>
        );
    }
}
