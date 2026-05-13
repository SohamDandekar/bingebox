import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer";


const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe className="w-screen aspect-video pointer-events-none" src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0"} title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackground;