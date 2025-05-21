import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Layout from "./Layout";
import Users from "./Users";
import User from "./User";
import Homes from "./Homes";



function MainTask2() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homes />} />
                    <Route path="users" element={<Users />}>
                        <Route path=":username" element={<User />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default MainTask2;
