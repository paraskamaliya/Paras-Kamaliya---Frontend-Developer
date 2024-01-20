import circle from "../Assets/circle.png";
import email from "../Assets/Facebook.png";
import twitter from "../Assets/Behance.png";
import instagram from "../Assets/Instagram.png";
import logo from "../Assets/logo yellow.png";
import { useEffect, useState } from "react";
const Footer = () => {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    return <div className="text-white bg-Navbar">
        <img src={circle} alt="" className={`absolute w-[20%] z-0 ${animate ? 'animate-up-down' : ''}`} />
        <div className="p-[10%] relative z-10">
            <div className="p-[5%] border-4 border-solid bg-black border-bitCoinColor rounded-3xl justify-between flex align-middle items-center">
                <div>
                    <h1 className="text-5xl font-medium font-sarif">Join our <br /><span className="text-bitCoinColor">Community</span></h1>
                </div>
                <div className="flex gap-3">
                    <a href="#">
                        <img src={email} alt="email" />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="twitter" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="instagram" />
                    </a>
                </div>
            </div>
            <div className="text-center p-2">
                <img src={logo} alt="" className="m-auto" />
                <p className="text-3xl font-light">2023 All rights reserved</p>
            </div>
        </div>
    </div>
}
export default Footer;