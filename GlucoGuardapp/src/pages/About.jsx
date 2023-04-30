import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaPencilAlt } from 'react-icons/fa';

function About() {
  return (
    <>
      <div className='mt-60px'>
        <div className="mockup-window border bg-base-300 mt-8 mx-4">
          <div className="hero min-h-fit bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-screen">
                <h1 className="text-5xl font-bold text-warning">Why Us</h1>
                <p className="py-6 md:text-xl sm:text-xl">GlucoGuard offers free prediction services with 98% accuracy , that help you moniter your Blood  Sugar levels and get you diabetic status. We value you privacy and we don't ask for sensitive  personal information .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mision and vision */}
      <div className='mt-60px'>
        <div className="mockup-window border bg-base-300 mt-8 mx-4">
          <div className="hero min-h-fit bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-screen">
                <h1 className="text-5xl font-bold text-warning">Our Mission</h1>
                <p className="py-6 md:text-xl sm:text-xl">To ensure that our users are able to get their sugar level status just by two simple steps.Fill in revalant information , click submit and get your prediction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-60px'>
        <div className="mockup-window border bg-base-300 mt-8 mx-4">
          <div className="hero min-h-fit bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-screen">
                <h1 className="text-5xl font-bold text-warning">Our Vision</h1>
                <p className="py-6 md:text-xl sm:text-xl">To enable our users free access to our AI tool and accurate test results just by a click .</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-60px'>
        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            <span className="footer-title">Contacts</span>
            <a className="link link-hover">Location: Kenya</a>
            <a className="link link-hover">P.O.BOX:01-00100 </a>
            <a className="link link-hover">Phone number: 0712000000</a>
          </div>
          <div>
            <span className="footer-title">Links</span>
            <a className="link link-hover" href='/'>Home</a>
            <a className="link link-hover" href='/test'>Get your test</a>
            <a className="link link-hover" href='/results'>See you results</a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default About