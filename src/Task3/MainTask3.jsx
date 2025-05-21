import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstSide from "./FirstSide";
import PublicName from "./PublicPage";
import ProtectedPage from "./ProtectedPage";

function MainTask3() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstSide />}>
                    <Route index element={<ProtectedPage />} />
                    <Route path=":publicname" element={<PublicName />} />
                </Route>
            </Routes>
        </Router>
        
    );

}


export default MainTask3;