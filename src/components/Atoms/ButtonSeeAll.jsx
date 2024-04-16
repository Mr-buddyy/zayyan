import React from "react";

function ButtonSeeAll(props) {
    return (
        <a href={props.link} class="mt-[42px] mb-[46px] px-4 py-3.5 bg-blue-500 rounded border border-white justify-center items-center gap-2 inline-flex">
            <div class="text-center text-gray-50 text-base font-medium  tracking-tight">{props.desc}</div>
        </a>
    );
}

export default ButtonSeeAll;
