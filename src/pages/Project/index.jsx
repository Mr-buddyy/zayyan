import React from "react";
import { Prjct, Navbar, Footer } from "../../components/index";

function Project() {
    return (
        <div data-theme="light">
            <Navbar />{" "}
            <div className="pb-[57px]">
                <Prjct showAll={true} showProjectSection={true}/>
            </div>{" "}
            <Footer />
        </div>
    );
}

export default Project;
