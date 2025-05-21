
import { Link, Outlet, useParams } from "react-router-dom";
import ProtectedPage from "./ProtectedPage";
import { useState } from "react";

function FirstSide() {
    const [item, setItem] = useState(false);

    const handlelogin = () => {
        setItem(true);
    };

    const handlelogout = () => {
        setItem(false);
    };

    if (item) {
        return (
            <div style={{ marginTop: "90px" }}>
                <div style={{
                    display: "flex", flexDirection: "row"
                }}>
                    <h2>Welcome..</h2>
                    <button onClick={handlelogout} style={{
                        width: "70px",
                        height: "25px", borderRadius: "4px", marginLeft: "13px",
                        marginTop: "28px"
                    }}>Sign out</button>
                </div>
                <ul>
                    <li>
                        <Link to="/">Protected Page</Link>
                    </li>
                    <li>
                        <Link to="/publicname">Public Page</Link>
                    </li>
                </ul>
            </div>
        );
    }

    return (
        <div style={{ marginTop: "90px" }}>
            <h2>You are not logged </h2>
            <ul>
                <li>
                    <Link to="/">Protected Page</Link>
                </li>
                <li>
                    <Link to="/publicname">Public Page</Link>
                </li>
            </ul>
            <main style={{ marginTop: "30px" }}>
                <Outlet context={{ handlelogin }} />
            </main>

        </div>
    );
}

export default FirstSide;