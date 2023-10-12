import React from 'react'
import Banner from '../src/assets/img/background-main-banner.jpeg'
import { HomeContainer } from './Style'
import ProfilePicture from '../src/assets/img/profile-picture.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    AOS.init();

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
            <div className='bloc-presentation'>
                <div className='presentation-picture'>
                    <img
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                        src={ProfilePicture} alt="profile-picture" />
                </div>
                <div className='presentation-text'>
                    <h2>Hi!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis sequi consectetur ad minus perferendis laborum nulla eaque expedita reprehenderit ducimus id magnam assumenda sunt rem, fugit placeat quod modi laudantium dignissimos! Magnam voluptas dolore repellat, beatae tempore sint facere?</p>
                    <button>MEET ME</button>
                </div>
            </div>
            <div className='bloc-program'>
                <div className='program-home-text'>
                    <h2>MY ONLINE <span>TRAINNING PROGRAM</span></h2>
                    <div className='program-home-list'>
                        <ul>
                            <div>
                                <li data-aos="flip-up">
                                    <div>
                                        <i className="material-icons">devices</i>
                                        <p>Totally online</p>
                                    </div>
                                </li>
                                <li data-aos="flip-up">
                                    <div>
                                        <i className="material-icons">calendar_month</i>
                                        <p>Adaptable to busy lives</p>
                                    </div>
                                </li>
                            </div>
                            <div>
                                <li data-aos="flip-up">
                                    <div>
                                        <i className="material-icons">chat</i>
                                        <p>Daily support</p>
                                    </div>
                                </li>
                                <li data-aos="flip-up">
                                    <div>
                                        <i className="material-icons">spa</i>
                                        <p>Sustainable habits for your life</p>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='program-home-container'>
                <div className='program-home-text' data-aos="fade-right">
                    <h3>"FROM SEDENTARY</h3>
                    <h4>TO STRONG"</h4>
                    <p>12 weeks to a healthier and stronger version of yourself</p>
                    <button>CHECK IT OUT</button>
                </div>
            </div>
            <div className='consultation-container'>
                <div className='consultation-form'>
                    <form action="submit">
                        <input
                            type="text" placeholder='Your name' required />
                        <input type="email" placeholder='Your email' required />
                        <input
                            className='text-input-area'
                            type="text" placeholder='Enter your message' />
                        <button type='submit'>BOOK NOW
                            <i className="material-icons">arrow_right_alt</i>
                        </button>
                    </form>
                </div>
                <div className='consultation-text'>
                    <h4>free</h4>
                    <h2>get a</h2>
                    <h3>consultation call</h3>
                </div>
            </div>
        </HomeContainer >
    )
}

export default Home