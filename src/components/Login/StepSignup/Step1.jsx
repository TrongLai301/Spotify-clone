import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import FormSignUp from '../Form/FormSignUp';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import "./Step.css"
export default function Step1({email , handleBackStep }) {
    const [hasLetter, setHasLetter] = useState(false);
    const [input, setInput] = useState(false);
    const [hasNumberOrSpecial, setHasNumberOrSpecial] = useState(false);
    const [hasTenCharacters, setHasTenCharacters] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const onChangePass = (e) => {
        console.log(e.target.value)
        setHasLetter(/[a-zA-Z]/.test(e.target.value));
        setHasNumberOrSpecial(/.|[0-9]/.test(e.target.value));
        setHasTenCharacters(e.target.value.length >= 10);
    };
    return (
        <div className='flex justify-center w-full pb-0'>
            <div className='step-w '>
                <div>
                    <div className='flex items-center'>
                        <div className='flex justify-center items-center w-arrstep'>
                            <button onClick={handleBackStep} className='hover-sidebar'>
                                <IoIosArrowBack className='min-h-8 min-w-8' />
                            </button>
                        </div>
                        <div className='flex flex-col'>
                            <span className=' element-sidebar'>Step 1 of 2</span>
                            <span className='font-bold text-base'>Create a password</span>
                        </div>
                    </div>
                    <div className='step-w flex justify-center '>
                        <div className='signup-form-1'>
                            <div>
                                <div className='mb-2 mt-4'>
                                    <label htmlFor="password" className='font-bold text-sm'>Password</label>
                                </div>
                                <div className='input-border relative eye-hover'>
                                    <input
                                        name='password'
                                        type={showPassword ? `text` : `password`}
                                        id="password" className="pr-10 inline-full py-3 px-4 text-base secondary_bg"
                                        placeholder='Password'
                                        onChange={onChangePass}
                                        onBlur={(e) => setInput(e.target.value)}
                                    />
                                    <div className=' absolute pass cursor-pointer ' onClick={() => { handleShowPassword() }}>
                                        {showPassword ? <FaEye className='min-h-5 min-w-5 element-sidebar eye' /> : <FaEyeSlash className='min-h-5 min-w-5 element-sidebar eye' />}
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <span className='font-bold text-sm'>
                                        Your password must contain at least
                                    </span>
                                    <ul>
                                        <li className='flex mt-2 items-center'>
                                            {hasLetter ? <IoIosCheckmarkCircle className='checkPass' /> : <FaRegCircle />}
                                            <span className='text-sm ml-2'>1 letter</span>
                                        </li>
                                        <li className='flex mt-2 items-center'>
                                            {hasNumberOrSpecial ? <IoIosCheckmarkCircle className='checkPass' /> : <FaRegCircle />}
                                            <span className='text-sm ml-2'>1 number or specical character (example: # ? !&)</span>
                                        </li>
                                        <li className='flex mt-2 items-center'>
                                            {hasTenCharacters ? <IoIosCheckmarkCircle className='checkPass' /> : <FaRegCircle />}
                                            <span className='text-sm ml-2'>10 characters</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
