import { useParams } from "react-router-dom";

export default function User() {
    const { username } = useParams();

    if (username === "Peter") {
        return <h2 style={{color: "blue"}}> {username}</h2>;
    }

    return <div style={{color: "blue"}}>{username}</div>;
}
