import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Product from './Product'
import ph1 from "../assets/ph1.png"
import ph2 from "../assets/ph2.png"
import ph3 from "../assets/ph3.png"
import ph4 from "../assets/ph4.png"
import ph5 from "../assets/ph5.png"
import ph6 from "../assets/ph6.png"
import ph7 from "../assets/ph7.png"

const Products = () => {
  // Define an array of products
  const products = [
    { image: ph1, title: "GoPro HERO6 4K Action Camera - Black", price: "99.50" },
    { image: ph2, title: "GoPro HERO7 4K Action Camera - Black", price: "99.50" },
    { image: ph3, title: "GoPro HERO8 4K Action Camera - Black", price: "99.50" },
    { image: ph4, title: "GoPro HERO9 4K Action Camera - Black", price: "99.50" },
    { image: ph5, title: "GoPro HERO10 4K Action Camera - Black", price: "99.50" },
    { image: ph2, title: "GoPro HERO7 4K Action Camera - Black", price: "99.50" },
    { image: ph6, title: "GoPro HERO11 4K Action Camera - Black", price: "99.50" },
    { image: ph7, title: "GoPro HERO12 4K Action Camera - Black", price: "99.50" },
    { image: ph1, title: "GoPro HERO6 4K Action Camera - Black", price: "99.50" },
  ];

  return (
    <div className='w-[67vw] mx-auto flex flex-col justify-center items-center pt-[40px]'>
      <div className='w-full h-[160px]'>
        <h1 className='text-[64px] font-[700]'>Our Products</h1>
        <h3 className='text-[28px] font-[400]'>Latest trending</h3>
      </div>
      <div className='grid grid-cols-3 grid-rows-3 gap-[28px]'>
        {products.map((product, index) => (
          <Product key={index} image={product.image} title={product.title} price={product.price} />
        ))}
      </div>
      <div className='w-full flex justify-end h-[80px] items-center'>
        <div className='flex border-2 rounded-md divide-x'>
          <button className='w-[44px] h-[40px] bg-white flex justify-center items-center'><IoIosArrowBack/></button>
          <button className='w-[44px] h-[40px] bg-white flex justify-center items-center'>1</button>
          <button className='w-[44px] h-[40px] bg-white flex justify-center items-center'>2</button>
          <button className='w-[44px] h-[40px] bg-white flex justify-center items-center'>3</button>
          <button className='w-[44px] h-[40px] bg-white flex justify-center items-center'><IoIosArrowForward/></button>
        </div>
      </div>
    </div>
  )
}

export default Products;
