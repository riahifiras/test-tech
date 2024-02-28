import React, { useState } from 'react';
import bg1 from "../assets/bg1.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
        afterChange: (current) => setCurrentSlide(current)
    };

    console.log(currentSlide);

    return (
        <div className="mb-[100px] h-[90vh] translate-y-[100px] p-0 m-0 max-w-[100vw] overflow-hidden">
            <div className="w-screen relative">
                <div className="z-10 absolute top-[44rem] left-40 flex gap-8">
                    <div className={`rounded-[50%] w-[30px] h-[24px] ${currentSlide === 0 ? 'bg-black' : 'bg-[#BABABA]'}`}></div>
                    <div className={`rounded-[50%] w-[30px] h-[24px] ${currentSlide === 1 ? 'bg-black' : 'bg-[#BABABA]'}`}></div>
                    <div className={`rounded-[50%] w-[30px] h-[24px] ${currentSlide === 2 ? 'bg-black' : 'bg-[#BABABA]'}`}></div>
                    <div className={`rounded-[50%] w-[30px] h-[24px] ${currentSlide === 3 ? 'bg-black' : 'bg-[#BABABA]'}`}></div>
                </div>
                <Slider {...settings}>
                    <div className="relative">
                        <img className='w-[100vw] h-auto' src={bg1} alt="Slider Image 1" />
                        <div className="absolute translate-x-44 gap-8 -top-60 left-0 right-0 bottom-0 flex flex-col justify-center items-start">
                            <h3 className="text-[28px]">Latest trending</h3>
                            <h2 className="text-[32px] font-[700]">Electronic items</h2>
                            <button className="bg-white w-[262px] h-[88px] flex justify-center items-center rounded-md text-[16px] font-[500]">Learn more</button>
                        </div>
                    </div>
                    <div className="relative">
                        <img className='w-[100vw] h-auto' src={bg1} alt="Slider Image 1" />
                        <div className="absolute translate-x-44 gap-8 -top-60 left-0 right-0 bottom-0 flex flex-col justify-center items-start">
                            <h3 className="text-[28px]">Latest trending</h3>
                            <h2 className="text-[32px] font-[700]">Electronic items</h2>
                            <button className="bg-white w-[262px] h-[88px] flex justify-center items-center rounded-md text-[16px] font-[500]">Learn more</button>
                        </div>
                    </div>
                    <div className="relative">
                        <img className='w-[100vw] h-auto' src={bg1} alt="Slider Image 1" />
                        <div className="absolute translate-x-44 gap-8 -top-60 left-0 right-0 bottom-0 flex flex-col justify-center items-start">
                            <h3 className="text-[28px]">Latest trending</h3>
                            <h2 className="text-[32px] font-[700]">Electronic items</h2>
                            <button className="bg-white w-[262px] h-[88px] flex justify-center items-center rounded-md text-[16px] font-[500]">Learn more</button>
                        </div>
                    </div>
                    <div className="relative">
                        <img className='w-[100vw] h-auto' src={bg1} alt="Slider Image 1" />
                        <div className="absolute translate-x-44 gap-8 -top-60 left-0 right-0 bottom-0 flex flex-col justify-center items-start">
                            <h3 className="text-[28px]">Latest trending</h3>
                            <h2 className="text-[32px] font-[700]">Electronic items</h2>
                            <button className="bg-white w-[262px] h-[88px] flex justify-center items-center rounded-md text-[16px] font-[500]">Learn more</button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
