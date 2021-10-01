import './Login.css'
import { Link } from 'react-router-dom'

import facebooknocolor from '../../img/facebooknocolor.png'
import googlenc from '../../img/googlenocolor.png'

export default function Login() {
    return (
        <body className="loginbody">
            <div className="login-page">
                <h1>FAÇA SEU LOGIN</h1>
                <form>
                    <input type="email" name="" id="" placeholder="Digite seu e-mail"></input>
                    <input type="password" name="" id="" placeholder="Digite sua senha"></input>    
                    <button type="submit" className="btn">ENTRAR</button>
                    <p>ou entre através:</p>
                    <div className="icons">
                        <div>
                            <Link to="/Login"><img className="googlenc" src={googlenc}/></Link>
                        </div>
                        <div>
                            <Link to="/Login"><img className="facebooknc" src={facebooknocolor}/></Link>  
                        </div>

                    </div>
                </form>
                <p className="bold">PRIMEIRO ACESSO?</p>
                <p><Link to="/Register" className="sign-up">Clique aqui</Link> para se cadastrar</p>
            </div>

        </body>

    )
}