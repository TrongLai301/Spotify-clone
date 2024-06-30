import React, { useState } from "react";
import { GoHomeFill, GoHome, GoArrowRight } from "react-icons/go";
import { CgSearch } from "react-icons/cg";
import { BiLibrary } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { FaSpotify } from "react-icons/fa6";
import Layout from "../../layout/layout";
import "./Sidebar.css"
import Signup from "./Signup";
import ChildSidebar from "./ChildSidebar";

const Sidebar = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var login;
    if (currentUser) {
        login = true;
    } else {
        login = false
    }


    return (
        <div className="w-1/4 min-width-sidebar">
            <nav className="flex flex-col gap-2">
                <div className="secondary_bg px-3 py-2 rounded-lg">
                    <ul>
                        {/* DOESN'T LOGIN */}
                        <li className="py-1 px-3">
                            <a href="#" className={`flex items-center h-10 gap-1 hover-sidebar`} >
                                <FaSpotify className="min-w-7 min-h-7 " />
                                <span className="font-bold whitespace-nowrap">Spotify</span>
                            </a>
                        </li>
                        <li className="py-1 px-3">
                            <a href="/" className={`flex items-center h-10 gap-5 hover-sidebar`} >
                                <GoHomeFill className="min-w-7 min-h-7 " />
                                <span className="font-bold whitespace-nowrap">Home</span>
                            </a>
                        </li>
                        <li className="py-1 px-3">
                            <a href="#" className={`flex items-center h-10 gap-5 hover-sidebar`} >
                                <CgSearch className="min-w-7 min-h-7 " />
                                <span className="font-bold whitespace-nowrap">Search</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className=" secondary_bg rounded-lg">
                    <header className="px-6 py-2">
                        <div className="flex items-center h-10 justify-between">
                            <div className="flex items-center  hover-sidebar ps-1 pr-2 py-1 h-10">
                                <button className="flex gap-5">
                                    <BiLibrary className="min-w-7 min-h-7 " />
                                    <span className="font-bold whitespace-nowrap">Your Library</span>
                                </button>
                            </div>
                            <div className="flex gap-4">
                                <div className=" cursor-pointer flex items-center justify-center plus-arrow-hover rounded-full w-8 h-8">
                                    <FiPlus className="  min-w-6 min-h-6 element-sidebar" />
                                </div>

                                {/* OPEN WHEN LOGIN */}

                                {/* <div className="cursor-pointer flex plus-arrow-hover items-center justify-center rounded-full w-8 h-8">
                                    <GoArrowRight className=" min-w-6 min-h-6 element-sidebar" />
                                </div> */}

                            </div>
                        </div>
                    </header>

                    {/* PLAYLISTS - ARTISTS */}
                    {/* <div className=" w-1/2 h-12 relative pl-2">
                        <div className="mx-4 my-2 h-8 absolute">
                            <div className="h-8">
                                <div className="flex">
                                    <div className="mr-2">
                                        <button className="hover-button rounded-full p-1 h-full">
                                            <span className="span-chosse font-semibold text-sm p-3">PLaylists</span>
                                        </button>
                                    </div>
                                    <div>
                                        <button className="hover-button rounded-full p-1 h-full">
                                            <span className="span-chosse font-semibold text-sm p-3">Artists</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div>
                        {/* SEARCH - RECENT */}
                        {/* <div className="px-6 py-2 flex justify-between items-center">
                            <div className="relative cursor-pointer plus-arrow-hover rounded-full w-8 h-8 ">
                                <CgSearch className=" min-w-5 min-h-5 element-sidebar absolute top-1.5 right-1.5" />
                            </div>
                            <div className="flex gap-2 items-center enlarge cursor-pointer">
                                <span className="element-sidebar enlarge-child text-sm">Recent</span>
                                <FaList className=" min-w-4 min-h-4 enlarge-child element-sidebar" />
                            </div>
                        </div> */}
                        {/* LIST - NOT LOGIN */}
                        {/* <div className="mt-2 secondary_bg rounded-lg p-6">

                        </div> */}
                        {!login &&
                            <ChildSidebar />
                        }
                        {!login &&
                            <Signup />
                        }
                        {/* LIST - LOGIN */}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;