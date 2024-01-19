import logo from "../Assets/logo.png";
const Navbar = () => {
    return <div className="flex justify-between items-center bg-Navbar border border-NavbarBorder px-4 py-8 px-4 py-8 ml-10 mr-10 mt-10 mb-0 rounded-2xl bg-gradient-to-r from-right to-left h-22 gap-2 sticky top-10 z-100 backdrop-filter backdrop-blur-md">
        <div className="w-[50%]">
            <img src={logo} alt="logo" className="h-14" />
        </div>
        <div className="w-[50%] flex justify-between items-center">
            <a href="#" className="text-xl font-medium text-white">About</a>
            <a href="#" className="text-xl font-medium text-white">Our Products</a>
            <a href="#" className="text-xl font-medium text-white">Token Utility</a>
            <a href="#" className="text-xl font-medium text-white">Roadmap</a>
            <button className="bg-mainButton text-xl rounded-2xl p-4 font-medium">Connect Wallet</button>
        </div>
    </div>
}
export default Navbar;