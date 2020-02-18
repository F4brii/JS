import Hombre1 from '../public/Mujer1'
import Hombre2 from '../public/Mujer2'
import Hombre3 from '../public/Mujer3'
import Hombre4 from '../public/Mujer4'
import Hombre5 from '../public/Mujer5'

export default class extends React.Component{
    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 separarContenedor'>
                        <Hombre1/> 
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 separarContenedor'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-3 img'>
                                <Hombre2/>
                            </div>
                            <div className='col-lg-3 col-md-3'>
                                <Hombre3/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 col-md-3 img1 img'>
                                <Hombre4/>
                            </div>
                            <div className='col-lg-3 col-md-3 img1'>
                                <Hombre5/>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>
                    {`
                        .separarContenedor{
                            margin-top: 50px;
                            margin-right: -50px;
                        }
                        .img{
                            margin-right: 180px;
                        }
                        .img1{
                            margin-top: 30px;
                        }
                    `}
                </style>
            </div>
        );
    }
}