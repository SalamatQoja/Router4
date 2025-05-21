import { BrowserRouter, Routes, Route } from "react-router-dom";
import PizzaBuilder from "./PizzaBuilder";
import './PizzaCss.css';

function PizzaMain() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PizzaBuilder />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PizzaMain;