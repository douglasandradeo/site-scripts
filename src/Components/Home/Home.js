import '../../Styles/Sections/Sections.css'
import './Home.css'

import  Banner1  from "../../img/banner_rotativo-01.png"
import  Banner2  from "../../img/banner_rotativo-02.png"

export default function Home() {
    return(
        <>

        <body className="home">
            <div className="home-page">
                <div className="indices">
                    <ul>
                        <li>EU</li>
                        <li>|</li>
                        <li>ASIA</li>
                        <li>|</li>
                        <li>US</li>
                        <li>|</li>
                        <li>PRE-MKT</li>
                        <li>|</li>
                        <li>OIL</li>
                        <li>|</li>
                        <li>GOLD</li>
                        <li>|</li>
                        <li>BONDS</li>
                        <li>|</li>
                        <li>ASIA FX</li>
                        <li>|</li>
                        <li>EU FX</li>
                        <li>|</li>
                        <li>CRYPTO</li>
                    </ul>

                    <div className="boxes">
                        
                        <div className="green-box">
                            <div>
                                <p>DAX*</p>
                                <p>15.808,04</p>
                            </div>
                            <div>
                                <p>^</p>
                                <p>+42,23 +0,27%</p>
                            </div>

                                <p>LAST | 08/20/21</p>
                        </div>

                        <div className="green-box">
                                <p>FTSE*</p>
                                <p>7.087,90</p>
                                <p>^</p>
                                <p>+29,04 +0,41%</p>

                                <p>LAST | 08/20/21</p>
                        </div>

                        <div className="green-box">
                                <p>CAC*</p>
                                <p>6.626,11</p>
                                <p>^</p>
                                <p>+20,22 +0,31%</p>
                                <p>LAST | 08/20/21</p>
                        </div>

                        <div className="red-box">
                                <p>FTSE MIB*</p>
                                <p>25.918,27</p>
                                <p>^</p>
                                <p>-10,51 -0,04%</p>
                                <p>LAST | 08/20/21</p>
                        </div>

                        <div className="green-box">
                                <p>STOXX600*</p>
                                <p>468,80</p>
                                <p>^</p>
                                <p>+1,56 +0,33%</p>
                                <p>LAST | 08/20/21</p>
                        </div>

                    </div>


                </div>

                <div className="carrosel">
                    <div className="imagens">
                        <img src={Banner1}/>
                        <img src={Banner2}/>
                        <img src={Banner1}/>
                    </div>
                </div>

            </div>

        </body>

        </>
    )
}
