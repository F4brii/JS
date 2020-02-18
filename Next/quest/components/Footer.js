import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component{
    render(){
        return(
            <footer className='bg-dark text-white'>
                <div className='container-fluid  margen'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-6 izq'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-12 col-lg-4'>
                                    <h6>Acerca de Nosotros</h6>
                                    <p className='espacio'>
                                        <Link href=''>
                                            <a>Conectate con Nosotros</a>
                                        </Link>
                                    </p>
                                    <p className='espacio'>
                                        <Link href=''>
                                            <a>Nuextra Marca</a>
                                        </Link>
                                    </p>
                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-4 izquierda'>
                                    <h6>Enlaces de interes</h6>
                                    <p className='espacio'>
                                        <Link href=''>
                                            <a>Promociones Vigentes</a>
                                        </Link>
                                    </p>
                                    <p className='espacio'>
                                        <Link href=''>
                                            <a>Preguntas Frecuentes</a>
                                        </Link>
                                    </p>
                                    <p className='espacio'>
                                        <Link href=''>
                                            <a>Mapa del sitio</a>
                                        </Link>
                                    </p>
                                    <p className='espacio'>
                                        <Link href=''>
                                            <a>Dotaciones</a>
                                        </Link>
                                    </p>
                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-4 izquierda'>
                                    <h6>Terminos y Condiciones</h6>
                                    <p className='espacio'>
                                        <Link href=''>
                                            <a>Terminos y condiciones</a>
                                        </Link>
                                    </p>
                                    <p className='espacio'>
                                        <Link href=''>
                                            <a>Politica de Cookies</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-1 vl'></div>
                        <div className='col-sm-12 col-md-12 col-lg-5 izquierda'>
                            <h6>Nuestros Medios de Pagos</h6>
                        </div>
                    </div>
                </div>
                <style jsx>
                    {`
                        footer{
                            align-self:flex-end;
                            background-color: rgba(120,120,120,.5);
                            line-height:3;
                            width:100%;
                        }

                        .margen{
                            margin-top: 80px;
                            margin-bottom:80px;
                        }

                        .espacio{
                            margin-bottom:-20px;
                        }

                        .izquierda{
                            margin-left: -80px;
                        }
                        .izq{
                            margin-left: 150px;
                        }
                        .vl {
                            border-left: 1px solid white;
                            height: 200px;
                            margin-left: -80px;
                        }
                    `}
                </style>
            </footer>
        );
    }
}

export default Footer;