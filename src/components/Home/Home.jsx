import React from "react";
import Layout from "../../layout/layout";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import NavbarLogin from "./NavbarLogin";
import NavbarNotLogin from "./NavbarNotLogin";
import { useNavigate } from "react-router-dom";
import "./Home.css"


const Home = () => {
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var login;
    if (currentUser) {
        login = true;
    } else {
        login = false
    }

    return <Layout>
        <header className="h-16 mt-2 flex items-center">
            <div className="w-full h-14 px-6 flex justify-between items-center">
                <div className="flex gap-2">
                    <button className="h-8 w-8 flex items-center justify-center rounded-full button-bg-1">
                        <IoIosArrowBack className="min-w-6 min-h-6 element-sidebar" />
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-full button-bg-1 ">
                        <IoIosArrowForward className="min-w-6 min-h-6 element-sidebar" />
                    </button>
                </div>
                {login ?
                    <NavbarLogin />
                    :
                    <NavbarNotLogin />}
            </div>
        </header>
    </Layout>;
};

export default Home;