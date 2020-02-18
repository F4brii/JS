export default class extends React.Component{

    render(){
        return(
           <div className='fondo'>
               <ul>
                    <li>
                        <button className='boton' href='' onClick={this.handleClick('Hombre')}>Hombre</button>
                   </li>
                   <li>
                        <button className='boton' href='' onClick={this.handleClick('Mujer')} >Mujer</button>
                   </li>
               </ul>
               <style jsx>
                   {`
                        .fondo{
                            box-shadow: 0px 0px 0px 3px;
                            width: 260px;
                            height: 33px;
                            padding-top:0;
                        }

                       ul{
                           padding-left: 1px;
                       }

                        li{
                            display: inline-block;
                            border: 1px solid black;

                        }

                        .boton{
                            width: 127px;
                            margin-top: 2px;
                            text-decoration: none;
                            background: transparent;
                            border: none !important;
                            height: 29px;
                        }
                   `}
               </style>
           </div>
        );
    }

    handleClick(name) {
		return event => {
            if( name == 'Mujer' ){
                    let caja = document.getElementById('tabla2')
                    caja.classList.remove('d-none')

                    let caja1 = document.getElementById('tabla1')
                    caja1.classList.add('d-none')
            }else{
                let caja = document.getElementById('tabla1')
                    caja.classList.remove('d-none')

                    let caja1 = document.getElementById('tabla2')
                    caja1.classList.add('d-none')
            }
		};
	}
}