import {lazy, Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Container } from 'react-bootstrap';
import  './App.css'

const Menu = lazy(() => import('./components/Menu/index'))
const Rotas = lazy(() => import('./rotas'))
const Rodape = lazy(() => import('./components/footer'))
const Info = lazy(() => import('./components/Infomacoes'))

function App() {
  return (
    <BrowserRouter>
        <div className="App">

        <header>
        <Suspense fallback={ <p>Perae só um minutinho</p>}>

        <Menu />
        </Suspense>  

        </header> <main> <Container fluid>
        <Suspense fallback={ <p>Perae só um minutinho</p>}>

        <Rotas/> </Suspense> </Container> </main> <footer>
        <Suspense fallback={ <p>Perae só um minutinho</p>}>

        <Info/>
        </Suspense>
        <Suspense fallback={ <p>Perae só um minutinho</p>}>
        <Rodape />
        </Suspense>
        </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
