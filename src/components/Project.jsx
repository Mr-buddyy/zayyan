import React, { useState } from "react";
import Card from "./Atoms/Card";
import images from "../assets/index";

function Project({ showAll, showProjectSection }) {
    const [activeTab, setActiveTab] = useState("Semua"); // State untuk melacak kategori yang aktif

    // Fungsi untuk menangani klik pada tab
    const handleTabClick = (kategori) => {
        setActiveTab(kategori);
    };

    // Daftar card dengan kategori
    const cards = [
        {
            title: "Pmate (Parenting Mate) Berbasis Mobile dan Website",
            desc: "Parenting mate(Pmate) adalah aplikasi Berbasis Mobile dan Website yang bertujuan untuk membantu para calon orang tua muda untuk belajar parenting. Project ini dikerjakan dengan team UI/UX dan dengan team Product Manager.",
            skills: ["Design Thinking", "UI/UX Design", "React Native"],
            kategori: "Website",
            link: "/portofolio/1",
            image: images.Portodetail1, // Pass the imported image directly
        },
        {
            title: "Redesign Aplikasi Mobile Jantra Royale",
            desc: "Aplikasi “Jantra Royale” merupakan aplikasi untuk melakukan pemesanan antrian ketika melakukan pengecekan kaki-kaki pada mobil. Project ini merupakan redesign aplikasi jantra royale dengan menggunakan metode design thinking.",
            skills: ["Design Thinking"],
            kategori: "Aplikasi",
        },
        {
            title: "Redesign User Interface Pada Website Agoda",
            desc: "Pada project ini dilakukan redesign dengan menggunakan metode heuristic evaluation untuk menemukan permasalahan yang ada pada website agoda kemudian dilakukan analisis sesuai dengan prinsip pada heuristic evaluation",
            skills: ["Heuristic Evaluation"],
            kategori: "Website",
        },
        {
            title: "Aplikasi Mobile TableTap (Reservasi Kafe)",
            desc: "Project ini merupakan project di perkuliahan dengan membuat tampilan desain aplikasi. Aplikasi TableTap merupakan aplikasi yang menyediakan layanan jasa reservasi kafe di wilayah Purwokerto Jawa Tengah. ",
            skills: ["Design Thinking"],
            kategori: "Aplikasi",
        },
        {
            title: "Website PT. Digital Marketing Indonesia Maju",
            desc: "Project yang diselesaikan dalam waktu 2 hari. Project tersebut merupakan study case pada saat test seleksi pekerjaan sebagai UI/UX Design di suatu perusahaan yang ada di Jakarta.",
            // skills: ["Design Thinking"],
            kategori: "Website",
        },
        // Tambahkan card lainnya di sini
    ];
    const filteredCards = cards.filter((card) => activeTab === "Semua" || card.kategori === activeTab);
    const displayedCards = showAll ? filteredCards : filteredCards.slice(0, 4);
    const displayedCardsProjct = showAll ? filteredCards : filteredCards.slice(0, 2);

    return (
        <div data-theme="light">
            {showProjectSection ? (
                <>
                    <section className="pt-[46px] bg-sky-50">
                        <div className="flex flex-col items-center justify-center text-center">
                            <div class="text-black text-[34px] font-semibold  tracking-tight pb-[32px]">Pengalaman Project</div>

                            <div className="px-3 py-2 bg-gray-100 rounded-[100px] border border-gray-400 justify-start items-start inline-flex mb-[42px]">
                                <div className={`px-6 py-2.5 rounded-[100px] justify-center items-center gap-2.5 flex ${activeTab === "Semua" ? "bg-blue-500" : ""}`} onClick={() => handleTabClick("Semua")}>
                                    <div className={`text-lg font-normal tracking-tight ${activeTab === "Semua" ? "text-emerald-50" : "text-black"}`}>Semua</div>
                                </div>
                                <div className={`px-6 py-2.5 rounded-[100px] justify-center items-center gap-2.5 flex ${activeTab === "Website" ? "bg-blue-500" : ""}`} onClick={() => handleTabClick("Website")}>
                                    <div className={`text-lg font-normal tracking-tight ${activeTab === "Website" ? "text-emerald-50" : "text-black"}`}>Website</div>
                                </div>
                                <div className={`px-6 py-2.5 rounded-[100px] justify-center items-center gap-2.5 flex ${activeTab === "Aplikasi" ? "bg-blue-500" : ""}`} onClick={() => handleTabClick("Aplikasi")}>
                                    <div className={`text-lg font-normal tracking-tight ${activeTab === "Aplikasi" ? "text-emerald-50" : "text-black"}`}>Aplikasi</div>
                                </div>
                            </div>
                            <div id="card" className="flex flex-row flex-wrap w-full items-center justify-center xl:justify-between px-10 lg:px-[135px] gap-[50px] xl:gap-[70px]">
                                {displayedCards.map((card, index) => (
                                    <Card key={index} {...card} />
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <div className="flex flex-col justify-between">
                    <div class="justify-between items-center inline-flex">
                        <div class=" text-black text-lg font-medium tracking-tight">Rekomendasi Project</div>
                        <div class=" text-blue-500 text-xs font-medium tracking-tight">Lihat Semua Project</div>
                    </div>{" "}
                    <div id="card" className="flex flex-row flex-wrap w-full items-center justify-center xl:justify-between gap-[50px] lg:gap-[70px]">
                        {displayedCardsProjct.map((card, index) => (
                            <Card key={index} {...card} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
