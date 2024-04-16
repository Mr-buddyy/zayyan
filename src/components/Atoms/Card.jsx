import React from "react";
import ButtonSecond from "../../components/Atoms/ButtonSecond";

function Card(props) {
    const { title, desc, skills, link, image } = props;

    // Jika prop skills tidak diisi, set default value ke array kosong
    const skillsToShow = skills || [];

    return (
        <div className="w-full card bg-base-100 shadow-xl max-w-lg xl:max-w-[550px] ">
            <figure className="">
                <img src={image} className="rounded-t-xl" />
            </figure>
            <div className="card-body text-start p-[16px]">
                <div className="flex flex-row gap-[8px]">
                    {skillsToShow.map((skill, index) => (
                        <div key={index} className=" px-2 py-1.5 bg-sky-50 rounded border border-blue-500 justify-center items-center gap-2 inline-flex">
                            <div className="text-center text-blue-500 text-[10px] font-normal tracking-tight">{skill}</div>
                        </div>
                    ))}
                </div>
                <h2 className="card-title text-lg">{title}</h2>
                <p className="text-xs">{desc}</p>
                <a href={link} className="card-actions">
                    <ButtonSecond />
                </a>
            </div>
        </div>
    );
}

export default Card;
