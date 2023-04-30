import React from 'react';

import background1 from '../images/back1.jpg';
import login1 from "../images/background.svg";
function Home() {
  return (
    <div className="hero min-h-screen " >
      <img className="h-screen w-full" src={login1} alt="" />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello There </h1>
          <p className="mb-5 text-2xl text-info font-lobster"> 
          We journey with you to monitor your Blood Sugar Levels 
          in just two steps.Visit get your test and submit and get your test results  </p>
        </div>
      </div>
    </div>
  )
}

export default Home;


