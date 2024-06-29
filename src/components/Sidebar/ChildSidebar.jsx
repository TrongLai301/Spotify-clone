import React from 'react'
import { TbWorld } from "react-icons/tb";


export default function ChildSidebar() {
    return (
        <div>
            <div className="px-2 mb-2 mt-2 flex min-height-sidebar gap-2 flex-col">
                <div className="leading-8 mt-2 third_bg rounded-lg py-6 px-4">
                    <p className="font-bold">Create your first playlist</p>
                    <p className="font-semibold">
                        It's easy, we'll help you
                    </p>
                    <button className="hover:scale-105 hover:bg-slate-200 rounded-full text-black mt-4 px-4 py-0 bg-white font-semibold">
                        Create playlist
                    </button>
                </div>
                <div className="leading-8 mt-4 third_bg rounded-lg py-6 px-4">
                    <p className="font-bold">
                        Let's find some podcasts to follow
                    </p>
                    <p className="font-semibold">
                        We'll keep you updated on new episodes
                    </p>
                    <button className="hover:scale-105 hover:bg-slate-200  rounded-full text-black mt-4 px-4 py-0 bg-white font-semibold">
                        Browse Podcast
                    </button>
                </div>
            </div>
            <div className="mt-8 px-4 gap-4 flex flex-wrap  mb-2">
                <a className="text-xs text-gray-300 mx-4" href="#">
                    Legal
                </a>
                <a className="text-xs text-gray-300 mx-4" href="#">
                    Privacy Center
                </a>
                <a className="text-xs text-gray-300 mx-4" href="#">
                    Privacy Policy
                </a>
                <a className="text-xs text-gray-300 mx-4" href="#">
                    Cookies
                </a>
                <a className="text-xs text-gray-300 mx-4" href="#">
                    About Ads
                </a>
                <a className="text-xs text-gray-300 mx-4" href="#">
                    Accessibility
                </a>
            </div>
            <button className="mx-4 mt-12 mb-12 text-sm border-white border rounded-full flex gap-2 px-3 py-1 items-center  text-white ">
                <TbWorld />
                <span className="text-white font-bold">English</span>
            </button>
        </div>
    )
}
