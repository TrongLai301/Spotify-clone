import React from 'react'
import { CiShare1 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { Logout } from '../../Token/AuthContext';
import "../Home.css"

export default function PopupProfile({ open }) {
    const navigate = useNavigate()
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return (
        open &&
        <div className=''>
            <ul>
                <li className=' rounded-md cursor-pointer hover-li-profile py-3 flex items-center justify-between h-10 pl-3 pr-2 '>
                    <span className='text-sm text-popup font-bold child-text-profile'>Account</span>
                    <CiShare1 className='min-w-4 min-h-4 child-text-profile' />
                </li>
                <li className=' rounded-md cursor-pointer hover-li-profile py-3 flex items-center  h-10 pl-3 pr-2'>
                    <span className='text-sm text-popup font-bold child-text-profile'>Profile</span>
                </li>
                <li className=' rounded-md cursor-pointer hover-li-profile py-3 flex items-center  h-10 pl-3 pr-2'>
                    <span className='text-sm text-popup font-bold child-text-profile'>Settings</span>
                </li>
                <hr className='hr_bg'/>
                <li className=' rounded-md cursor-pointer hover-li-profile py-3 flex items-center  h-10 pl-3 pr-2'>
                    <button onClick={() => { Logout(navigate, currentUser) }}>
                        <span className='text-sm text-popup font-bold child-text-profile'>Log out</span>
                    </button>
                </li>
            </ul>
        </div>

    )
}
