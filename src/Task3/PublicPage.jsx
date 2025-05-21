import { useParams } from "react-router-dom";

export default function PublicName(){
    const {publicname} = useParams;

    return <h2>{publicname}Public{publicname}</h2>
}