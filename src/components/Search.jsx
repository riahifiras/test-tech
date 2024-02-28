import { IoIosArrowDown } from "react-icons/io";

const Search = () => {
  return (
    <div className="flex rounded-md border-2 border-[#0D6EFD]">
        <input placeholder="Search" className="px-4 outline-none w-[421px] h-[40px] rounded-l-md border-r-2 border-[#0D6EFD]" type="text" />
        <div className="w-[145px] flex justify-evenly items-center"><span>All category</span><IoIosArrowDown/></div>
        <button className="w-[100px] bg-[#0D6EFD] text-white">Search</button>
    </div>
  )
}

export default Search