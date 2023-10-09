import React from 'react'
import Banner from '../src/assets/img/background-main-banner.jpeg'
import { HomeContainer } from './Style'

const Home = () => {
    return (
        <HomeContainer>
            <div className='main-banner'>
                <img src={Banner} alt="banner" />
                <div className='main-title'>
                    <h1>GET YOUR</h1>
                    <h2>ONLINE TRAINNING PROGRAM</h2>
                    <button className='button-banner'>LEARN MORE</button>
                </div>
            </div>
            <div>
                foto de seba, presentacion corta y boton a meet me
            </div>
            <div>
                banner de online training programs, destacando 3 o 4 puntos claves del programa (por ej, que es totdo online, que se adapta a tu estilo de vida, daily support, etc y boton a ver todos los planes)
            </div>
            <div>
                banner de get a free consultation + boton de book now y que te lleve a formulario
            </div>
            <div>
                carrusel de reviews
            </div>
            <div>
                footer con redes sociales
            </div>
        </HomeContainer>
    )
}

export default Home