import React, { useEffect } from 'react'
import { TEInput, TERipple } from "tw-elements-react";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../PrivateRoute/useAuth';
import Cookies from 'js-cookie';

function RefreeLogIn() {
  const navigate = useNavigate();


  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useAuth();
    const{register,handleSubmit , formState : {errors}, } = useForm()

    const data = value => console.log('data' ,value);

    const Submitdata = (val) => {
      // const formData = getValues();
      // console.log('Form Data for submission:', formData);
      console.log('val', val)
      setLoading(true);
        
        axios({
          method : 'post' , 
          url : `https://referral-site.onrender.com/api/referrerlogin`,
          data : {
            username : val.username,
            password :val.password,
            rememberMe:"true"
          },

          withCredentials : true 
        }).then(res => {console.log(res.data , 'User registered');
        setIsAuthenticated(true);
        setLoading(false);
        localStorage.clear();
        localStorage.setItem('username',val.username)

        navigate('/refree/refreedashboard');
        console.log('hello world')   
      })
        .catch(err => console.log('Error:' , err))
        Cookies.set('status','true');
    }

  return (
    <>
    {console.log( 'errors', errors)}
    {console.log('auth' , isAuthenticated)}


       <section className="h-screen">
      <div className="h-full">
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form  onSubmit={handleSubmit(Submitdata) }>
              {/* <!--Sign in section--> */}
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>


              </div>

              {/* <!-- Email input --> */}
              <TEInput
                {...register('username' , {required: {value:true , message : 'Enter your Username'} })}
                type="username"
                label="User Name"
                size="lg"
                className="mb-4"
              ></TEInput>
                            {errors.username && <p className='text-red-500 my-0'>{errors.username.message}</p>}

              {/* <!--Password input--> */}
              <TEInput
                {...register('password' , {required: {value:true , message : 'please enter the password'}  })}
                type="Set password"
                label="Password"
                className="mb-4"
                size="lg"
              ></TEInput>
                            {errors.password && <p className='text-red-500 my-0'>{errors.password.message}</p>}

              <div className="mb-6 flex items-center justify-between">
                {/* <!-- Remember me checkbox --> */}
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck2"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>

                {/* <!--Forgot password link--> */}
                <a href="#!">Forgot password?</a>
              </div>

              {/* <!-- Login button --> */}
              <div className="text-center lg:text-left">
                {/* <Link to = '/refree/refreedashboard'> */}
                <TERipple rippleColor="light">
                  <button
                    type="submit"
                    
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Login
                  </button>
                </TERipple>
                {/* </Link> */}

{/* <input type='submit' value='login'/> */}


                {/* <!-- Register link --> */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?{" "}
                  <Link
                    to="/refree/refreesignup"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Register
                  </Link><br/>
                  <Link to = '/refree/refreedashboard'>
                    dashboard
                  </Link>
                  
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default RefreeLogIn
