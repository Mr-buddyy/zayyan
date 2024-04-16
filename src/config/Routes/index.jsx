import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Project, Portofolio } from "../../pages";
import PortofolioDetail1 from "../../pages/Portofolio/PortofolioDetail1";
import PortofolioDetail2 from "../../pages/Portofolio/PortofolioDetail2";
import PortofolioDetail3 from "../../pages/Portofolio/PortofolioDetail3";
import PortofolioDetail4 from "../../pages/Portofolio/PortofolioDetail4";
import PortofolioDetail5 from "../../pages/Portofolio/PortofolioDetail5";
import PortofolioDetail6 from "../../pages/Portofolio/PortofolioDetail6";
import PortofolioDetail7 from "../../pages/Portofolio/PortofolioDetail7";
import PortofolioDetail8 from "../../pages/Portofolio/PortofolioDetail8";
import PortofolioDetail9 from "../../pages/Portofolio/PortofolioDetail9";
import PortofolioDetail10 from "../../pages/Portofolio/PortofolioDetail10";
import PortofolioDetail11 from "../../pages/Portofolio/PortofolioDetail11";

const index = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tentang" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route exact path="/portofolio" element={<Portofolio />} />
                <Route path="/portofolio/1" element={<PortofolioDetail1 />} />
                <Route path="/portofolio/2" element={<PortofolioDetail2 />} />
                <Route path="/portofolio/3" element={<PortofolioDetail3 />} />
                <Route path="/portofolio/4" element={<PortofolioDetail4 />} />
                <Route path="/portofolio/5" element={<PortofolioDetail5 />} />
                <Route path="/portofolio/6" element={<PortofolioDetail6 />} />
                <Route path="/portofolio/7" element={<PortofolioDetail7 />} />
                <Route path="/portofolio/8" element={<PortofolioDetail8 />} />
                <Route path="/portofolio/9" element={<PortofolioDetail9 />} />
                <Route path="/portofolio/10" element={<PortofolioDetail10 />} />
                <Route path="/portofolio/11" element={<PortofolioDetail11 />} />
            </Routes>
        </Router>
    );
};

export default index;
