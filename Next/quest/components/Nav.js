import React, { Component } from 'react';

import MyImage from '../public/lupa'
import Ubication from '../public/ubication'
import Bolsa from '../public/bolsa'
import Link from 'next/link'

export default class extends Component {
    render() {
        return (
            <div className='container-fluid letra'>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                                <Link href='/'>
                                    <a class="nav-link text-white">Inicio</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href='/Hombre'>
                                    <a class="nav-link text-white">Hombre</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href=''>
                                    <a class="nav-link text-white">Mujer</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href=''>
                                    <a class="nav-link text-white ">Nuevo</a>
                                </Link>
                            </li>
                        </ul>
                        <div className='espacio'>
                            <Link href=''>
                                <div>
                                    <MyImage/>
                                    <a className='text-white'>Buscar</a>
                                </div>
                            </Link>
                        </div>
                        <div className='espacio'>
                            <Link href=''>
                                <div className=''>
                                    <Ubication/>
                                    <a className='text-white'>Tiendas</a>
                                </div>
                            </Link>
                        </div>
                        <div className='espacio'>
                            <Link href=''>
                                <Bolsa/>
                            </Link>
                        </div>
                    </div>
                </nav>
                <style jsx>
                    {`
                       .letra{
                            font: oblique bold 120% cursive;
                       }

                       .espacio{
                           margin-left:20px;
                       }
                    `}
                </style>
            </div>
        );
    }
}

