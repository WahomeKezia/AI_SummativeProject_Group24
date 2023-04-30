import { useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import { useForm } from "react-hook-form";
import wretch from "wretch";
import { ThreeDots } from 'react-loading-icons'
import { DeployedURL } from '../components/Constants';
import { useNavigate } from 'react-router-dom';

function Test() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [imgUploadMsg, setImgUploadMsg] = useState(null);
  const [successMgs, setSuccessMgs] = useState(null);
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

const RegisterMutation = useMutation({
  mutationFn: async (data) => {
    // wretch(`${DeployedURL}/test`)
    //   .post(data).json()
    //   .then((data) => {
        setSuccessMgs(data);
        setTimeout(() => setSuccessMgs(false), 4000);
        navigate('/results'); // navigate to the results page
      //})
     // .catch(error => { setError(error); setTimeout(() => setError(false), 3000); })
  }
})

  const onSubmit = async (data) => {
    RegisterMutation.mutate(data);
  };
  return (
    <main className='bg-base-200 mt-60px'>
      {
        RegisterMutation.isLoading ?
          (
            <ThreeDots stroke="#98ff98" strokeOpacity={.125} speed={.75} />
          ) : (
            error ? (
              <div className="alert alert-error mt-60px shadow-lg w-fit z-50 text-center text-white absolute top-0 right-0" >
                <div><span className='text-2xl'>😒</span>
                  <span>Error! {error?.message}</span>
                </div>
              </div >
            ) : (
              successMgs && (
                <div className="alert alert-error mt-60px shadow-lg w-fit z-50 text-center text-white absolute top-0 right-0" >
                  <div><span className='text-2xl'>😁</span>
                    <span>User registered Successfully</span>
                  </div>
                </div>
              )
            )
          )
      }
      <div className="hero-content">
        <h1 className="text-5xl font-bold xs:text-4xl registerHeader">✍️ Submit to get you results!</h1>
      </div>
      <div className="hero  bg-base-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card ">
              <div className='card-header'>
                <div className="avatar grid">

                </div>
              </div>
              <div className="card-body md:flex-row sm:flex-col lg:flex-row">
                <div>
                <label className="label"><span className="label-text">Age</span></label>
<input {...register("age", { required: true, min: 1 })} type="number" placeholder="Enter your age" className="input input-bordered" />
{errors.age?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Age is required 😶</p>}{errors.age?.type === 'min' && <p className="label-text-alt text-red-400 pt-2">Age must be a positive number</p>}

<label className="label"><span className="label-text">BMI</span></label>
<input {...register("bmi", { required: true, min: 1 })} type="number" placeholder="Enter your BMI" className="input input-bordered" />
{errors.bmi?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">BMI is required 😶</p>}{errors.bmi?.type === 'min' && <p className="label-text-alt text-red-400 pt-2">BMI must be a positive number</p>}

<label className="label"><span className="label-text">Blood Pressure</span></label>
<input {...register("bloodPressure", { required: true, min: 1 })} type="number" placeholder="Enter your blood pressure" className="input input-bordered" />
{errors.bloodPressure?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Blood pressure is required 😶</p>}{errors.bloodPressure?.type === 'min' && <p className="label-text-alt text-red-400 pt-2">Blood pressure must be a positive number</p>}

</div>
                <div className='md:ml-4 lg:ml-4'>
                <label className="label"><span className="label-text">Glucose</span></label>
<input {...register("glucose", { required: true, min: 1 })} type="number" placeholder="Enter your glucose" className="input input-bordered" />
{errors.glucose?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Glucose is required 😶</p>}{errors.glucose?.type === 'min' && <p className="label-text-alt text-red-400 pt-2">Glucose must be a positive number</p>}

<label className="label"><span className="label-text">Diabetic Pedigree Function</span></label>
<input {...register("diabeticPedigreeFunction", { required: true, min: 1 })} type="number" placeholder="Enter your diabetic pedigree function" className="input input-bordered" />
{errors.diabeticPedigreeFunction?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">Diabetic pedigree function is required 😶</p>}{errors.diabeticPedigreeFunction?.type === 'min' && <p className="label-text-alt text-red-400 pt-2">Diabetic pedigree function must be a positive number</p>}
                </div>

              </div>
              <div className="form-control mt-3 grid">
                <button type="submit" className="btn btn-outline max-w-md place-self-center w-full">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main >
  )
}

export default Test;