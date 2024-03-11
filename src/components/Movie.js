import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){
    return (
    <div>
        <img src = {coverImg} alt = {title} />
        <h2>
            <Link to={`/movie/${id}`}>
                {title}
            </Link>
        </h2>
        <p>{summary}</p>
        <ul>
            <li>
                {genres.map((g)=>(<li key ={g}>{g}</li>))}
            </li>
        </ul>
   </div>
);
}


Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired, //coverImg가 없으면 경고 문구 띄움
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;