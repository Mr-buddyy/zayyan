import React from "react";

function Skill(props) {
    return (
        <div>
            <div className="w-[95px] h-[27px] px-2 py-1.5 bg-sky-50 rounded border border-blue-500 justify-center items-center gap-2 inline-flex">
                <div className="text-center text-blue-500 text-[10px] font-normal tracking-tight">{props.skill}</div>
            </div>
        </div>
    );
}

export default Skill;
