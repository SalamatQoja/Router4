import React from "react";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Main() {
    return (
        <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
        </BrowserRouter>
    );
}

export default Main;