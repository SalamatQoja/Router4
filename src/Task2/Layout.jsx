import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div style={{marginTop: "70px"}}>
            <div style={{ display: "flex" }}>
                <nav style={{ background: "#000", color: "#fff", padding: "10px", marginTop: "70px" }}>
                    <ul>
                        <li><Link to="/" style={{ color: "white" }}>Hom:</Link></li>
                        <li>
                            <Link to="/users" style={{ color: "white" }}>Users:</Link>
                            <ul>
                                <li><Link to="/users/Vasya" style={{ color: "white" }}>Vasya</Link></li>
                                <li><Link to="/users/Peter" style={{ color: "white" }}>Peter</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <main style={{ marginLeft: "20px", padding: "10px", marginTop: "40px" }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Layout;