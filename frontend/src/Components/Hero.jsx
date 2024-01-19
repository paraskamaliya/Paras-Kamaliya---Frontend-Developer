import shape2 from "../Assets/shape.png"
import shape1 from "../Assets/shape2.png"
import shape3 from "../Assets/shape3.png"
import Home from "../Assets/Home.png";
import { useEffect, useState } from "react";
const Hero = () => {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    return <div className="top-0 w-[100%] z-1">
        <div className="w-[40%] m-auto pt-20">
            <h1 className={`text-white text-8xl font-bold relative z-5 ${animate ? 'animate-hero-left' : ''}`} >YOUR GATEWAY</h1>
            <h1 className={`text-white text-8xl font-bold relative z-5 ${animate ? 'animate-hero-left' : ''}`} >TO</h1>
            <img src={shape2} alt="shape2" className={`w-[10%] top-[30%] left-[62%] absolute pl-50 ${animate ? 'animate-up-down' : ''}`} />
            <img src={Home} alt="home" className={`m-auto z-0 absolute pl-40 top-[26%] ${animate ? 'animate-hero-image' : ''}`} />
            <h1 className={`text-white pt-12 text-8xl font-bold z-0 flex flex-row ${animate ? 'animate-hero-right' : ''}`} >DEFI ON <span className="z-1 text-bitCoinColor">BITCOIN</span></h1>
        </div>
        <img src={shape1} alt="shape1" className={`absolute z-0 top-10 w-[10%] ${animate ? 'animate-up-down' : ''}`} />
        <div className="w-[60%] m-auto p-10 flex flex-col gap-10">
            <div>
                <h1 className={`text-center text-3xl text-loremColor font-normal ${animate ? 'animate-hero-image' : ''}`}>Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse id velit proin eleifend id mauris. Amet sem in id eget nunc quam lacus tellus augue.</h1>
            </div>
            <button className={`rounded-full border border-white m-auto text-black bg-gradient-to-r from-buttonBg to-buttonBg1 flex p-5 font-medium ${animate ? 'animate-hero-image' : ''}`}>Get Started <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M10.5 8.5L14.5 12.5L10.5 16.5" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span></button>
        </div>
        <img src={shape3} alt="" className={`absolute top-[60%] right-0 w-[20%] ${animate ? 'animate-up-down' : ''}`} />
    </div >
}
export default Hero;