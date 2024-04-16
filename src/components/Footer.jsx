import React from "react";

function Footer() {
    return (
        <footer className="footer p-10 bg-slate-800 text-base-content">
            <nav>
                <div class="text-white text-base font-semibold font-['Inter']">Alamat</div>
                <a class="opacity-60 text-white text-sm font-normal font-['Inter'] leading-normal">Brebes, Jawa Tengah. Indonesia</a>
            </nav>
            <nav>
                <div class="text-white text-base font-semibold font-['Inter']">Kontak</div>
                <div class="opacity-60 text-white text-sm font-normal font-['Inter'] underline leading-normal">zayyandafa45@gmail.com</div>
                <div class="text-white text-sm font-medium font-['Inter'] leading-normal">+6285786473236</div>
            </nav>
            <nav>
                <div class="text-white text-base font-semibold font-['Inter']">Sosial Media</div>
                <div class="opacity-60 text-white text-sm font-normal font-['Inter'] leading-normal">Facebook</div>
                <div class="opacity-60 text-white text-sm font-normal font-['Inter'] leading-normal">Behance</div>
                <div class="opacity-60 text-white text-sm font-normal font-['Inter'] leading-normal">Instagram</div>
            </nav>
            <form>
                <div class="text-white text-base font-semibold font-['Inter']">Kolaborasi</div>
                <div class="w-[330px] h-[41px] py-3 border-b border-white border-opacity-60 justify-between items-center inline-flex">
                    <div class="justify-start items-center gap-2.5 flex">
                        {/* <div class="w-4 h-4 relative opacity-60"></div> */}
                        <input class="bg-slate-800 text-white text-sm font-normal font-['Inter']" placeholder="Enter your email" />
                    </div>
                    <div class="w-4 h-4 relative opacity-60"></div>
                </div>
                {/* <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset> */}
            </form>
        </footer>
    );
}

export default Footer;
