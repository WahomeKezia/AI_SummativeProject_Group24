import React from 'react';
import background from '../images/back.jpg';
import background1 from '../images/back1.jpg';
import background2 from '../images/back2.jpg';
function Home() {
  return (
    <div className="hero min-h-screen " >
      <img className="h-screen w-full" src={background1} alt="" />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello There </h1>
          <p className="mb-5 text-2xl text-info font-lobster"> We journey with with you to monitor you Diabetics,I two steps , you will get you results . Enter you details , submit and get your results  </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
