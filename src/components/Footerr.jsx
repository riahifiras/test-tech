import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import ios from "../assets/ios.png"
import android from "../assets/android.png"
import logo from "../assets/logo-colored.png"

const Footerr = () => {
    return (
        <>
            <div className="flex items-center justify-center h-[324px] bg-white">
                <div className="flex flex-row w-[64%] justify-between bg-white items-center">
                    <div className="flex flex-col justify-between items-start h-[157px] w-[276px]">
                        <img src={logo} alt="" />
                        <p>Best information about the company gies here but now lorem ipsum is</p>
                        <ul className="flex w-[200px] justify-between items-center">
                            <li className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-[#BDC4CD] text-white"><button><FaFacebookF /></button></li>
                            <li className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-[#BDC4CD] text-white"><button><FaTwitter /></button></li>
                            <li className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-[#BDC4CD] text-white"><button><FaLinkedin /></button></li>
                            <li className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-[#BDC4CD] text-white"><button><FaInstagram /></button></li>
                            <li className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-[#BDC4CD] text-white"><button><FaYoutube /></button></li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-[16px] gap-2">
                        <h4 className="font-[500]">About</h4>
                        <nav className="flex flex-col">
                            <a className="font-[400] text-[#8B96A5]" href="">About Us</a>
                            <a className="font-[400] text-[#8B96A5]" href="">Find store</a>
                            <a className="font-[400] text-[#8B96A5]" href="">Categories</a>
                            <a className="font-[400] text-[#8B96A5]" href="">Blogs</a>
                        </nav>
                    </div>
                    <div className="flex flex-col text-[16px] gap-2">
                        <h4 className="font-[500]">Partnership</h4>
                        <nav className="flex flex-col">
                            <a className="font-[400] text-[#8B96A5]" href="">About Us</a>
                            <a className="font-[400] text-[#8B96A5]" href="">Find store</a>
                            <a className="font-[400] text-[#8B96A5]" href="">Categories</a>
                            <a className="font-[400] text-[#8B96A5]" href="">Blogs</a>
                        </nav>
                    </div>
                    <div className="flex flex-col text-[16px] gap-2">
                        <h4 className="font-[500]">Information</h4>
                        <nav className="flex flex-col">
                            <a className="font-[400] text-[#8B96A5]" href="">Help Center</a>
                            <a className="font-[400] text-[#8B96A5]" href="">Money Refund</a>
                            <a className="font-[400] text-[#8B96A5]" href="">Shipping</a>
                            <a className="font-[400] text-[#8B96A5]" href="">Contact us</a>
                        </nav>
                    </div>
                    <div className="flex flex-col text-[16px] gap-2">
                        <h4 className="font-[500]">For users</h4>
                        <nav className="flex flex-col">
                            <a className="font-[400] text-[#8B96A5]" href="">Login</a>
                            <a className="font-[400] text-[#8B96A5]" href="">Register</a>
                            <a className="font-[400] text-[#8B96A5]" href="">Settings</a>
                            <a className="font-[400] text-[#8B96A5]" href="">My Order</a>
                        </nav>
                    </div>
                    <div className="flex flex-col text-[16px] gap-2">
                        <h4 className="font-[500]">Get app</h4>
                        <div className="flex flex-col gap-2">
                            <button><img className="w-[124px] h-[42px]" src={ios} alt="" /></button>
                            <button><img className="w-[124px] h-[42px]" src={android} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center h-[68px] bg-[#DEE2E7] text-[#606060] w-full">
                <p className="w-[64%]">© 2023 Ecommerce. </p>
            </div>
        </>
    )
}

export default Footerr