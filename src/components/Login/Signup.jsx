import React, { useEffect } from 'react'
import { BsSpotify } from "react-icons/bs";
import "./Signup.css"
import "../../assets/CSS/responsive.css"


export default function Signup() {
    useEffect(() => {
        document.body.className = 'signup-page';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <div className=''>
            <header className='pt-8 pb-4 flex justify-center items-center'>
                <div className=''>
                    <BsSpotify className='min-w-11 min-h-11' />
                </div>
            </header>
            <section className='flex justify-center w-full pb-0 '>
                <div className='px-8 box-content signup-form'>
                    <header className='mb-10 '>
                        <h1 className=' font-bold text-center text-header space-text'>Sign up to start listening  </h1>
                    </header>
                    <form action="">
                        <div className='mb-2'>
                            <label htmlFor="email" className='font-bold text-base'>Email address</label>
                        </div>
                        <div>
                            <input type="text" id="email" className="inline-full py-3 px-4 rounded-sm text-base secondary_bg border-gray-500 border" placeholder='name@domain.com' />
                        </div>
                        <button className='m-bl-st inline-full h-12 '>
                            <div className='bg-button rounded-full py-2 px-8 font-bold text-black'>
                                Next
                            </div>
                        </button>
                    </form>
                    <div>
                        <div className='hr-before'>
                            <span>
                                or
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
