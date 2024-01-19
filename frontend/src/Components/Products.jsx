import line from "../Assets/line.png";
import cart from "../Assets/cart.png";
import coins from "../Assets/coins.png";
import link from "../Assets/link.png";
import rocket from "../Assets/rocket.png";
import coin from "../Assets/coin.png";
import shape from "../Assets/shape.png";
const Products = () => {
    return <div className="pt-[10%] pb-[5%] text-white">
        <div>
            <div className="text-center m-auto">
                <h1 className="text-white text-6xl">Our <span className="text-bitCoinColor">Products</span></h1>
                <img src={line} alt="line" className="absolute left-[50%]" />
            </div>
            <p className="text-white pt-[3%] text-center text-2xl">Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.</p>
        </div>
        <div className="grid pl-[20%] pr-[20%] pt-[5%] gap-10 grid-cols-3 grid-rows-1">
            <div className="border-2 rounded-md border-secondColor border-3 text-center p-5">
                <img src={cart} alt="" className="m-auto" />
                <img src={shape} alt="" className="rotate-180 w-[50%] z-0 hidden" />
                <h3 className="text-xl font-medium">Bita Marketplace</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="172" height="3" viewBox="0 0 172 3" fill="none" className="mt-2 mb-2 m-auto">
                    <path d="M1.5 1.01843H170.5" stroke="#FECC00" stroke-width="2" stroke-linecap="round" />
                </svg>
                <img src={shape} alt="" className="w-[50%] z-0 hidden" />
                <p className="font-light pl-5 pr-5 pb-5">Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
            </div>
            <div className="border-2 rounded-md border-secondColor border-3 text-center p-5">
                <img src={coin} alt="" className="m-auto" />
                <img src={shape} alt="" className="rotate-180 w-[50%] z-0 hidden" />
                <h3 className="text-xl font-medium">Bitadex</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="172" height="3" viewBox="0 0 172 3" fill="none" className="mt-2 mb-2 m-auto">
                    <path d="M1.5 1.01843H170.5" stroke="#FECC00" stroke-width="2" stroke-linecap="round" />
                </svg>
                <img src={shape} alt="" className="w-[50%] z-0 hidden" />
                <p className="font-light pl-5 pr-5 pb-5">Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
            </div>
            <div className="border-2 rounded-md border-secondColor border-3 text-center p-5">
                <img src={link} alt="" className="m-auto" />
                <img src={shape} alt="" className="rotate-180 w-[50%] z-0 hidden" />
                <h3 className="text-xl font-medium">Bitabridge</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="172" height="3" viewBox="0 0 172 3" fill="none" className="mt-2 mb-2 m-auto">
                    <path d="M1.5 1.01843H170.5" stroke="#FECC00" stroke-width="2" stroke-linecap="round" />
                </svg>
                <img src={shape} alt="" className="w-[50%] z-0 hidden" />
                <p className="font-light pl-5 pr-5 pb-5">Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
            </div>
        </div>
        <div className="grid pl-[30%] pr-[30%] pt-[2%] gap-10 grid-cols-2 grid-rows-1">
            <div className="border-2 rounded-md border-secondColor border-3 text-center p-5">
                <img src={rocket} alt="" className="m-auto" />
                <img src={shape} alt="" className="rotate-180 w-[50%] z-0 hidden" />
                <h3 className="text-xl font-medium">Bitapad</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="172" height="3" viewBox="0 0 172 3" fill="none" className="mt-2 mb-2 m-auto">
                    <path d="M1.5 1.01843H170.5" stroke="#FECC00" stroke-width="2" stroke-linecap="round" />
                </svg>
                <img src={shape} alt="" className="w-[50%] z-0 hidden" />
                <p className="font-light pl-5 pr-5 pb-5">Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
            </div>
            <div className="border-2 rounded-md border-secondColor border-3 text-center p-5">
                <img src={coins} alt="" className="m-auto" />
                <img src={shape} alt="" className="rotate-180 w-[50%] z-0 hidden" />
                <h3 className="text-xl font-medium">BitaLend</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="172" height="3" viewBox="0 0 172 3" fill="none" className="mt-2 mb-2 m-auto">
                    <path d="M1.5 1.01843H170.5" stroke="#FECC00" stroke-width="2" stroke-linecap="round" />
                </svg>
                <img src={shape} alt="" className="w-[50%] z-0 hidden" />
                <p className="font-light pl-5 pr-5 pb-5">Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
            </div>
        </div>
    </div>
}
export default Products;