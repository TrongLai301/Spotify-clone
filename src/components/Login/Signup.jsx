import React, { useEffect } from 'react'
import { BsSpotify } from "react-icons/bs";
import "./Signup.css"
import "../../assets/CSS/responsive.css"
import { Link } from 'react-router-dom';
import { Button, MobileStepper } from '@mui/material';
import { useTheme } from '@emotion/react';


export default function Signup() {
    useEffect(() => {
        document.body.className = 'signup-page';
        return () => {
            document.body.className = '';
        };
    }, []);
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = (e) => {
        e.preventDefault()
        if (activeStep < 3) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className=''>
            <header className='pt-8 pb-4 flex justify-center items-center'>
                <div className=''>
                    <BsSpotify className='min-w-11 min-h-11' />
                </div>
            </header>
            <div className='flex items-center justify-center'>
                <MobileStepper
                    className='signup-page step'
                    variant="progress"
                    steps={4}
                    position="static"
                    activeStep={activeStep}
                    sx={{ maxWidth: 800, flexGrow: 1 }}
                />
            </div>
            <section className='flex justify-center w-full pb-0 '>
                <div className='px-8 box-content signup-form'>
                    <header className='mb-10 '>
                        <h1 className=' font-bold text-center text-header space-text'>Sign up to start listening</h1>
                    </header>
                    <form action="">
                        <div className='mb-2'>
                            <label htmlFor="email" className='font-bold text-base'>Email address</label>
                        </div>
                        <div className='input-border '>
                            <input type="text" id="email" className="inline-full py-3 px-4 text-base secondary_bg" placeholder='name@domain.com' />
                        </div>
                        <button onClick={handleNext} className='m-bl-st inline-full h-12 '>
                            <div className='bg-button rounded-full hover:bg-green-500 py-2 px-8 font-bold text-black'>
                                Next
                            </div>
                        </button>
                    </form>
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
        </div>
    )
}
