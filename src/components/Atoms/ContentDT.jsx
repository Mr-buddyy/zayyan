import React from "react";
import images from "../../assets/index";

function Content() {
    return (
        <div>
            <div classNameName=" flex-col justify-start items-start gap-9 inline-flex">
                <div className="flex-col justify-start items-start gap-8 flex">
                    <div className="flex-col justify-start items-start gap-8 flex">
                        <div className="flex-col justify-start items-start gap-2 flex">
                            <div className="text-black text-[22px] font-semibold tracking-tight">Overview</div>
                            <div className=" text-justify text-black text-lg font-normal font-['Oxygen'] leading-[27px] tracking-tight">
                                {" "}
                                Saat ini, setiap instansi sudah pasti memiliki website pribadi sebagai Company Profile mereka. Kami berinisiatif untuk membuatkan sebuah website Company Profile untuk instansi yang masih belum memiliki
                                website tersebut. Setelah berdiskusi, kami sepakat untuk membuatkan website untuk sebuah pesan tren dimana salah satu dari anggota kami belajar di pesantren tersebut. <br /> Pesantren Nurul Jadid Al
                                Mas’udiyah merupakan pondok untuk mempelajari ilmu agama Islam. Terletak di Sokaraja, Purwokerto Timur. Selain untuk menampilkan profile pesantren, website yang kami buat ini nantinya juga akan ada form
                                sebagai sarana untuk pendaftaran santri baru.
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 flex">
                            <div className="text-black text-[22px] font-semibold tracking-tight">Problem</div>
                            <div className="text-justify text-black text-lg font-normal font-['Oxygen'] leading-[27px]">
                                Pondok pesantren ini kurang di kenal di luar Pulau Jawa
                                <br />
                                Informasi yang diberikan tidak tersebar di internet, sehingga membuat pondok pesantren ini kurang di kenal.
                                <br />
                                Pendaftaran pada pondok pesantren ini masih dilakukan secara manual dengan meminta formulir di pondok pesantren, sehingga akan membuat pendaftaran ini tidak efisien
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-amber-50 shadow flex-col justify-start items-start gap-2.5 flex">
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className="text-black text-[22px] font-semibold tracking-tight">Notes:</div>
                        <div className=" text-justify text-black text-lg font-normal font-['Oxygen'] leading-[27px]">
                            Project ini merupakan tugas besar untuk memenuhi nilai pada mata kuliah Desain Pemrograman Web 1. Project ini memiliki tujuan untuk Menyediakan wadah/platform mengenai informasi seperti fasilitas pada pondokan,
                            kegiatan pondok, serta formulir pendaftaran pondok. Project ini dikerjakan dengan 6 anggota kelompok.
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[56px] flex-col justify-start items-center inline-flex">
                <img className="max-w-xl" src={images.DesignThinking} />
            </div>
            {/* empetize */}
            <div class="w-[780px] h-[529px] flex-col justify-start items-start gap-5 inline-flex">
                <div class="flex-col justify-start items-start gap-2 flex">
                    <div class="flex-col justify-start items-start gap-2 flex">
                        <div class="text-right text-black text-3xl font-semibold ">Emphatize</div>
                        <div class="text-black text-[22px] font-semibold  tracking-tight">Research Plan</div>
                        <ol class="list-none">
                            <li className="mb-6">
                                <div class="text-black text-lg font-medium  tracking-tight">A. Research Objective</div>
                                <ul className="list-disc px-10">
                                    <li>Mengidentifikasi penyebab kekhawatiran dan kebingungan user dalam mengatasi masalah kaki-kaki pada mobil</li>
                                    <li> Mengidentifikasi kesalahan yang ada pada aplikasi Jantra Royale</li>
                                </ul>
                            </li>
                            <li className="mb-6">
                                {" "}
                                <div class="text-black text-lg font-medium  tracking-tight">B. Criteria Participant</div>
                                <ul className="list-disc px-10">
                                    <li>Usia 17–46 Tahun</li>
                                    <li> Pria</li>
                                    <li> Pernah melakukan service kaki — kaki mobil di Jantra</li>
                                </ul>
                            </li>
                            <li className="mb-6">
                                {" "}
                                <div class="text-black text-lg font-medium  tracking-tight">C. Research Method</div>
                                <ul className="list-disc px-10">
                                    <li> Kuesioner</li>
                                    <li> In Depth Interview</li>
                                </ul>
                            </li>
                            <li className="mb-6">
                                {" "}
                                <div class="text-black text-lg font-medium  tracking-tight">D. Hyphotesis</div>
                                <ul className="list-disc px-10">
                                    <li> User membutuhkan aplikasi jantra yang mudah untuk digunakan disegala usia</li>
                                    <li> User membutuhkan informasi detail mengenai harga spare part di aplikasi</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            {/* end */}
            {/* <div className=" flex-col justify-start items-end gap-[18px] inline-flex">
                <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="text-right text-black text-3xl font-semibold ">Emphatize</div>
                    <div className="flex-col justify-start items-start gap-5 flex">
                        <div className="flex-col justify-start items-end gap-[18px] flex">
                            <div className="flex-col justify-start items-end gap-[18px] flex">
                                <div className=" flex-col justify-start items-start gap-5 flex">
                                    <div className="flex-col justify-start items-start gap-2 flex">
                                        <div className="flex-col justify-start items-start gap-2 flex">
                                            <div className="text-black text-[22px] font-semibold  tracking-tight">Research Plan</div>
                                            <div className="text-black text-lg font-medium  tracking-tight">A. Research Objective</div>
                                            <div className=" text-justify text-black text-lg font-normal font-['Oxygen'] leading-[27px]">
                                                Mengidentifikasi penyebab kekhawatiran dan kebingungan user dalam mengatasi masalah kaki-kaki pada mobil
                                                <br />
                                                Mengidentifikasi kesalahan yang ada pada aplikasi Jantra Royale
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-col justify-start items-start gap-2 flex">
                                        <div className="text-black text-lg font-medium  tracking-tight">B. Criteria Participant</div>
                                        <div className=" text-black text-lg font-normal font-['Oxygen'] leading-[27px]">
                                            Usia 17–46 Tahun
                                            <br />
                                            Pria
                                            <br />
                                            Pernah melakukan service kaki — kaki mobil di Jantra
                                        </div>
                                        <div className="flex-col justify-start items-start gap-5 flex">
                                            <div className="flex-col justify-start items-start gap-2 flex">
                                                <div className="text-black text-lg font-medium  tracking-tight">C. Research Method</div>
                                                <div className=" text-black text-lg font-normal font-['Oxygen'] leading-[27px]">
                                                    Kuesioner
                                                    <br />
                                                    In Depth Interview
                                                </div>
                                            </div>
                                            <div className="flex-col justify-start items-start gap-2 flex">
                                                <div className="text-black text-lg font-medium  tracking-tight">D. Hyphotesis</div>
                                                <div className=" text-justify text-black text-lg font-normal font-['Oxygen'] leading-[27px]">
                                                    User membutuhkan aplikasi jantra yang mudah untuk digunakan disegala usia
                                                    <br />
                                                    User membutuhkan informasi detail mengenai harga spare part di aplikasi
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start flex">
                                    <div className="h-[81px] flex-col justify-start items-start flex">
                                        <div className=" text-justify text-black text-lg font-normal font-['Oxygen'] leading-[27px]">
                                            {" "}
                                            Pada tahap empathize ini saya mendapatkan 15 responden dari hasil kuesioner yang telah saya bagikan ke sosial media. Saya menggunakan metode Quantitative Research. Sasaran yang ingin saya dapatkan
                                            dari penelitian ini adalah:
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[172px] flex-col justify-start items-start gap-1.5 flex">
                                    <div className="text-justify text-black text-lg font-normal font-['Oxygen'] leading-loose">Mengetahui seberapa banyak user yang tidak memperhatikan kaki-kaki pada mobil</div>
                                    <div className="text-justify text-black text-lg font-normal font-['Oxygen'] leading-loose">Mengetahui alasan pengguna mengapa mereka tidak mengecek atau service kaki-kaki mobilnya</div>
                                    <div className="text-justify text-black text-lg font-normal font-['Oxygen'] leading-loose">
                                        Mengatahui pengalaman pengguna pada saat menggunakan aplikasi jantra royale ketika ingin reservasi nomor antrian
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start flex">
                    <div className=" text-justify text-black text-lg font-normal font-['Oxygen'] leading-[27px]">
                        {" "}
                        Berdasarkan hasil kuesioner dan wawancara yang telah saya lakukan kepada pengguna mobil, Pengguna mobil menyatakan bahwa:
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-justify text-black text-lg font-normal font-['Oxygen'] leading-loose">Kaki-kaki mobil tidak terlalu penting untuk diperbaiki dan tidak urgent seperti halnya mesin mobil.</div>
                    <div className="text-justify text-black text-lg font-normal font-['Oxygen'] leading-loose">
                        Pengguna tidak melakukan service pada bengkel resmi karena harga penggantian spare part di bengkel resmi akan sangat mahal
                    </div>
                    <div className="text-justify text-black text-lg font-normal font-['Oxygen'] leading-loose">
                        Mereka juga merasa ketakutan total harga yang diberikan ketika service kaki-kaki mobil di pinggir jalan akan sangat mahal. Karena biasanya yang dipinggir jalan itu main tembak harga.
                    </div>
                    <div className="text-justify text-black text-lg font-normal font-['Oxygen'] leading-loose">
                        Tampilan desain interface pada aplikasi jantra royale kurang menarik, karena fitur yang disajikan hanya beberapa saja dan tidak berfungsi secara signifikan.
                    </div>
                    <div className="text-justify text-black text-lg font-normal font-['Oxygen'] leading-loose">Fitur promosi tidak terlihat, tidak memiliki fitur artikel informasi yang berkaitan dengan kaki-kaki mobil</div>
                </div>
                <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start flex">
                    <div className=" text-justify">
                        <span classNameName="text-black text-lg font-normal font-['Oxygen'] leading-[27px]"> Setelah mendapatkan data dari kuesioner kemudian kami membuat User Persona dan juga User Journey Map. </span>
                        <span classNameName="text-red-500 text-lg font-normal font-['Oxygen'] leading-[27px]">Informasi lebih lengkap dicantumkan pada Figjam</span>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Content;
