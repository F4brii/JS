import Base from '../components/Base';
import Head from 'next/head';

export default class extends React.Component{
    render(){
        return(
            <div>
                <Base>
                    <Head>
                        <title>Cliente GraphQl</title>
                    </Head>   
                    <h1>Hola Nextjs.</h1>          
                </Base>
            </div>
        );
    }
}