import Search from "./Search"
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

import pic from "../assets/logo-colored.png"

const Navbar = () => {
  return (
    <div className="flex bg-white h-[86px] w-full fixed left-0 top-0 z-20 justify-around items-center">
        <img className="w-[150px] h-[46px]" src={pic} alt="" />
        <Search/>
        <nav className="flex justify-between text-gray-500 w-[228px] h-[41px]">
            <div className="flex flex-col items-center">
                <IoPerson className="w-[20px] h-auto"/>
                <p className="text-[12px]">Profile</p>
            </div>
            <div className="flex flex-col items-center">
                <MdMessage className="w-[20px] h-auto"/>
                <p className="text-[12px]">Message</p>
            </div>
            <div className="flex flex-col items-center">
                <FaHeart className="w-[20px] h-auto"/>
                <p className="text-[12px]">Orders</p>
            </div>
            <div className="flex flex-col items-center">
                <IoCart className="w-[20px] h-auto"/>
                <p className="text-[12px]">My cart</p>
            </div>
        </nav>
    </div>
  )
}

export default Navbar