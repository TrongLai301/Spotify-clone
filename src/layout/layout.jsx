import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Aside from "../components/Aside/Aside";

const Layout = ({ children }) => {
    return (
        <div className=" flex gap-2 p-2">
            <Sidebar />
            <div className="w-3/4 secondary_bg rounded-lg">
                {children}
            </div>
            <Aside />
        </div>
    )
}

export default Layout;