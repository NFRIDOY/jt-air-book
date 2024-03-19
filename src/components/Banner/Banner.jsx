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
                <div className="bg-white py-5 lg:py-[47px] lg:px-[53px] space-y-[14px] ">
                    <div className="btns flex justify-between gap-x-[14px] z-50 ">
                        <div className="space-x-[14px]">
                            <button className="btn btn-sm">One way</button>
                            <button className="bgb btn btn-sm">Round Trip</button>
                        </div>
                        <div className="space-x-[14px]">
                            <button className="textb btn btn-sm">1 Traveller</button>
                            <button className="textb btn btn-sm">Economy</button>
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
