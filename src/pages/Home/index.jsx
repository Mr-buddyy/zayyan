import React, { useState } from "react";
import images from "../../assets/index"; // import ButtonSecond from "../../components/Atoms/ButtonSecond";
import { Navbar, Footer, Prjct } from "../../components/index";
import { ButtonSecond, ButtonSeeAll, Card, Skill } from "../../components/Atoms/index";

function Home() {
    return (
        <div data-theme="light">
            <Navbar />
            {/* hero */}
            <div className="hero min-h-screen bg-sky-50">
                <div className="hero-content flex-col lg:flex-row lg:gap-[46px]">
                    <img src={images.Hero1} className="lg:max-w-xl md:max-w-md sm:max-w-sm" />
                    <div>
                        <p className="py-6 text-xl">Hallo! Saya Zayyan </p>

                        <h1 className="text-[34px] font-bold pt-[8px]">
                            Saya Merupakan Seorang<span className="text-[#1570EF]">&nbsp;UI/UX Designer and Researcher</span>
                        </h1>
                        <div class="pt-[18px] text-slate-600 text-xl font-normal ">
                            Saya memiliki pengalaman 2 tahun menjadi seorang UI/UX Designer. Saya memiliki kepribadian yang bertanggung jawab, jujur, dapat bekerja sama dengan team, memiliki jiwa kepemimpinan serta dapat{" "}
                        </div>

                        <div className="w-full flex gap-2 py-[40px] flex-wrap">
                            <button class=" px-8 py-4 bg-blue-500 rounded justify-center items-center gap-2.5 inline-flex">
                                <div class="text-center text-white text-lg font-medium ">Resume Saya</div>
                            </button>
                            <button class=" px-8 py-4 text-blue-700  border border-blue-700 rounded justify-center items-center gap-2.5 inline-flex">
                                <div class="text-center text-blue-700 text-lg font-medium ">Hubungi Saya</div>
                            </button>
                        </div>
                        <div className="flex flex-col gap-[12px] pt-[20px]">
                            <div className="text-blue-500 text-[22px] font-semibold  tracking-tight">Sosial Media</div>
                            <div className="flex flex-row gap-[20px]">
                                {" "}
                                <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M18 5C14.3334 5 13.8744 5.0153 12.4344 5.081C10.9971 5.1467 10.0152 5.3753 9.1566 5.7092C8.2566 6.0476 7.4403 6.5786 6.7653 7.2662C6.0788 7.94042 5.54747 8.75615 5.2083 9.6566C4.8762 10.5152 4.6467 11.498 4.581 12.9353C4.5162 14.3744 4.5 14.8325 4.5 18.5C4.5 22.1675 4.5153 22.6256 4.581 24.0656C4.6467 25.5029 4.8753 26.4848 5.2092 27.3434C5.5476 28.2434 6.0786 29.0597 6.7662 29.7347C7.44044 30.4212 8.25616 30.9525 9.1566 31.2917C10.0152 31.6247 10.9971 31.8533 12.4344 31.919C13.8744 31.9847 14.3334 32 18 32C21.6666 32 22.1256 31.9847 23.5656 31.919C25.0029 31.8533 25.9848 31.6247 26.8434 31.2908C27.7434 30.9524 28.5597 30.4214 29.2347 29.7338C29.9212 29.0596 30.4525 28.2439 30.7917 27.3434C31.1247 26.4848 31.3533 25.5029 31.419 24.0656C31.4847 22.6256 31.5 22.1666 31.5 18.5C31.5 14.8334 31.4847 14.3744 31.419 12.9344C31.3533 11.4971 31.1247 10.5152 30.7908 9.6566C30.4519 8.75576 29.9205 7.93969 29.2338 7.2653C28.5596 6.5788 27.7439 6.04747 26.8434 5.7083C25.9848 5.3762 25.002 5.1467 23.5647 5.081C22.1256 5.0162 21.6675 5 18 5ZM18 7.4327C21.6045 7.4327 22.032 7.4462 23.4558 7.511C24.7716 7.5713 25.4862 7.79 25.9623 7.9763C26.5923 8.2202 27.0423 8.5136 27.5148 8.9852C27.9873 9.4577 28.2798 9.9077 28.5237 10.5377C28.7091 11.0138 28.9287 11.7284 28.989 13.0442C29.0538 14.468 29.0673 14.8955 29.0673 18.5C29.0673 22.1045 29.0538 22.532 28.989 23.9558C28.9287 25.2716 28.71 25.9862 28.5237 26.4623C28.3076 27.0487 27.9629 27.5792 27.5148 28.0148C27.0793 28.463 26.5487 28.8077 25.9623 29.0237C25.4862 29.2091 24.7716 29.4287 23.4558 29.489C22.032 29.5538 21.6054 29.5673 18 29.5673C14.3946 29.5673 13.968 29.5538 12.5442 29.489C11.2284 29.4287 10.5138 29.21 10.0377 29.0237C9.45131 28.8076 8.92081 28.4629 8.4852 28.0148C8.03716 27.5792 7.69242 27.0487 7.4763 26.4623C7.2909 25.9862 7.0713 25.2716 7.011 23.9558C6.9462 22.532 6.9327 22.1045 6.9327 18.5C6.9327 14.8955 6.9462 14.468 7.011 13.0442C7.0713 11.7284 7.29 11.0138 7.4763 10.5377C7.7202 9.9077 8.0136 9.4577 8.4852 8.9852C8.92075 8.53704 9.45127 8.19228 10.0377 7.9763C10.5138 7.7909 11.2284 7.5713 12.5442 7.511C13.968 7.4462 14.3955 7.4327 18 7.4327V7.4327Z"
                                        fill="black"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M17.9995 23.0027C17.408 23.0027 16.8223 22.8862 16.2757 22.6598C15.7292 22.4335 15.2327 22.1017 14.8144 21.6834C14.3961 21.2651 14.0643 20.7685 13.8379 20.222C13.6116 19.6755 13.495 19.0898 13.495 18.4982C13.495 17.9067 13.6116 17.3209 13.8379 16.7744C14.0643 16.2279 14.3961 15.7313 14.8144 15.3131C15.2327 14.8948 15.7292 14.563 16.2757 14.3366C16.8223 14.1102 17.408 13.9937 17.9995 13.9937C19.1942 13.9937 20.3399 14.4683 21.1847 15.3131C22.0295 16.1578 22.504 17.3036 22.504 18.4982C22.504 19.6929 22.0295 20.8386 21.1847 21.6834C20.3399 22.5281 19.1942 23.0027 17.9995 23.0027V23.0027ZM17.9995 11.5592C16.1592 11.5592 14.3942 12.2903 13.0929 13.5916C11.7916 14.8929 11.0605 16.6579 11.0605 18.4982C11.0605 20.3386 11.7916 22.1035 13.0929 23.4048C14.3942 24.7061 16.1592 25.4372 17.9995 25.4372C19.8399 25.4372 21.6048 24.7061 22.9062 23.4048C24.2075 22.1035 24.9385 20.3386 24.9385 18.4982C24.9385 16.6579 24.2075 14.8929 22.9062 13.5916C21.6048 12.2903 19.8399 11.5592 17.9995 11.5592V11.5592ZM26.9572 11.4332C26.9572 11.8682 26.7844 12.2854 26.4768 12.5931C26.1692 12.9007 25.752 13.0735 25.317 13.0735C24.882 13.0735 24.4648 12.9007 24.1572 12.5931C23.8496 12.2854 23.6767 11.8682 23.6767 11.4332C23.6767 10.9982 23.8496 10.581 24.1572 10.2734C24.4648 9.96578 24.882 9.79297 25.317 9.79297C25.752 9.79297 26.1692 9.96578 26.4768 10.2734C26.7844 10.581 26.9572 10.9982 26.9572 11.4332"
                                        fill="black"
                                    />
                                </svg>
                                <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M31.5 6.98529V30.0147C31.5 30.5412 31.2908 31.0462 30.9185 31.4185C30.5462 31.7908 30.0412 32 29.5147 32H6.48529C5.95876 32 5.45379 31.7908 5.08148 31.4185C4.70916 31.0462 4.5 30.5412 4.5 30.0147V6.98529C4.5 6.45876 4.70916 5.95379 5.08148 5.58148C5.45379 5.20916 5.95876 5 6.48529 5H29.5147C30.0412 5 30.5462 5.20916 30.9185 5.58148C31.2908 5.95379 31.5 6.45876 31.5 6.98529V6.98529ZM12.4412 15.3235H8.47059V28.0294H12.4412V15.3235ZM12.7985 10.9559C12.8006 10.6555 12.7435 10.3577 12.6305 10.0794C12.5175 9.80116 12.3508 9.54787 12.1399 9.33402C11.929 9.12017 11.6781 8.94996 11.4014 8.8331C11.1247 8.71624 10.8277 8.65502 10.5274 8.65294H10.4559C9.8451 8.65294 9.25934 8.89557 8.82746 9.32746C8.39557 9.75934 8.15294 10.3451 8.15294 10.9559C8.15294 11.5667 8.39557 12.1524 8.82746 12.5843C9.25934 13.0162 9.8451 13.2588 10.4559 13.2588V13.2588C10.7562 13.2662 11.0551 13.2143 11.3354 13.1062C11.6157 12.998 11.872 12.8357 12.0896 12.6285C12.3071 12.4212 12.4817 12.1732 12.6033 11.8985C12.725 11.6237 12.7913 11.3277 12.7985 11.0274V10.9559ZM27.5294 20.3106C27.5294 16.4909 25.0994 15.0059 22.6853 15.0059C21.8949 14.9663 21.1079 15.1347 20.4028 15.4942C19.6977 15.8537 19.0993 16.3917 18.6671 17.0547H18.5559V15.3235H14.8235V28.0294H18.7941V21.2715C18.7367 20.5793 18.9547 19.8925 19.4008 19.3602C19.8469 18.8279 20.485 18.4931 21.1765 18.4285H21.3274C22.59 18.4285 23.5271 19.2226 23.5271 21.2238V28.0294H27.4976L27.5294 20.3106Z"
                                        fill="black"
                                    />
                                </svg>
                                <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.6837 8.60329C12.4943 8.58824 13.3037 8.67135 14.0944 8.8508C14.7601 8.99613 15.3921 9.26658 15.9568 9.64776C16.4784 10.0268 16.8911 10.5364 17.1535 11.1254C17.4551 11.8496 17.6005 12.6293 17.5805 13.4135C17.6147 14.2747 17.3948 15.1268 16.9481 15.8638C16.4782 16.5599 15.8286 17.1158 15.0683 17.4726C16.1001 17.7508 16.9988 18.3879 17.6027 19.2695C18.1825 20.2036 18.474 21.2879 18.4405 22.3868C18.4597 23.2629 18.2785 24.1319 17.9109 24.9274C17.5711 25.6214 17.0735 26.2262 16.458 26.6934C15.8244 27.1554 15.1113 27.4973 14.3542 27.7019C13.5692 27.9191 12.7581 28.0282 11.9436 28.0262H3V8.60329H11.6837ZM11.1676 16.4591C11.8045 16.4853 12.4315 16.2947 12.9459 15.9183C13.1923 15.6989 13.384 15.425 13.5056 15.1184C13.6272 14.8117 13.6754 14.4809 13.6464 14.1523C13.6629 13.7686 13.5865 13.3865 13.4236 13.0386C13.2855 12.7616 13.0707 12.53 12.8049 12.3715C12.5356 12.1971 12.233 12.0803 11.9163 12.0288C11.5727 11.9622 11.2231 11.9319 10.8731 11.9384H7.05164V16.4764H11.1676V16.4591ZM11.3904 24.7282C11.7756 24.7334 12.1599 24.6918 12.5351 24.6044C12.8779 24.5287 13.2031 24.388 13.4929 24.1899C13.7769 23.9918 14.0063 23.7254 14.16 23.4152C14.3381 23.0196 14.42 22.5875 14.3988 22.1541C14.4374 21.7593 14.3851 21.3608 14.2459 20.9893C14.1067 20.6177 13.8843 20.283 13.5956 20.0108C12.9839 19.5602 12.2343 19.337 11.4758 19.3796H7.05164V24.7282H11.3904Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M24.2111 24.6582C24.5291 24.953 24.9037 25.18 25.3121 25.3255C25.7206 25.471 26.1544 25.532 26.5871 25.5047C27.2731 25.522 27.9458 25.3133 28.5016 24.9107C28.9536 24.6167 29.296 24.1817 29.4755 23.6731H32.7066C32.3624 25.1208 31.5216 26.4021 30.3306 27.2941C29.188 28.0525 27.8377 28.4366 26.4671 28.393C25.4888 28.4059 24.5179 28.222 23.6121 27.8522C22.7927 27.5105 22.0578 26.994 21.4588 26.3388C20.8621 25.6522 20.4036 24.8567 20.1087 23.9961C19.7776 23.0342 19.6156 22.0222 19.6298 21.005C19.6237 20.0049 19.7912 19.0113 20.1248 18.0684C20.5729 16.7419 21.4297 15.5915 22.5723 14.7822C23.7148 13.9729 25.0844 13.5464 26.4844 13.5638C27.518 13.5422 28.5401 13.7841 29.4544 14.2667C30.2809 14.7199 30.9938 15.3546 31.5397 16.123C32.098 16.9293 32.4982 17.8343 32.719 18.7899C32.9612 19.816 33.0475 20.8727 32.9752 21.9245H23.351C23.273 22.9127 23.5813 23.8927 24.2111 24.6582V24.6582ZM28.4335 17.2714C28.1642 17.0021 27.8402 16.7935 27.4835 16.6599C27.1268 16.5263 26.7456 16.4706 26.3656 16.4968C25.8614 16.4775 25.3609 16.5892 24.9127 16.821C24.5575 17.0166 24.2438 17.2797 23.9895 17.5957C23.7642 17.8919 23.5963 18.2277 23.4945 18.5857C23.4029 18.8843 23.3456 19.1923 23.3238 19.5039H29.2849C29.233 18.6917 28.9371 17.914 28.436 17.2727L28.4335 17.2714Z"
                                        fill="black"
                                    />
                                    <path d="M30.0244 9.90234H22.5547V11.8118H30.0244V9.90234Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end hero */}
            {/* layanan */}
            <section>
                <div class="text-black text-[34px] font-semibold  tracking-tight text-center pt-[46px] pb-[20px]">Layanan</div>
                <div class="xl:px-[160px] px-[60px] py-10 rounded-[20px] gap-20 lg:justify-between justify-center items-center flex flex-row flex-wrap">
                    <div class=" relative">
                        <img className="md:max-w-md lg:max-w-lg" src={images.Layanan} alt="" />
                    </div>
                    <div class="flex-col justify-center items-start gap-[279px] inline-flex">
                        <div class=" flex-col justify-start items-start gap-11 flex">
                            <div class="pl-11 pr-[73px] py-3 bg-emerald-100 rounded-md flex-col justify-start items-start gap-2 flex">
                                <div class="text-black text-[22px] font-semibold  tracking-tight">01</div>
                                <div class="text-black text-[22px] font-medium  tracking-tight">UI/UX Designer</div>
                            </div>
                            <div class="pl-11 pr-[77px] py-3 bg-blue-100 rounded-md flex-col justify-start items-start gap-2 flex">
                                <div class="text-black text-[22px] font-semibold  tracking-tight">02</div>
                                <div class="text-black text-[22px] font-medium  tracking-tight">UX Researcher</div>
                            </div>
                            <div class="pl-11 pr-[61px] py-3 bg-amber-50 rounded-md flex-col justify-start items-start gap-2 flex">
                                <div class="text-black text-[22px] font-semibold  tracking-tight">03</div>
                                <div class="text-black text-[22px] font-medium  tracking-tight">Mobile Designer</div>
                            </div>
                            <div class="px-11 py-3 bg-red-50 rounded-md flex-col justify-start items-start gap-2 flex">
                                <div class="text-black text-[22px] font-semibold  tracking-tight">04</div>
                                <div class="text-black text-[22px] font-medium  tracking-tight">Website Designer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* end layanan */}
            {/* pengalaman project */}
            <section className="pt-[46px] bg-sky-50">
                <Prjct showAll={false} showProjectSection={true} />
                <div className="w-full text-center xl:text-end px-[135px] ">
                    <ButtonSeeAll desc={"Lihat Semua Project >"} link={"/project"} />
                </div>
            </section>
            {/* end pengalaman project */}

            {/* pengalmaan */}
            <section className=" pt-[46px] pb-[70px]">
                <ul className="lg:px-[160px] md:px-[100px] sm:px-[50px] px-[30px]">
                    <div class="text-black text-[34px] font-semibold  tracking-tight text-center pb-[38px]">Pengalaman</div>
                    <div className="grid grid-cols-8 items-center justify-center gap-10">
                        <div className="col-span-3 flex flex-col gap-[77px]">
                            <div className=" flex-col justify-start items-start gap-2 inline-flex pr-[30px]">
                                <div class="text-gray-900 text-lg font-semibold  tracking-tight">Agenda Kota, Surabaya</div>
                                <div class="text-black text-[15px] font-normal  tracking-tight">Maret - Juni 2023</div>
                            </div>
                            <div className=" flex-col justify-start items-start gap-2 inline-flex pr-[30px]">
                                <div class="text-gray-900 text-lg font-semibold  tracking-tight">Si Cantik Bangsa, Institut Teknologi Telkom Purwokerto</div>
                                <div class="text-black text-[15px] font-normal  tracking-tight">Maret - Juni 2023</div>
                            </div>
                            <div className=" flex-col justify-start items-start gap-2 inline-flex pr-[30px]">
                                <div class="text-gray-900 text-lg font-semibold  tracking-tight">Satria Muda, Institut Teknologi Telkom Purwokerto</div>
                                <div class="text-black text-[15px] font-normal  tracking-tight">Maret - Juni 2023</div>
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col justify-center items-center">
                            {/* <svg width="364" height="54" viewBox="0 0 364 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_514_13194)">
                                    <g clip-path="url(#clip1_514_13194)">
                                        <circle cx="25" cy="26" r="24" fill="white" stroke="#1570EF" stroke-width="2" />
                                        <circle cx="24.5" cy="25.5" r="7.5" fill="#1570EF" />
                                    </g>
                                </g>
                                <g clip-path="url(#clip2_514_13194)">
                                    <g clip-path="url(#clip3_514_13194)">
                                        <circle cx="182" cy="26" r="24" fill="white" stroke="#1570EF" stroke-width="2" />
                                        <circle cx="181.5" cy="25.5" r="7.5" fill="#1570EF" />
                                    </g>
                                </g>
                                <g clip-path="url(#clip4_514_13194)">
                                    <g clip-path="url(#clip5_514_13194)">
                                        <circle cx="339" cy="25" r="24" fill="white" stroke="#1570EF" stroke-width="2" />
                                        <circle cx="338.5" cy="24.5" r="7.5" fill="#1570EF" />
                                    </g>
                                </g>
                                <circle cx="54.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="60.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="66.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="72.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="78.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="84.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="90.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="96.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="102.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="108.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="114.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="120.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="126.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="132.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="138.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="144.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="150.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="211.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="217.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="223.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="229.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="235.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="241.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="247.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="253.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="259.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="265.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="271.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="277.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="283.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="289.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="295.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="301.5" cy="27" r="1.5" fill="#1570EF" />
                                <circle cx="307.5" cy="27" r="1.5" fill="#1570EF" />
                                <defs>
                                    <clipPath id="clip0_514_13194">
                                        <rect width="50" height="50" fill="white" transform="translate(0 1)" />
                                    </clipPath>
                                    <clipPath id="clip1_514_13194">
                                        <rect width="50" height="50" fill="white" transform="translate(0 1)" />
                                    </clipPath>
                                    <clipPath id="clip2_514_13194">
                                        <rect width="50" height="50" fill="white" transform="translate(157 1)" />
                                    </clipPath>
                                    <clipPath id="clip3_514_13194">
                                        <rect width="50" height="50" fill="white" transform="translate(157 1)" />
                                    </clipPath>
                                    <clipPath id="clip4_514_13194">
                                        <rect width="50" height="50" fill="white" transform="translate(314)" />
                                    </clipPath>
                                    <clipPath id="clip5_514_13194">
                                        <rect width="50" height="50" fill="white" transform="translate(314)" />
                                    </clipPath>
                                </defs>
                            </svg> */}

                            <div className="items-center flex lg:flex-col flex-row justify-start h-full">
                                <svg width="50" height="153" viewBox="0 0 50 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_0_1)">
                                        <circle cx="25" cy="25" r="24" fill="white" stroke="#1570EF" stroke-width="2" />
                                        <circle cx="24.5" cy="24.5" r="7.5" fill="#1570EF" />
                                    </g>
                                    <g clip-path="url(#clip1_0_1)">
                                        <circle cx="25" cy="151.023" r="1.5" transform="rotate(-90 25 151.023)" fill="#1570EF" />
                                        <circle cx="25" cy="145.023" r="1.5" transform="rotate(-90 25 145.023)" fill="#1570EF" />
                                        <circle cx="25" cy="139.023" r="1.5" transform="rotate(-90 25 139.023)" fill="#1570EF" />
                                        <circle cx="25" cy="133.023" r="1.5" transform="rotate(-90 25 133.023)" fill="#1570EF" />
                                        <circle cx="25" cy="127.023" r="1.5" transform="rotate(-90 25 127.023)" fill="#1570EF" />
                                        <circle cx="25" cy="121.023" r="1.5" transform="rotate(-90 25 121.023)" fill="#1570EF" />
                                        <circle cx="25" cy="115.023" r="1.5" transform="rotate(-90 25 115.023)" fill="#1570EF" />
                                        <circle cx="25" cy="109.023" r="1.5" transform="rotate(-90 25 109.023)" fill="#1570EF" />
                                        <circle cx="25" cy="103.023" r="1.5" transform="rotate(-90 25 103.023)" fill="#1570EF" />
                                        <circle cx="25" cy="97.0234" r="1.5" transform="rotate(-90 25 97.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="91.0234" r="1.5" transform="rotate(-90 25 91.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="85.0234" r="1.5" transform="rotate(-90 25 85.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="79.0234" r="1.5" transform="rotate(-90 25 79.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="73.0234" r="1.5" transform="rotate(-90 25 73.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="67.0234" r="1.5" transform="rotate(-90 25 67.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="61.0234" r="1.5" transform="rotate(-90 25 61.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="55.0234" r="1.5" transform="rotate(-90 25 55.0234)" fill="#1570EF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_1">
                                            <rect width="50" height="50" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_0_1">
                                            <rect width="100.98" height="32" fill="white" transform="matrix(0 -1 1 0 9 152.523)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="items-center flex flex-col justify-start h-full">
                                <svg width="50" height="153" viewBox="0 0 50 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_0_1)">
                                        <circle cx="25" cy="25" r="24" fill="white" stroke="#1570EF" stroke-width="2" />
                                        <circle cx="24.5" cy="24.5" r="7.5" fill="#1570EF" />
                                    </g>
                                    <g clip-path="url(#clip1_0_1)">
                                        <circle cx="25" cy="151.023" r="1.5" transform="rotate(-90 25 151.023)" fill="#1570EF" />
                                        <circle cx="25" cy="145.023" r="1.5" transform="rotate(-90 25 145.023)" fill="#1570EF" />
                                        <circle cx="25" cy="139.023" r="1.5" transform="rotate(-90 25 139.023)" fill="#1570EF" />
                                        <circle cx="25" cy="133.023" r="1.5" transform="rotate(-90 25 133.023)" fill="#1570EF" />
                                        <circle cx="25" cy="127.023" r="1.5" transform="rotate(-90 25 127.023)" fill="#1570EF" />
                                        <circle cx="25" cy="121.023" r="1.5" transform="rotate(-90 25 121.023)" fill="#1570EF" />
                                        <circle cx="25" cy="115.023" r="1.5" transform="rotate(-90 25 115.023)" fill="#1570EF" />
                                        <circle cx="25" cy="109.023" r="1.5" transform="rotate(-90 25 109.023)" fill="#1570EF" />
                                        <circle cx="25" cy="103.023" r="1.5" transform="rotate(-90 25 103.023)" fill="#1570EF" />
                                        <circle cx="25" cy="97.0234" r="1.5" transform="rotate(-90 25 97.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="91.0234" r="1.5" transform="rotate(-90 25 91.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="85.0234" r="1.5" transform="rotate(-90 25 85.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="79.0234" r="1.5" transform="rotate(-90 25 79.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="73.0234" r="1.5" transform="rotate(-90 25 73.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="67.0234" r="1.5" transform="rotate(-90 25 67.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="61.0234" r="1.5" transform="rotate(-90 25 61.0234)" fill="#1570EF" />
                                        <circle cx="25" cy="55.0234" r="1.5" transform="rotate(-90 25 55.0234)" fill="#1570EF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_1">
                                            <rect width="50" height="50" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_0_1">
                                            <rect width="100.98" height="32" fill="white" transform="matrix(0 -1 1 0 9 152.523)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="items-center flex flex-col justify-start h-full">
                                <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_504_13764)">
                                        <circle cx="25" cy="25.4062" r="24" fill="white" stroke="#1570EF" stroke-width="2" />
                                        <circle cx="24.5" cy="24.9062" r="7.5" fill="#1570EF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_504_13764">
                                            <rect width="50" height="50" fill="white" transform="translate(0 0.40625)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div className="col-span-4 flex flex-col gap-[35px]">
                            {" "}
                            <div className="flex flex-col">
                                <div className="text-gray-900 text-lg font-semibold  tracking-tight">UI/UX Designer</div>
                                <div className=" text-justify text-black text-[15px] font-normal  tracking-tight">
                                    Agenda Kota merupakan start up yang bergerak dibidang jasa layanan Event Management Service (EMS). Pada agenda kota ini saya mengikuti program magang mandiri dengan melakukan redesign terhadap website
                                    agenda kota.
                                </div>{" "}
                            </div>
                            <div className="flex flex-col">
                                <div className="text-gray-900 text-lg font-semibold  tracking-tight">UI/UX Designer</div>
                                <div className=" text-justify text-black text-[15px] font-normal  tracking-tight">
                                    Agenda Kota merupakan start up yang bergerak dibidang jasa layanan Event Management Service (EMS). Pada agenda kota ini saya mengikuti program magang mandiri dengan melakukan redesign terhadap website
                                    agenda kota.
                                </div>{" "}
                            </div>
                            <div className="flex flex-col">
                                <div className="text-gray-900 text-lg font-semibold  tracking-tight">UI/UX Designer</div>
                                <div className=" text-justify text-black text-[15px] font-normal  tracking-tight">
                                    Agenda Kota merupakan start up yang bergerak dibidang jasa layanan Event Management Service (EMS). Pada agenda kota ini saya mengikuti program magang mandiri dengan melakukan redesign terhadap website
                                    agenda kota.
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-7 items-center justify-center">
                        <div className="col-span-3 flex-col justify-start items-start gap-2 inline-flex pr-[30px]">
                            <div class="text-gray-900 text-lg font-semibold  tracking-tight">Agenda Kota, Surabaya</div>
                            <div class="text-black text-[15px] font-normal  tracking-tight">Maret - Juni 2023</div>
                        </div>
                        <div className="items-center flex flex-col justify-start h-full">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                                <g clip-path="url(#clip0_504_13754)">
                                    <circle cx="25" cy="25" r="24" fill="white" stroke="#1570EF" stroke-width="2" />
                                    <circle cx="24.5" cy="24.5" r="7.5" fill="#1570EF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_504_13754">
                                        <rect width="50" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <hr class="border-2-2 border-dashed border-blue-500 h-full border "></hr>
                        </div>
                        <div className=" col-span-3 flex flex-col">
                            <div className="text-gray-900 text-lg font-semibold  tracking-tight">UI/UX Designer</div>
                            <div className=" text-justify text-black text-[15px] font-normal  tracking-tight">
                                Agenda Kota merupakan start up yang bergerak dibidang jasa layanan Event Management Service (EMS). Pada agenda kota ini saya mengikuti program magang mandiri dengan melakukan redesign terhadap website agenda
                                kota.
                            </div>{" "}
                        </div>
                    </div>
                    <div className="grid grid-cols-7 items-center justify-center">
                        <div className="col-span-3 flex-col justify-start items-start gap-2 inline-flex pr-[30px]">
                            <div class="text-gray-900 text-lg font-semibold  tracking-tight">Si Cantik Bangsa, Institut Teknologi Telkom Purwokerto</div>
                            <div class="text-black text-[15px] font-normal  tracking-tight">Maret - Juni 2023</div>
                        </div>
                        <div className="items-center flex flex-col justify-start h-full">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                                <g clip-path="url(#clip0_504_13754)">
                                    <circle cx="25" cy="25" r="24" fill="white" stroke="#1570EF" stroke-width="2" />
                                    <circle cx="24.5" cy="24.5" r="7.5" fill="#1570EF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_504_13754">
                                        <rect width="50" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <hr class="border-2-2 border-dashed border-blue-500 h-full border "></hr>
                        </div>
                        <div className=" col-span-3 flex flex-col">
                            <div className="text-gray-900 text-lg font-semibold  tracking-tight">UI/UX Designer</div>
                            <div className=" text-justify text-black text-[15px] font-normal  tracking-tight">
                                Agenda Kota merupakan start up yang bergerak dibidang jasa layanan Event Management Service (EMS). Pada agenda kota ini saya mengikuti program magang mandiri dengan melakukan redesign terhadap website agenda
                                kota.
                            </div>{" "}
                        </div>
                    </div>
                    <div className="grid grid-cols-7 items-center justify-center">
                        <div className="col-span-3 flex-col justify-start items-start gap-2 inline-flex pr-[30px]">
                            <div class="text-gray-900 text-lg font-semibold  tracking-tight">Agenda Kota, Surabaya</div>
                            <div class="text-black text-[15px] font-normal  tracking-tight">Maret - Juni 2023</div>
                        </div>
                        <div className="items-center flex flex-col justify-start h-full">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_504_13754)">
                                    <circle cx="25" cy="25" r="24" fill="white" stroke="#1570EF" stroke-width="2" />
                                    <circle cx="24.5" cy="24.5" r="7.5" fill="#1570EF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_504_13754">
                                        <rect width="50" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className=" col-span-3 flex flex-col">
                            <div className="text-gray-900 text-lg font-semibold  tracking-tight">UI/UX Designer</div>
                            <div className=" text-justify text-black text-[15px] font-normal  tracking-tight">
                                Agenda Kota merupakan start up yang bergerak dibidang jasa layanan Event Management Service (EMS). Pada agenda kota ini saya mengikuti program magang mandiri dengan melakukan redesign terhadap website agenda
                                kota.
                            </div>{" "}
                        </div>
                    </div> */}
                    {/* <li className="">
                        <div className="timeline-start flex-col justify-start items-start gap-2 inline-flex pr-[30px]">
                            <div class="text-gray-900 text-lg font-semibold  tracking-tight">Agenda Kota, Surabaya</div>
                            <div class="text-black text-[15px] font-normal  tracking-tight">Maret - Juni 2023</div>
                        </div>
                        <div className="items-center h-full">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_504_13754)">
                                    <circle cx="25" cy="25" r="24" fill="white" stroke="#1570EF" stroke-width="2" />
                                    <circle cx="24.5" cy="24.5" r="7.5" fill="#1570EF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_504_13754">
                                        <rect width="50" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <hr class="border-2-2 border-dashed border-blue-500 h-full border "></hr>
                        </div>
                        <div className="timeline-end flex flex-col pl-[60px]">
                            <div className="text-gray-900 text-lg font-semibold  tracking-tight">UI/UX Designer</div>
                            <div className=" text-justify text-black text-[15px] font-normal  tracking-tight">
                                Agenda Kota merupakan start up yang bergerak dibidang jasa layanan Event Management Service (EMS). Pada agenda kota ini saya mengikuti program magang mandiri dengan melakukan redesign terhadap website agenda
                                kota.
                            </div>{" "}
                        </div>
                    </li>
                    <li className="">
                        <div className="timeline-start flex-col justify-start items-start gap-2 inline-flex pr-[30px]">
                            <div class="text-gray-900 text-lg font-semibold  tracking-tight">Agenda Kota, Surabaya</div>
                            <div class="text-black text-[15px] font-normal  tracking-tight">Maret - Juni 2023</div>
                        </div>
                        <div className="timeline-middle items-center flex flex-col">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_504_13754)">
                                    <circle cx="25" cy="25" r="24" fill="white" stroke="#1570EF" stroke-width="2" />
                                    <circle cx="24.5" cy="24.5" r="7.5" fill="#1570EF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_504_13754">
                                        <rect width="50" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="32" viewBox="0 0 32 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_504_13767)">
                                    <circle cx="16" cy="100.023" r="1.5" transform="rotate(-90 16 100.023)" fill="#1570EF" />
                                    <circle cx="16" cy="94.0234" r="1.5" transform="rotate(-90 16 94.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="88.0234" r="1.5" transform="rotate(-90 16 88.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="82.0234" r="1.5" transform="rotate(-90 16 82.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="76.0234" r="1.5" transform="rotate(-90 16 76.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="70.0234" r="1.5" transform="rotate(-90 16 70.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="64.0234" r="1.5" transform="rotate(-90 16 64.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="58.0234" r="1.5" transform="rotate(-90 16 58.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="52.0234" r="1.5" transform="rotate(-90 16 52.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="46.0234" r="1.5" transform="rotate(-90 16 46.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="40.0234" r="1.5" transform="rotate(-90 16 40.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="34.0234" r="1.5" transform="rotate(-90 16 34.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="28.0234" r="1.5" transform="rotate(-90 16 28.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="22.0234" r="1.5" transform="rotate(-90 16 22.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="16.0234" r="1.5" transform="rotate(-90 16 16.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="10.0234" r="1.5" transform="rotate(-90 16 10.0234)" fill="#1570EF" />
                                    <circle cx="16" cy="4.02344" r="1.5" transform="rotate(-90 16 4.02344)" fill="#1570EF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_504_13767">
                                        <rect width="100.98" height="32" fill="white" transform="matrix(0 -1 1 0 0 101.523)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="timeline-end flex flex-col pl-[60px]">
                            <div className="text-gray-900 text-lg font-semibold  tracking-tight">UI/UX Designer</div>
                            <div className=" text-justify text-black text-[15px] font-normal  tracking-tight">
                                Agenda Kota merupakan start up yang bergerak dibidang jasa layanan Event Management Service (EMS). Pada agenda kota ini saya mengikuti program magang mandiri dengan melakukan redesign terhadap website agenda
                                kota.
                            </div>{" "}
                        </div>
                        <hr />
                    </li>

                    <li className="">
                        <div className="timeline-start flex-col justify-start items-start gap-2 inline-flex pr-[30px]">
                            <div class="text-gray-900 text-lg font-semibold  tracking-tight">Agenda Kota, Surabaya</div>
                            <div class="text-black text-[15px] font-normal  tracking-tight">Maret - Juni 2023</div>
                        </div>
                        <div className="timeline-middle">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_504_13754)">
                                    <circle cx="25" cy="25" r="24" fill="white" stroke="#1570EF" stroke-width="2" />
                                    <circle cx="24.5" cy="24.5" r="7.5" fill="#1570EF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_504_13754">
                                        <rect width="50" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="timeline-end flex flex-col pl-[60px]">
                            <div className="text-gray-900 text-lg font-semibold  tracking-tight">UI/UX Designer</div>
                            <div className=" text-justify text-black text-[15px] font-normal  tracking-tight">
                                Agenda Kota merupakan start up yang bergerak dibidang jasa layanan Event Management Service (EMS). Pada agenda kota ini saya mengikuti program magang mandiri dengan melakukan redesign terhadap website agenda
                                kota.
                            </div>{" "}
                        </div>
                    </li> */}
                    <div className="w-full text-end">
                        <ButtonSeeAll desc={"Lihat Semua Pengalaman >"} link={"/project"} />
                    </div>
                </ul>
            </section>

            {/* pengalaman */}
            <Footer />
        </div>
    );
}

export default Home;
