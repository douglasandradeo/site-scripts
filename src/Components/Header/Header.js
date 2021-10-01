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
                            <li> <Link to="/">HOME</Link> </li>
                            <li> <Link to="/about">A ECHO</Link> </li>
                            <li> <Link to="/services">SERVIÇOS DISPONÍVEIS</Link> </li>
                        </ul>
                    </div>

                    <div className="login">
                        <Link to="/login" id="loginMenu">LOGIN</Link>
                    </div>

            </nav>
        </header>
        </>
    )
}



