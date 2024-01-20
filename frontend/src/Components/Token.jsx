import line from "../Assets/line.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Token = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const fetchTheData = async () => {
        setLoad(true);
        try {
            let res = await fetch(`https://bitcoin-xaie.onrender.com/coin`, {
                method: "GET"
            })
            let data = await res.json();
            setData(data.slice(0, 6));
            setLoad(false);
        } catch (error) {
            setLoad(false);
            console.log(error);
        }
    }
    useEffect(() => {
        fetchTheData();
    }, [])
    return <motion.div className="pt-[10%] pb-[5%] text-white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 5, duration: 1.5 }}>
        <div>
            <div className="text-center m-auto">
                <h1 className="text-white text-6xl">Our <span className="text-bitCoinColor">Tokens</span></h1>
                <img src={line} alt="line" className="absolute left-[50%]" />
            </div>
            <p className="text-white pt-[3%] text-center text-2xl">Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.</p>
        </div>
        {load && <h1 className="text-4xl text-bitCoinColor text-center mt-10">Loading...</h1>}
        <div className="grid grid-cols-3 w-[70%] m-auto gap-10 pt-[5%]">
            {data.length > 0 && data.map((el) => {
                return <div className="w-[100%] border p-[5%] rounded-md border-bitCoinColor" key={el._id}>
                    <img src={el.img} alt="bit" className="w-[30%] m-auto" />
                    <h1 className="w-[70%] m-auto text-2xl font-normal">{el.tokenName}</h1>
                    <div className="grid grid-cols-2 w-fit m-auto">
                        <p className="text-xl font-light">Symbol</p>
                        <p className="text-xl font-light">{el.symbol.toUpperCase()}</p>
                        <p className="text-xl font-light">Decimals</p>
                        <p className="text-xl font-light">{el.decimals}</p>
                        <p className="text-xl font-light">Market Cap</p>
                        <p className="text-xl font-light">{el.marketcap}</p>
                        <p className="text-xl font-light">Chain</p>
                        <p className="text-xl font-light">{el.chain}</p>
                    </div>
                    <button className="rounded-full border border-white m-auto text-black bg-gradient-to-r from-buttonBg to-buttonBg1 flex p-3 font-medium mt-2">Details <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M10.5 8.5L14.5 12.5L10.5 16.5" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></span></button>
                </div>
            })}
        </div>
        <div className="flex gap-[5%] align-middle self-center pt-[5%] justify-center items-center">
            <button className="p-3 bg-white text-black rounded-md font-normal w-[100px]">Previous</button>
            <p>Page 1 of 10</p>
            <button className="p-3 bg-white text-black rounded-md font-normal w-[100px]">Next</button>
        </div>
    </motion.div>
}
export default Token;