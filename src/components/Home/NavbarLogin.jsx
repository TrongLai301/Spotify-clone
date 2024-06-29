import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logout } from '../Token/AuthContext';
import { IoMdNotificationsOutline } from "react-icons/io";
import PopupProfile from './Popup/PopupProfile';


export default function NavbarLogin() {
    const [openProfile, setOpenProfile] = useState(false);

    const handleOpenProfile = () =>{
        setOpenProfile(!openProfile)
    }
    
    return (
        <div className='flex items-center gap-2 '>
            <button className='hover:scale-110 white-icon-hover h-8 w-8 button-bg-1 rounded-full flex items-center justify-center'>
                <IoMdNotificationsOutline className='min-w-5 min-h-5 element-sidebar child' />
            </button>
            <div className=''>
                <button onClick={() =>{handleOpenProfile()}} className=' relative hover:scale-105 h-10 w-10 button-profile button-bg-1 rounded-full flex justify-center items-center'>
                    <img src="src\assets\image\nilou.jpg" alt="" className='h-7 w-7 rounded-full' />
                </button>
                {openProfile &&
                    <div className='bg-popup-profile p-2 absolute z-10 popup'>
                        <PopupProfile open={openProfile} />
                    </div>
                }
            </div>
        </div>
    )
}
