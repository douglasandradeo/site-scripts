import '../../Styles/Sections/Sections.css'
import './About.css'

import Logo from "../../img/echo.png"

import Header from "../Header/Header"



export default function About() {
    return(
        <>

        <body>
            <div className="about">
    
                <img className="a-logo" src={Logo}/>

                <div className="a-text">
                    <p>
                        Página web que reúne todos os principais índices econômicos
                        do mercado nacional e internacional para análise das 
                        movimentações das economias diante de eventos históricos. 
                        Os índices considerados são dados ligados ao crescimento do 
                        país, a taxa básica de juros, ao câmbio, a bolsa de valores 
                        e outros que tem forte influência nas economias em geral. 
                    </p>
                </div>
            </div>
        </body>
        </>
    )
}
