import {React, useState} from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import Carousel from "./Banner";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Events from '../Events/Events.jsx';
import Portfolio from '../portfolio/portfolio.jsx';

const Home2 = () => {
    const [state] = useState({
        title: "Hi, ",
        titleTwo: "Welcome to ",
        titleThree: "Insaaniyat Reborn.",
        image: "src/assets/insaaniyat.png",
    });
  return (
    <>
        <div className='landing'>
            <div className='home-intro'>
                <h2>
                    <div className='title'>{state.title}</div>
                    <div className='titleTwo'>{state.titleTwo}</div>
                    <div className='titleThree'>{state.titleThree}</div>
                </h2>
                <div className='text'>
                    <Typewriter 
                        options={{
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        strings:[
                            "Humanizing the World.",
                            "Whatever it takes to save everyone in need.",
                            "Giving is not just about donation, it's about making a difference. – Kathy Calvin"
                            ],
                        }} 
                    />
                </div>
                <div className='contact-me'>
                    <button className='button'>Coming Soon</button>
                </div>
            </div>
            <div className='home-image'>
                <img className='spiderman-image' src={state.image} alt='spiderman' />
            </div>
        </div>
        <div className='float-container'>
            <div className='float-child'>
                <h3>Blanket Distribution 2020
                </h3>
            </div>
            <div className='float-child'>
                <Events />
            </div>
        </div>
        <Portfolio />
    </>
  )
}

export default Home2;