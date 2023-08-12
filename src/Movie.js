import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




export function Movie({ movie, id }) {

  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-specs">
        <h4 className="movie-name">{movie.name}</h4>
        <p style={styles} className="movie-rating">⭐ {movie.rating}</p>
      </div>

      <IconButton onClick={() => setShow(!show)} color="primary" aria-label="Toggle Summary">
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>

      <IconButton onClick={() => navigate(`/movies/${id}`)} color="primary" aria-label="Movie Details"><InfoIcon /></IconButton>
      {/* <p style={paraStyles} className="movie-summary">{movie.summary}</p> */}

      {/* conditional rendering */}
      {show ? <p style={paraStyles} className="movie-summary">{movie.summary}</p> : null}

      <Counter />
    </div>
  );
}
