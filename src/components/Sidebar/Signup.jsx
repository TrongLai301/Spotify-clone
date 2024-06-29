import { Link } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
    return (
        <div className="fixed bottom-0 signup_bar text-sm items-center flex px-4 py-2 justify-between">
            <div>
                <p className=" uppercase">preview on spotify</p>
                <p className="font-bold">
                    Sign up to get unlimited Songs and podcasts with occasional
                    ads. No credit card needed
                </p>
            </div>
            <Link to={'/login'}>
                <button className="hover:bg-slate-200 rounded-full text-black mt-2 mb-2 px-8 text-lg  py-2 bg-white font-semibold">
                    Sign Up free
                </button>
            </Link>

        </div>
    );
};

export default Signup;
