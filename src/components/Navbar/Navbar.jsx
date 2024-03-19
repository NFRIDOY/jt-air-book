
export default function Navbar() {
    return (
        <div className=" flex justify-center w-screen z-50">
            <div className="navbar  z-50  max-w-[1200px] min-w-10 lg:min-w-[1200px] bg-white mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 *:font-medium text-lg">
                            <li><a>Blog</a></li>
                            <li><a>Offer</a></li>
                            <li><a>Airlines</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <a className=" text-xl">
                        <div className="flex justify-center items-center gap-x-2">
                            <div>
                                <svg width="36" height="51" viewBox="0 0 36 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.1662 12.0698H28.5569V5.09345C28.5569 3.39564 27.1729 2.01164 25.4751 2.01164H24.4934V0.402344H25.4751C28.062 0.402344 30.1662 2.5065 30.1662 5.09345V12.0698Z" fill="url(#paint0_linear_1048_85)" />
                                    <path d="M7.43889 12.0698H5.82959V5.09345C5.82959 2.5065 7.93375 0.402344 10.5207 0.402344H11.5024V2.01164H10.5207C8.82288 2.01164 7.43889 3.39564 7.43889 5.09345V12.0698Z" fill="url(#paint1_linear_1048_85)" />
                                    <path d="M22.1036 2.41395H13.8962C13.2283 2.41395 12.6892 1.87483 12.6892 1.20697C12.6892 0.539115 13.2283 0 13.8962 0H22.1036C22.7715 0 23.3106 0.539115 23.3106 1.20697C23.3106 1.87483 22.7715 2.41395 22.1036 2.41395Z" fill="url(#paint2_linear_1048_85)" />
                                    <path d="M7.49512 47.6111V48.8181C7.49512 49.7072 8.21528 50.4274 9.10442 50.4274C9.99355 50.4274 10.7137 49.7072 10.7137 48.8181V47.6111H7.49512Z" fill="url(#paint3_linear_1048_85)" />
                                    <path d="M25.2778 47.6111V48.8181C25.2778 49.7072 25.998 50.4274 26.8871 50.4274C27.7763 50.4274 28.4964 49.7072 28.4964 48.8181V47.6111H25.2778Z" fill="url(#paint4_linear_1048_85)" />
                                    <path d="M13.2526 35.65L2.8606 46.0421C3.51638 46.3559 4.24862 46.5369 5.0251 46.5369H19.0703L13.2526 35.65Z" fill="url(#paint5_linear_1048_85)" />
                                    <path d="M0 26.3602V39.4237L8.51319 30.9105L0 26.3602Z" fill="url(#paint6_linear_1048_85)" />
                                    <path d="M30.9709 10.5288H5.02503C2.24899 10.5288 0 12.7778 0 15.5538V21.3272L2.02772 21.5968L3.48815 20.1363C4.00313 19.6213 4.83996 19.6213 5.35896 20.1363C5.87394 20.6513 5.87394 21.4881 5.35896 22.0071L5.32678 22.0393L15.9642 23.4635L19.9191 19.5087C20.6835 18.7443 21.5284 18.0804 22.4336 17.5333C23.3388 16.9861 24.3044 16.5476 25.3022 16.2458C26.1632 15.9843 26.9517 16.2056 27.4546 16.7125C27.9616 17.2195 28.1828 18.004 27.9213 18.865C27.6156 19.8627 27.181 20.8283 26.6339 21.7335C26.0827 22.6388 25.4229 23.4877 24.6585 24.2481L20.7036 28.2029L22.1278 38.8404L22.16 38.8082C22.675 38.2932 23.5118 38.2932 24.0308 38.8082C24.5458 39.3232 24.5458 40.16 24.0308 40.679L22.5704 42.1394L23.1578 46.5409H30.975C33.751 46.5409 36 44.2919 36 41.5158V15.5498C36 12.7738 33.751 10.5248 30.975 10.5248L30.9709 10.5288Z" fill="url(#paint7_linear_1048_85)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1048_85" x1="20.8691" y1="-7.1172" x2="42.3224" y2="20.6251" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#006CE4" />
                                            <stop offset="1" stopColor="#006CE4" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_1048_85" x1="2.20532" y1="-7.1172" x2="23.6586" y2="20.6251" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#006CE4" />
                                            <stop offset="1" stopColor="#006CE4" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_1048_85" x1="5.90334" y1="-1.55577" x2="6.68143" y2="7.54991" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#006CE4" />
                                            <stop offset="1" stopColor="#006CE4" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_1048_85" x1="5.43879" y1="45.796" x2="8.61543" y2="55.4518" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#006CE4" />
                                            <stop offset="1" stopColor="#006CE4" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint4_linear_1048_85" x1="23.2215" y1="45.796" x2="26.3981" y2="55.4518" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#006CE4" />
                                            <stop offset="1" stopColor="#006CE4" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint5_linear_1048_85" x1="-7.49557" y1="28.6335" x2="2.32426" y2="67.5203" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#006CE4" />
                                            <stop offset="1" stopColor="#006CE4" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint6_linear_1048_85" x1="-5.43898" y1="17.9409" x2="16.0469" y2="55.1814" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#006CE4" />
                                            <stop offset="1" stopColor="#006CE4" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint7_linear_1048_85" x1="-23" y1="-12.6873" x2="22.0956" y2="107.199" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#006CE4" />
                                            <stop offset="1" stopColor="#006CE4" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <svg width="116" height="26" viewBox="0 0 116 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.97 21.28H7.11L5.85 25H0.48L8.1 3.94H14.04L21.66 25H16.23L14.97 21.28ZM13.65 17.32L11.04 9.61L8.46 17.32H13.65ZM26.5591 6.52C25.6591 6.52 24.9191 6.26 24.3391 5.74C23.7791 5.2 23.4991 4.54 23.4991 3.76C23.4991 2.96 23.7791 2.3 24.3391 1.78C24.9191 1.24 25.6591 0.969998 26.5591 0.969998C27.4391 0.969998 28.1591 1.24 28.7191 1.78C29.2991 2.3 29.5891 2.96 29.5891 3.76C29.5891 4.54 29.2991 5.2 28.7191 5.74C28.1591 6.26 27.4391 6.52 26.5591 6.52ZM29.1091 8.26V25H23.9791V8.26H29.1091ZM37.9568 11.05C38.5568 10.13 39.3068 9.41 40.2068 8.89C41.1068 8.35 42.1068 8.08 43.2068 8.08V13.51H41.7968C40.5168 13.51 39.5568 13.79 38.9168 14.35C38.2768 14.89 37.9568 15.85 37.9568 17.23V25H32.8268V8.26H37.9568V11.05Z" fill="#FFB700" />
                                    <path d="M56.5788 14.23C57.3388 14.35 58.0288 14.66 58.6488 15.16C59.2888 15.66 59.7888 16.28 60.1488 17.02C60.5288 17.76 60.7188 18.55 60.7188 19.39C60.7188 20.45 60.4488 21.41 59.9088 22.27C59.3688 23.11 58.5788 23.78 57.5388 24.28C56.5188 24.76 55.3088 25 53.9088 25H46.1088V4.09H53.6088C55.0288 4.09 56.2388 4.33 57.2388 4.81C58.2388 5.27 58.9888 5.9 59.4888 6.7C59.9888 7.5 60.2388 8.4 60.2388 9.4C60.2388 10.64 59.8988 11.67 59.2188 12.49C58.5588 13.29 57.6788 13.87 56.5788 14.23ZM48.8388 13.12H53.4288C54.7088 13.12 55.6988 12.82 56.3988 12.22C57.0988 11.62 57.4488 10.79 57.4488 9.73C57.4488 8.67 57.0988 7.84 56.3988 7.24C55.6988 6.64 54.6888 6.34 53.3688 6.34H48.8388V13.12ZM53.6688 22.75C55.0288 22.75 56.0888 22.43 56.8488 21.79C57.6088 21.15 57.9888 20.26 57.9888 19.12C57.9888 17.96 57.5888 17.05 56.7888 16.39C55.9888 15.71 54.9188 15.37 53.5788 15.37H48.8388V22.75H53.6688ZM71.6773 25.27C70.1373 25.27 68.7373 24.92 67.4773 24.22C66.2373 23.52 65.2573 22.53 64.5373 21.25C63.8373 19.95 63.4873 18.45 63.4873 16.75C63.4873 15.07 63.8473 13.59 64.5673 12.31C65.3073 11.01 66.3073 10.02 67.5673 9.34C68.8273 8.64 70.2373 8.29 71.7973 8.29C73.3573 8.29 74.7673 8.64 76.0273 9.34C77.2873 10.02 78.2773 11 78.9973 12.28C79.7373 13.56 80.1073 15.05 80.1073 16.75C80.1073 18.45 79.7273 19.95 78.9673 21.25C78.2273 22.53 77.2173 23.52 75.9373 24.22C74.6573 24.92 73.2373 25.27 71.6773 25.27ZM71.6773 22.87C72.6573 22.87 73.5773 22.64 74.4373 22.18C75.2973 21.72 75.9873 21.03 76.5073 20.11C77.0473 19.19 77.3173 18.07 77.3173 16.75C77.3173 15.43 77.0573 14.31 76.5373 13.39C76.0173 12.47 75.3373 11.79 74.4973 11.35C73.6573 10.89 72.7473 10.66 71.7673 10.66C70.7673 10.66 69.8473 10.89 69.0073 11.35C68.1873 11.79 67.5273 12.47 67.0273 13.39C66.5273 14.31 66.2773 15.43 66.2773 16.75C66.2773 18.09 66.5173 19.22 66.9973 20.14C67.4973 21.06 68.1573 21.75 68.9773 22.21C69.7973 22.65 70.6973 22.87 71.6773 22.87ZM90.8667 25.27C89.3267 25.27 87.9267 24.92 86.6667 24.22C85.4267 23.52 84.4467 22.53 83.7267 21.25C83.0267 19.95 82.6767 18.45 82.6767 16.75C82.6767 15.07 83.0367 13.59 83.7567 12.31C84.4967 11.01 85.4967 10.02 86.7567 9.34C88.0167 8.64 89.4267 8.29 90.9867 8.29C92.5467 8.29 93.9567 8.64 95.2167 9.34C96.4767 10.02 97.4667 11 98.1867 12.28C98.9267 13.56 99.2967 15.05 99.2967 16.75C99.2967 18.45 98.9167 19.95 98.1567 21.25C97.4167 22.53 96.4067 23.52 95.1267 24.22C93.8467 24.92 92.4267 25.27 90.8667 25.27ZM90.8667 22.87C91.8467 22.87 92.7667 22.64 93.6267 22.18C94.4867 21.72 95.1767 21.03 95.6967 20.11C96.2367 19.19 96.5067 18.07 96.5067 16.75C96.5067 15.43 96.2467 14.31 95.7267 13.39C95.2067 12.47 94.5267 11.79 93.6867 11.35C92.8467 10.89 91.9367 10.66 90.9567 10.66C89.9567 10.66 89.0367 10.89 88.1967 11.35C87.3767 11.79 86.7167 12.47 86.2167 13.39C85.7167 14.31 85.4667 15.43 85.4667 16.75C85.4667 18.09 85.7067 19.22 86.1867 20.14C86.6867 21.06 87.3467 21.75 88.1667 22.21C88.9867 22.65 89.8867 22.87 90.8667 22.87ZM112.066 25L105.616 17.74V25H102.886V2.8H105.616V15.85L111.946 8.56H115.756L108.016 16.75L115.786 25H112.066Z" fill="#006CE4" />
                                </svg>

                            </div>

                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 *:font-medium text-lg">
                        <li><a>Blog</a></li>
                        <li><a>Offer</a></li>
                        <li><a>Airlines</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#006CE4] text-white w-[134px] h-[44px] rounded-[10px] text-xl">Sign in</a>
                </div>
            </div>
        </div>
    )
}
