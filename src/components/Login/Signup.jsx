import React, { useEffect, useState } from 'react'
import { BsSpotify } from "react-icons/bs";
import "./Signup.css"
import "../../assets/CSS/responsive.css"
import { Form, Link, useNavigate } from 'react-router-dom';
import { Button, MobileStepper } from '@mui/material';
import { useTheme } from '@emotion/react';
import Step1 from './StepSignup/Step1';
import FormSignUp from './Form/FormSignUp';
import Step2 from './StepSignup/Step2';
import { useFormik } from 'formik';
import axios from 'axios';

export default function Signup() {
    const api = import.meta.env.VITE_API_LOCAL_BACKEND;
    const navigate = useNavigate();

    useEffect(() => {
        document.body.className = 'signup-page';
        return () => {
            document.body.className = '';
        };
    }, []);
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);



    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        gender: {
            id: ''
        },
        birthday: ''
    })
    const handleNext = (e) => {
        e.preventDefault()
        if (activeStep < 2) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const [input, setInput] = useState();
    const onChangeEmail = (e) => {
        setInput(e.target.value);
        setFormData(prevFormData => ({
            ...prevFormData,
            email: e.target.value
        }))
    }
    const formSignup = useFormik({
        initialValues: {
            userName: '',
            password: '',
            email: '',
            gender: {
                id: ''
            },
            birthday: ''
        },
        onSubmit: async (values) => {
            try {
                await axios.post(`${api}register`, values).then((res) => {
                    navigate('/login')
                })
            } catch {
                console.log('err')
            }
        }
    })
    useEffect(() => {
        formSignup.setValues(formData);
      }, [formData]);



    return (
        <div className=''>
            <header className='pt-8 pb-4 flex justify-center items-center'>
                <div className=''>
                    <BsSpotify className='min-w-11 min-h-11' />
                </div>
            </header>
            <div className='flex items-center justify-center'>
                <MobileStepper
                    className={`signup-page step  ${activeStep == 0 ? 'step-0-clr' : 'step-bg-1'}`}
                    variant="progress"
                    steps={3}
                    position="static"
                    activeStep={activeStep}
                    sx={{ maxWidth: 850, flexGrow: 1 }}
                />
            </div>
            {activeStep == 0 &&
                <section className='flex justify-center w-full pb-0 '>
                    <div className='px-8 box-content signup-form-1'>
                        <header className='mb-10 '>
                            <h1 className=' font-bold text-center text-header space-text'>Sign up to start listening</h1>
                        </header>
                        <div>
                            <div>
                                <div className='mb-2'>
                                    <label htmlFor="email" className='font-bold text-base'>Email address</label>
                                </div>
                                <div className='input-border '>
                                    <input type="text" id="email" onChange={onChangeEmail} className="inline-full py-3 px-4 text-base secondary_bg" placeholder='name@domain.com' />
                                </div>
                            </div>
                            <button onClick={handleNext} className='m-bl-st inline-full h-12 '>
                                <div className='bg-button rounded-full hover:bg-green-500 py-2 px-8 font-bold text-black'>
                                    Next
                                </div>
                            </button>
                        </div>

                        <div className='mt-6'>
                            {/* Chưa phát triển */}
                            {/* <div className='flex justify-between items-center'>
                            <hr className='w-45-pc'/>
                            <span className='text-sm'>
                                or
                            </span>
                            <hr className='w-45-pc'/>
                        </div>
                        <div>

                        </div> */}
                            <hr className='hr_bg mb-6' />
                            <div className='text-center'>
                                <span className=''>
                                    <span className='element-sidebar'>Already have an account?</span> <Link to={'/login'} className='hover-link underline decoration-2 cursor-pointer'>Log in here</Link>.</span>
                            </div>
                        </div>
                    </div>
                </section>
            }
            {activeStep == 1 &&
                <div className='flex justify-center flex-col'>
                    <Step1 handleBackStep={handleBack} setFormData={setFormData} />
                    <div className='w-full flex justify-center'>
                        <div className=' signup-form-1'>
                            <button onClick={handleNext} className='m-bl-st inline-full h-12 '>
                                <div className='bg-button rounded-full hover:bg-green-500 py-2 px-8 font-bold text-black'>
                                    Next
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            }
            {activeStep == 2 &&
                <div className='flex justify-center flex-col'>
                    <Step2 handleBackStep={handleBack} setFormData={setFormData} />
                    <div className='w-full flex justify-center mt-6'>
                        <div className=' signup-form-1'>
                            <form onSubmit={formSignup.handleSubmit}>
                                <button type='submit' className='m-bl-st inline-full h-12 '>
                                    <div className='bg-button rounded-full hover:bg-green-500 py-2 px-8 font-bold text-black'>
                                        Next
                                    </div>
                                </button>
                            </form>

                        </div>
                    </div>

                </div>
            }
        </div>
    )
}
