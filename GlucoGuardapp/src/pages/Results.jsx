import { useContext } from 'react';
import login1 from "../images/background.svg";
import { Context } from '../context/Context';
import { Link, useNavigate } from 'react-router-dom';

function Results() {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();

  const handleTestAgain = () => {
    navigate(`/test`);
  }

  return (
    <div className='grid mt-60px bg-base-200 loginPage'>
      <div className="hero-content flex-col lg:flex-row-reverse bg-base-200 justify-around ">
        <div className="hero-content bg-base-200 ">
          < div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-2  place-self-center" >
            <div className="card-header loginHeader">
              <h1 className="text-5xl font-bold  px-2  text-center"> Results 🩺 </h1>
            </div>
            <div className="card-body">
              <div className="form-control mt-6">
                <button onClick={handleTestAgain} className="btn btn-outline btn-warning">Test again </button>
              </div>
            </div>
          </div >
        </div>
        <div className="hero-content">
          <img alt='no pic' src={login1} className="loginImg xs:max-w-xs max-w-lg rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  )
}

export default Results;
