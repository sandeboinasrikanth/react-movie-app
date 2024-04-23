import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  // console.log(id)
  const movie = movieList[id];

  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const navigate = useNavigate();
  return (
    <div>
      <p>Movie Details Page {id}</p>
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title="VIKRAM HITLIST (TELUGU) Trailer | Kamal Haasan | Vijay Sethupathi, FahadhFaasil | AnirudhRavichander"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
      <div className='movie-detail-container'>
        <div className='movie-specs'>
          <h2 className='movie-name'>{movie.name}</h2>
          <p style={styles} className='movie-rating'>{movie.rating}</p>
        </div>
        <p className='movie-summary'>{movie.summary}</p>

        <Button onClick={() => navigate(-1)}  variant="contained" startIcon={<ArrowBackIosIcon />}>
          Back
        </Button>
      </div>
    </div>
  );
}
