import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const api = import.meta.env.VITE_API_LOCAL_BACKEND;
export default function AuthContext({ children }) {


    return children ? <>{children}</> : <Navigate to="/notFound" />;
}




export async function Logout(navigate, user) {
    console.log(user.accessToken)
    if (user) {
        // Gửi yêu cầu đăng xuất đến server
         axios.post(`${api}logout`, {}, {
            headers: {
                Authorization: `Bearer ${user.accessToken}` // Thêm token vào header
            }
        }).then(() => {
        }).catch(e => {
            console.error(e); // In lỗi ra console
        });
        localStorage.removeItem("currentUser"); 
        navigate("/"); 
    } else {
        navigate("/login"); 
    }
}
