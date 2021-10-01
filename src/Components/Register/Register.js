import './Register.css'

export default function Register() {
    return (
        <>
        <body className="register">
            <div className="register-page">
                <form>
                    <input type="name" name="" id="" placeholder="NOME COMPLETO" className="name"/>
                    <input type="date" name="" id="" placeholder="DATA NASCIMENTO" className="birth"/>
                    <input type="radio" name="sex" id="" className="radio"/>MASC
                    <input type="radio" name="sex" id="" className="radio"/>FEM
                    <input type="email" name="" id="" placeholder="E-MAIL" className="email"/>
                    <input type="confirm-email" name="" id="" placeholder="CONFIRMAR E-MAIL" className="email"/>
                    <input type="password" name="" id="" placeholder="SENHA" className="password"/>
                    <input type="password" name="" id="" placeholder="CONFIRMAR SENHA" className="password"/>
                    <div className="cadastrar">
                        <button type="submit" className="btn">CADASTRAR</button>
                    </div>

                </form>
            </div>

        </body>


        </>
    )
}