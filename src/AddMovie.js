import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary
    };
    // Copy the movieList & add to new MovieList
    setMovieList([...movieList, newMovie]);
    console.log(newMovie);
  };


  return (
    <div className='add-movie-form'>
      <TextField
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="filled" />
      <TextField
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        variant="filled" />
      <TextField
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="filled" />
      <TextField
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        variant="filled" />

      {/* copy the movielist & add the new movie to it */}
      <Button onClick={addMovie} variant="outlined">Add movie</Button>

    </div>

  );
}
