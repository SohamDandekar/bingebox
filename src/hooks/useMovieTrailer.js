import { API_OPTIONS }  from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData ? filterData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        !trailerVideo && getMovieTrailer();
    }, []);
}

export default useMovieTrailer;