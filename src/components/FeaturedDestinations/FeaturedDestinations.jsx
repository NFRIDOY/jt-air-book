import f1 from "../../assets/f1.png"
import f2 from "../../assets/f2.png"
import f3 from "../../assets/f3.png"

export default function FeaturedDestinations() {
    return (
        <div className="lg:mx-[159px] mt-[100px] mx-auto">
            <h1 className="font-semibold text-[32px] mb-[50px]">
                Featured Destinations
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 max-w-[1200px] mx-auto w-full">
                {/* <div className="flex flex-col items-center space-y-[27px] w-[360px] font-bold text-lg">
                    <div>
                        <img className="w-[339px] h-[229px] rounded-[10px]" src={f1} alt="" />
                    </div>
                    <h1>
                        Stopover opportunity in İstanbul with Turkish Airlines
                    </h1>
                    <div className="btn bg-[#FFB700] w-[200px] font-medium">
                        View More
                    </div>
                </div> */}
                <div className="card lg:w-[339px]  shadow-2xl px-2 pt-1">
                    <figure className="rounded-xl">
                        <img className=" rounded-xl" src={f1} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center px-3 pt-[27px] pb-5">
                        <p className="font-bold text-lg text-left">
                            Stopover opportunity in İstanbul with Turkish Airlines
                        </p>
                        <div className="card-actions pt-[27px] pb-0 mb-0">
                            <div className="btn bg-[#FFB700] w-[200px] font-medium text-[15px]">
                                View More
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-[339px]  shadow-2xl px-2 pt-1">
                    <figure className="rounded-xl">
                        <img className=" rounded-xl" src={f2} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center px-3 pt-[27px] pb-5">
                        <p className="font-bold text-lg text-left">Discover the timeless city with Touristanbul of Turkish Airlines </p>
                        <div className="card-actions pt-[27px]">
                            <div className="btn bg-[#FFB700] w-[200px] font-medium">
                                View More
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-[339px]  shadow-2xl px-2 pt-1">
                    <figure className="rounded-xl">
                        <img className=" rounded-xl" src={f3} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center px-3 pt-[27px] pb-5">
                        <p className="font-bold text-lg text-left">
                            The best of Abu Dhabi with exclusive Etihad Airways!
                        </p>
                        <div className="card-actions pt-[27px]">
                            <div className="btn bg-[#FFB700] w-[200px] font-medium">
                                View More
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
