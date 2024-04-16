import React from "react";
import Navbar from "../../components/Navbar";
import HeroImage from "../../assets/images/Hero.png";
import { Footer } from "../../components";

function About() {
    return (
        <div data-theme="light">
            {" "}
            <Navbar />
            {/* hero */}
            <div className="hero bg-sky-50">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={HeroImage} className="lg:max-w-lg rounded-lg" />
                    <div>
                        <h1 className="text-[34px] font-bold">Muhammad Zayyan Dafa Qiyamulail</h1>
                        <p className="py-6">
                            Halo Gaiss, Perkenalkan nama saya Muhammad Zayyan Dafa Qiyamulail biasa di panggil Zayyan. Saya merupakan fresh graduate tahun 2024 dari Institut Teknologi Telkom Purwokerto dengan mengambil program studi S1
                            Rekayasa Perangkat Lunak. Saya sangat tertarik dengan UI/UX research and design mobile and website. Selain itu, saya orang yang bertanggung jawab, berorientasi pada kerja team dan dapat bekerja dibawah tekanan
                            dan saya berharap dapat bergabung dengan team UI/UX Research and Design.{" "}
                        </p>
                        <p className="py-6">
                            Saya memiliki pengalaman 2 tahun menjadi seorang UI/UX Designer. Saya banyak sekali terlibat dari berbagai project yang ada dilingkungan kampus maupun diluar kampus. dan saya berharap dapat bergabung dengan team
                            UI/UX Research and Design.{" "}
                        </p>
                    </div>
                </div>
            </div>
            {/* end hero */}
            {/* pengalaman */}
            <section>
                <div className="flex flex-col gap-[52px] pt-[26px] pb-[60px] lg:px-[70px] md:px-[50px] px-[20px]">
                    <div className="text-black text-[34px] font-semibold font-['Poppins'] tracking-tight text-center">Pengalaman Organisasi</div>{" "}
                    <div className="flex flex-col gap-[24px]">
                        {" "}
                        <div className="flex flex-col  gap-2.5">
                            <div className="justify-between items-center inline-flex flex-wrap">
                                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                    <div className="text-black text-[22px] font-semibold font-['Poppins'] tracking-tight">Google Developer Student Clubs (Institut Teknologi Telkom Purwokerto) </div>
                                    <div className="text-black text-lg font-normal font-['Poppins'] tracking-tight">Head of Division Partnership and Event Organizers</div>
                                </div>
                                <div className="text-right text-black text-lg font-normal font-['Poppins'] tracking-tight">November 2022 - November 2023</div>
                            </div>{" "}
                            <div className="h-[1px] bg-black"></div>
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div class="text-black text-lg font-medium font-['Poppins'] tracking-tight">Job Deskripsi</div>{" "}
                                <div className="text-black text-[15px] font-normal font-['Poppins'] tracking-tight">
                                    <ul>
                                        <li> Mengidentifikasi dan mengevaluasi potensi mitra yang dapat memberikan dukungan atau berkolaborasi dengan organisasi luar</li>
                                        <li>Bertanggung jawab untuk merancang dan bernegosiasi kontrak dengan mitra atau penyelenggara acara untuk memastikan saling menguntungkan.</li>
                                        <li> Mengidentifikasi tema dan topik yang relevan untuk acara yang dapat mendukung tujuan organisasi.</li>
                                        <li> Mengevaluasi kesuksesan acara dan mencari cara untuk meningkatkan di masa depan.</li>
                                    </ul>
                                </div>
                            </div>{" "}
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <div className="justify-between items-center inline-flex flex-wrap">
                                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                    <div className="text-black text-[22px] font-semibold font-['Poppins'] tracking-tight">Google Developer Student Clubs (Institut Teknologi Telkom Purwokerto) </div>
                                    <div className="text-black text-lg font-normal font-['Poppins'] tracking-tight">Head of Division Partnership and Event Organizers</div>
                                </div>
                                <div className="text-right text-black text-lg font-normal font-['Poppins'] tracking-tight">November 2022 - November 2023</div>
                            </div>{" "}
                            <div className="h-[1px] bg-black"></div>
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div class="text-black text-lg font-medium font-['Poppins'] tracking-tight">Job Deskripsi</div>{" "}
                                <div className="text-black text-[15px] font-normal font-['Poppins'] tracking-tight">
                                    <ul>
                                        <li> Mengidentifikasi dan mengevaluasi potensi mitra yang dapat memberikan dukungan atau berkolaborasi dengan organisasi luar</li>
                                        <li>Bertanggung jawab untuk merancang dan bernegosiasi kontrak dengan mitra atau penyelenggara acara untuk memastikan saling menguntungkan.</li>
                                        <li> Mengidentifikasi tema dan topik yang relevan untuk acara yang dapat mendukung tujuan organisasi.</li>
                                        <li> Mengevaluasi kesuksesan acara dan mencari cara untuk meningkatkan di masa depan.</li>
                                    </ul>
                                </div>
                            </div>{" "}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {/* end pengalaman */}
        </div>
    );
}

export default About;
