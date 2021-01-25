import React from 'react';
import './Home.css';
import MainAnimation  from "./MainPage/MainAnimation";
import About from "./AboutPage/About";
import Footer from './Footer/Footer';
function Home() {
    return (
        <div className='home-box'>
            <MainAnimation/>
            <About/> 
            <Footer/>
        </div>
    )
}

export default Home
