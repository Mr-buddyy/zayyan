import React from "react";

function Navbar() {
    return (
        <div>
            {" "}
            <div className="navbar bg-base-100 h-[84px] lg:pr-[102px] pr-[30px] lg:pl-[69px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Item 3</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Zayyan Daffa</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a href="/beranda">Beranda</a>
                        </li>
                        <li>
                            <a href="/portofolio">Portofolio</a>
                        </li>
                        <li>
                            <a href="/project">Project</a>
                        </li>
                        <li>
                            <a href="/tentang">Tentang Kami</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div class=" px-6 py-4 bg-sky-50 rounded-lg border border-blue-500 justify-center items-center gap-1.5 inline-flex">
                        <div class="text-blue-500 text-base font-medium leading-tight">Hubungi Saya</div>
                    </div>{" "}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
