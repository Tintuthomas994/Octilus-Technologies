import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalInfo from "./Personal/PersonalInfo";
import JobInfo from "./Personal/JobInfo";
import Success from "./Personal/Success";
const Routers = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<PersonalInfo />} />
                    <Route path="/JobInfo" element={<JobInfo />} />
                    <Route path="/Success" element={<Success />} />
                </Routes>
            </Router>
        </>
    );
};
export default Routers;
