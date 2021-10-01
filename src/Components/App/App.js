import './App.css'

import Header from '../Header/Header'

import Home from '../Home/Home'
import About from '../About/About'
import Services from '../Services/Services'
import Login from '../Login/Login'
import Register from '../Register/Register'



import { Route, Switch } from 'react-router'

export default function App() {
  return (
    <>
      <div> 
        <Header/>      

        <main>
          <Switch>
            <Route exact path="/" render= { (props) => <Home />}></Route>
            <Route exact path="/about" render= { (props) => <About />}></Route>
            <Route exact path="/services" render= { (props) => <Services />}></Route>
            <Route exact path="/login" render= { (props) => <Login />}></Route>
            <Route exact path="/register" render= { (props) => <Register />}></Route>
          </Switch>
        </main> 
             
      </div>




    </>

  );
}


/*
SEÇÕES:
  INÍCIO - HEADER - MENU
  CURSOS
  CONTATOS
  PARCEIROS
  MISSAO
  RODAPÉ - FOOTER

*/