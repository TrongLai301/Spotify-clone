import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarNotLogin() {
    return (
        <div className="flex gap-2">
            <div className=" flex items-center pr-2 h-14">
                <Link to={'/signup'}>
                    <button className="py-2 pl-2 pr-6 hover-scale hover-text-white">
                        <span className="font-bold element-sidebar hover-text-white-span">
                            Sign up
                        </span>
                    </button>
                </Link>
                <Link to={'/login'}>
                    <div className="w-32 h-14 flex gap-0 justify-center items-center ">
                        <button className="h-10 px-8 flex items-center py-3 text-black hover:scale-105 bg-white rounded-full">
                            <span className="font-bold">
                                Login
                            </span>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    )
}
