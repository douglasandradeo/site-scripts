import './Sections.css'



export default function Sections() {
    return(
        <div>
            <section id="home">
                <h2>Início</h2>
                <div></div>
            </section>

            <section id="about">
                <h2>A Echo</h2>
            </section>

            <section id="services">
                <h2>Serviços disponíveis</h2>
            </section>

            <section id="feedbacks">
                <h2>Feedbacks</h2>
            </section>

            <a className="home" href="#home">Início</a>
            <a className="about" href="#about">A Echo</a>
            <a className="services" href="#services">Serviços disponíveis</a>


        </div>
    )
}
