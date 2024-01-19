const Roadmap = () => {
    return <div className="text-white 2xl-[100%]">
        <div className="bg-bitCoinColor p-[5%]">
            <h1 className="text-black text-5xl font-bold">Roadmap</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="177" height="20" viewBox="0 0 177 20" fill="none" className="absolute left-[8%]">
                <path d="M0.551003 18.3865C48.1951 6.09829 115.064 -0.428688 176.712 2.97441" stroke="#515151" stroke-width="3" />
            </svg>
            {/* <div className="flex flex-row mt-[5%] gap-[10%] overflow-x-hidden"> */}
            <div className="grid grid-flow-col scroll-auto gap-[5%] overflow-y-auto overflow-x-visible mt-[5%] scroll-container">
                <div className="text-center border border-black rounded-2xl bg-black scroll-snap-align-start">
                    <h2 className="text-2xl w-fit m-auto bg-bitCoinColor text-black font-medium">PHASE-1</h2>
                    <div className="ml-[10%] mr-[10%] mb-[10%] p-[10%] border rounded-2xl border-bitCoinColor">
                        <h2 className="font-medium text-2xl">Initial Design and Development</h2>
                        <h2 className="m-2 text-2xl font-light">Q4 2023</h2>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                    </div>
                </div>
                <div className="text-center border border-black rounded-2xl bg-black scroll-snap-align-start">
                    <h2 className="text-2xl w-fit m-auto bg-bitCoinColor text-black font-medium">PHASE-2</h2>
                    <div className="ml-[10%] mr-[10%] mb-[10%] p-[10%] border rounded-2xl border-bitCoinColor">
                        <h2 className="font-medium text-2xl">Release and Testing of Bita Market & Bridge</h2>
                        <h2 className="m-2 text-2xl font-light">Q1 2024</h2>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                    </div>
                </div>
                <div className="text-center border border-black rounded-2xl bg-black scroll-snap-align-start">
                    <h2 className="text-2xl w-fit m-auto bg-bitCoinColor text-black font-medium">PHASE-3</h2>
                    <div className="ml-[10%] mr-[10%] mb-[10%] p-[10%] border rounded-2xl border-bitCoinColor">
                        <h2 className="font-medium text-2xl">Bitapad & <br /> Rollout</h2>
                        <h2 className="m-2 text-2xl font-light">Q2 2024</h2>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                    </div>
                </div>
                <div className="text-center border border-black rounded-2xl bg-black scroll-snap-align-start">
                    <h2 className="text-2xl w-fit m-auto bg-bitCoinColor text-black font-medium">PHASE-4</h2>
                    <div className="ml-[10%] mr-[10%] mb-[10%] p-[10%] border rounded-2xl border-bitCoinColor">
                        <h2 className="font-medium text-2xl">Launch of <br /> NakaLend</h2>
                        <h2 className="m-2 text-2xl font-light">Q3 2024</h2>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Roadmap;