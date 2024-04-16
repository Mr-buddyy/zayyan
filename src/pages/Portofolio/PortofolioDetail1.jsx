import React from "react";
import { Navbar, Footer, Prjct } from "../../components/index";
import { Information, ContentDT } from "../../components/Atoms/index";
import images from "../../assets/index";
import Skill from "../../components/Atoms/Skill";

function PortofolioDetail1() {
    return (
        <div data-theme="light">
            <Navbar />
            <div className=" xl:px-[70px] lg:px-[50px] md:px-[30px] px-[20px] pb-[185px]">
                {/* hero*/}
                <img class="relative rounded-[20px]pt-[17.5px] pb-[36px]" src={images.Porto1} />
                {/* breadcrumbs */}
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <a>Beranda</a>
                        </li>
                        <li>
                            <a>Project</a>
                        </li>
                        <li>
                            <a href="">
                                <div class="w-[125px] h-[29px] px-3 py-1 bg-blue-500 rounded-[9.50px] justify-center items-center gap-2.5 inline-flex">
                                    <div class="text-white text-sm font-medium leading-[21px] tracking-tight">Jantra Royale</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* main */}
                <div className="flex flex-row w-full gap-[46px]">
                    {/* left */}
                    <div className="w-2/3">
                        <div class=" text-black text-[27px] font-medium tracking-tight">Redesign Aplikasi Jantra Royale Framework Design Thinking</div>
                        <Skill skill={"Design Thinking"} />
                        <Information />
                        <ContentDT />
                    </div>
                    {/* right */}
                    <div className="w-1/3">
                        <Prjct showAll={false} showProjectSection={false} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default PortofolioDetail1;
