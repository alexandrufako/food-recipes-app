import { useParams } from "react-router-dom";

const Details = () => {
    const params = useParams();
    console.log(params)
    return(
        <div className="details-container">
            Details - {params.id}
        </div>
    )
}

export default Details;