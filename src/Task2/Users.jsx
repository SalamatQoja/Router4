import {  Outlet } from "react-router-dom";

function Users() {
    return (
        <div>
            <h2 style={{color: "blue"}}>Users:</h2>
            <Outlet/>
        </div>
    );
}

export default Users;
