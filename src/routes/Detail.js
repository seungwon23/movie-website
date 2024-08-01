import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail(){
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDetails(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
      <div>
        {loading ? <h1>Loading...</h1> : 
            <div>
                <h2>Details</h2>
                <img src={details.medium_cover_image} />
                <h3>Title: {details.title}</h3>
                Run Time: {details.runtime}
                <br />
                Ratings: {details.rating}
            </div>
        }
      </div>
    );
}

export default Detail;