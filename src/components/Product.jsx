import { LuHeart } from "react-icons/lu";

const Product = ({ image, title, price }) => {
    return (
        <div className="flex flex-col justify-around items-center rounded-sm bg-white divide-y border-2 w-[412px] h-[545px]">
            <img className="w-[322px] h-[310px]" src={image} alt="" />
            <div className="flex justify-between items-center w-[100%] px-4">
                <div className="pt-10">
                    <h4 className="font-bold">${price}</h4>
                    <h5>{title}</h5>
                </div>
                <button className="flex justify-center items-center text-[#0D6EFD] rounded-sm border-[1px] w-[56px] h-[56px]">
                    <LuHeart className="w-[24px] h-[24px]"/>
                </button>
            </div>
            <button className="text-white rounded-md bg-[#0D6EFD] w-[222px] h-[52px]">Command</button>
        </div>
    )
}

export default Product