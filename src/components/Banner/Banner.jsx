import BannerImg from "../../assets/banner.png"
import { IoSearchOutline } from "react-icons/io5";

export default function Banner() {
    return (
        <div className="-z-50 relative">
            <div className="">
                <img src={BannerImg} alt="" />
            </div>
            <div className="lg:absolute top-10 left-0 lg:top-[calc(15vh)] lg:left-[calc(25vh)] flex lg:justify-center lg:gap-y-6 flex-col items-center lg:items-start">
                <h1 className="lg:text-white text-4xl text-black lg:text-[40px] font-medium">
                    Welcome to <span className="text-[#006CE4]">AirBook</span>
                </h1>
                <div className="bg-white py-5 px-2 lg:py-[47px] lg:px-[53px] space-y-[14px] ">
                    <div className="btns flex justify-between space-x-1 lg:space-x-[14px] lg:gap-x-[14px] z-50 text-xs">
                        <div className="space-x-1 lg:space-x-[14px] flex ">
                            <button className="btn btn-sm">
                                <span className="hidden lg:block">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="7.4" stroke="#1E1E1E" strokeOpacity="0.28" strokeWidth="1.2" />
                                    </svg>
                                </span>
                                One way
                            </button>
                            <button className="bgb btn btn-sm">
                                <span className="hidden lg:block">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <circle cx="8" cy="8" r="7.4" stroke="white" strokeWidth="1.2" />
                                        </g>
                                    </svg>
                                </span>
                                Round Trip
                            </button>
                        </div>
                        <div className="space-x-1 lg:space-x-[14px] flex ">
                            <button className="textb btn btn-sm">1 Traveller
                                <span className="hidden lg:block">
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.32 0.18L7.32 2.34L3.915 5.79L0.51 2.34L0.51 0.18L3.915 3.645L7.32 0.18Z" fill="#006CE4" />
                                    </svg>
                                </span>
                            </button>
                            <button className="textb btn btn-sm">Economy
                                <span className="hidden lg:block">
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.32 0.18L7.32 2.34L3.915 5.79L0.51 2.34L0.51 0.18L3.915 3.645L7.32 0.18Z" fill="#006CE4" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:gap-x-[14px] space-y-[14px] lg:space-y-0">
                        <div className="text-black flex flex-col lg:flex-row space-y-[14px] lg:space-y-0 lg:space-x-[14px] *:w-full lg:*:w-[257px] *:h-fit">
                            <div className="border-2 rounded-lg flex divide-x-[3px] font-semibold text-sm w-fit py-[11px] px-[18px] gap-x-3">
                                <div className="flex items-center ">DAC</div>
                                <div className="pl-3">
                                    <h2 className="font-medium">Dhaka</h2>
                                    <h3 className="font-normal">Hazrat Shahjalal Internatio</h3>
                                </div>
                            </div>
                            <div className="border-2 rounded-lg flex divide-x-[3px] font-semibold text-sm w-fit py-[11px] px-[18px] gap-x-3">
                                <div className="flex items-center ">Cxb</div>
                                <div className="pl-3">
                                    <h2 className="font-medium">Cox’s Bazar</h2>
                                    <h3 className="font-normal">Cox’s Bazar international</h3>
                                </div>
                            </div>
                            <div className="border-2 rounded-lg flex divide-x-[3px] font-semibold text-sm w-fit py-[11px] px-[18px] gap-x-3">
                                <div className="flex items-center ">03</div>
                                <div className="pl-3">
                                    <h2 className="font-medium">October</h2>
                                    <h3 className="font-normal">tuesday, 2023</h3>
                                </div>
                            </div>
                            <div className="border-2 rounded-lg flex divide-x-[3px] font-semibold text-sm w-fit py-[11px] px-[18px] gap-x-3">
                                <div className="flex items-center ">05</div>
                                <div className="pl-3">
                                    <h2 className="font-medium">October</h2>
                                    <h3 className="font-normal">tuesday, 2023</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border-0 ">
                            <button className="btn-warning bg-[#FFB700] text-white btn h-full w-full  lg:w-[74px]  text-3xl">
                                <IoSearchOutline />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
