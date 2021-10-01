import '../../Styles/Sections/Sections.css'
import './Services.css'

import grafico from "../../img/grafico.png"
import leftarrow from "../../img/left-arrow.png"
import rightarrow from "../../img/right-arrow.png"
import homem1 from "../../img/homem_1.png"
import mulher2 from "../../img/mulher_2.png"
import mulher3 from "../../img/mulher_3.png"
import homem4 from "../../img/homem_4.png"


export default function Services() {
    return(
        <>
        <body className="services">
            <div>
                <h1 className='h1-1'>VEJA COMO FORAM OS MOVIMENTOS DOS</h1>
            </div>
            <div>
                <h1 className='h1-2'>PRINCIPAIS ÍNDICES ECONÔMICOS DO MERCADO</h1>
            </div>

            <div className="grafico">
                <img src={grafico}/>
            </div>

            <div className="container-feedback">

                <h1 className="fb-title">O QUE FALAM DA GENTE...</h1>

                <div className="feedback">
                            
                    <div>
                        <img className="left-arrow" src={leftarrow}/>
                    </div>

                    <div>
                        <img className="fb-img" src={homem1}/>
                        <h2 className="fb-name">EDWARD</h2>
                        <p className="fb-text">"Muito bom! Abriu meus olhos para os acontecimentos do mercado financeiro!"</p>
                    </div>

                    <div>
                        <img className="fb-img" src={mulher2}/>
                        <h2 className="fb-name">ROSE</h2>
                        <p className="fb-text">"Sempre investi no escuro, mas agora consigo estudar de forma mais clara e objetiva o que aconteceu no passado e tomar as melhores decisões."</p>
                    </div>

                    <div>
                        <img className="fb-img" src={mulher3}/>
                        <h2 className="fb-name">JULIE</h2>
                        <p className="fb-text">"Ferramenta excelente para compor leque de opções para investir melhor!"</p>
                    </div>

                    <div>
                        <img className="fb-img" src={homem4}/>
                        <h2 className="fb-name">JOHN</h2>
                        <p className="fb-text">"Se tivesse conhecido esse recurso antes, com certeza teria ganhado mais nas oscilações do mercado."</p>
                    </div>

                    <div>
                        <img className="right-arrow" src={rightarrow}/>
                    </div>
                </div>
            </div>
        </body>


        <footer className="footer">
            <ul>
                <li><a href="/">HOME</a></li>
                <li>|</li>
                <li><a href="/about">A ECHO</a></li>
                <li>|</li>
                <li><a href="/services">SERVIÇOS DISPONÍVEIS</a></li>
            </ul> 
            <span>Desenvolvido por Douglas Andrade, 2021.</span>
        </footer>

        </>
    )
}
