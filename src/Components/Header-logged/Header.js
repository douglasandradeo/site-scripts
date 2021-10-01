import { Link } from 'react-router-dom'
import './Header.css'

import Logo from '../../img/logo.png'

export default function Header() {
    return (
        <>
        <header>    
            
            <nav className="menu">

                <Link to="/"><img className="logo" src={Logo}/></Link> 

                    <div className="navMenu">
                        <ul className="navMenu">
                            <li> <Link to="/">REGISTRAR EVENTO</Link> </li>
                            <li> <Link to="/about">MEU HISTÓRICO</Link> </li>
                            <li> <Link to="/services">ANALISAR</Link> </li>
                        </ul>
                    </div>

                    <div className="login">
                        <ul>
                            <li>PERFIL
                                <div className="submenu">
                                    <ul>
                                        <li>MEUS DADOS</li>
                                        <li>CONFIGURAÇÕES</li>
                                        <li>LOGOUT</li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>

            </nav>
        </header>
        </>
    )
}



