import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="foto profil" />
        <h1 className="home__name">Rifki Adam</h1>
        <span className="home__education">I am a Front-End Web Developer</span>
        <HeaderSocials/>

        <a href="#contact" className="btn">Hire Me</a>
        <ScrollDown/>
      </div>

      <Shapes/>
    </section>
  )
}

export default Home