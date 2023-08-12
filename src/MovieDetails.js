import { useNavigate, useParams } from "react-router-dom";

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  // console.log(id)
  // console.log(useParams())
  // console.log(movieList[id])
  const movie = movieList[id];

  // const movie = {
  //   "name": "Iron man 2",
  //   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
  //   "rating": 7,
  //   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
  //   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
  // }
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const navigate = useNavigate();

  return (
    <div>
      <p>Movie Details page {id} </p>
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title="Iron Man 2 Trailer #2 (2010) - Marvel Movie HD"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h4 className="movie-name">{movie.name}</h4>
          <p style={styles} className="movie-rating">⭐ {movie.rating}</p>
        </div>
        <p>{movie.summary}</p>

      </div>
      <button onClick={() => navigate(-1)} className="btn">Back</button>

    </div>
  );
}
