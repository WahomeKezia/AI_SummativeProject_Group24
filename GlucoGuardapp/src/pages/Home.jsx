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
          We journey with you to monitor you Blood Sugar Levels 
          with just two steps.Visit get your test and submit and get your test results  </p>
        </div>
      </div>
    </div>
  )
}

export default Home;


// import React from 'react';
// import login1 from "../images/background.svg";
// import records from "../images/records.png";
// import support from "../images/support.png";
// function Home() {
//   return (
//     <div className="flex flex-row flex-wrap mx-5 ">
//       <div className="card w-96 h-96 mx-auto my-4 bg-base-200 shadow-xl image-full">
//         <figure><img src={records} alt="Shoes" /></figure>
//         <div className="card-body">
//           <h2 className="card-title text-info text-xl font-bold text-center">Patient Record Management</h2>
//           <p className='m-auto text-xl text-center'>With Meditrack's advanced patient record management system, healthcare providers can easily and securely manage patient information. Our system utilizes facial recognition and fingerprint technology to accurately identify patients, reducing the risk of errors and improving patient care.</p>
//         </div>
//       </div>
//       <div className="card w-96 h-96 mx-auto my-4 bg-base-200 shadow-xl image-full">
//         <figure><img src={login1} alt="Shoes" /></figure>
//         <div className="card-body">
//           <h2 className="card-title text-info text-xl font-bold text-center">Data Analysis</h2>
//           <p className='m-auto text-xl text-center'>Meditrack's data analysis tools provide healthcare providers with valuable insights into patient care and operational performance. Our platform includes comprehensive reporting and analytics features that help providers identify trends, track outcomes, and make data-driven decisions.</p>
//         </div>
//       </div>
//       <div className="card w-96 h-96 mx-auto my-4 bg-base-200 shadow-xl image-full">
//         <figure><img src={support} alt="Shoes" /></figure>
//         <div className="card-body">
//           <h2 className="card-title text-info text-xl font-bold text-center">Technical Support</h2>
//           <p className='m-auto text-xl text-center'>Meditrack's dedicated technical support team provides healthcare providers with the help they need to use our platform effectively. Our team is available 24/7 to provide installation and setup assistance, ongoing maintenance, and troubleshooting support. </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home;
