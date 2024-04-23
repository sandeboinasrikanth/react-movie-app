import { useState } from 'react';
import { Counter } from './Counter';
import { useNavigate,Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function Movie({ movie, id }) {
  // const movie = {
  //   pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-T1Un_k_r3sDR1uhgnPrTZWGsXjRgI_jNxWyCRtxgetn6GMdZ7lrazoCC24aiToNR98&usqp=CAU",
  //   name:"Breaking Bad",
  //   rating:"⭐9.5",
  //   summary:"A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
  // }
  //rating > 8 => green
  //Conditional Styling
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  const paraStyle = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();
  return( 
  <Card className='movie-container' sx={{height:"min-content"}}>
    <img src={movie.poster} alt={movie.name} className='movie-poster' />
    <CardContent>
      <div className='movie-specs'>
        <h2 className='movie-name'>
          {movie.name}
          <IconButton color='primary' onClick={() => setShow(!show)} aria-label="Toggle Summary">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          
          <IconButton color='primary' onClick={()=>navigate(`/movies/${id}`)} aria-label="MovieDetails">
            <InfoIcon />
          </IconButton>
        </h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      
      {/* <Link to={`/movies/${id}`} >Info</Link> */}

      {/* conditional Styling */}
      {/* <p style={paraStyle} className="movie-summary">{movie.summary}</p> */}

      {/* conditional Rendering */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
    </CardContent>

    <CardActions>
      <Counter />
    </CardActions>

  </Card>
)}
