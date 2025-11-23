import { StarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"
import timeFormat from "../lib/timeformat";



const MovieCard = ({movie}) =>{

  const navigate = useNavigate()

  return(
    <div className="flex flex-col justify-between p-2 bg-gray-800
    rounded-2xl hover:-translate-y-1 transition duration-300 w-57">

        <img onClick={() => {navigate(`/movies/${movie._id}`); scrollTo(0, 0)}}
         src={movie.backdrop_path} alt="" className="rounded-lg h-52 w-full
        object-cover object-right-bottom cursor-pointer"/>
          <p className="font-semibold mt-2 truncate">{movie.title}</p>
          <p className="text-sm text-gray-400 mt-2">
            {new Date(movie.release_date).getFullYear()} &#8226; {movie.genres.slice(0,2).map(genre => genre.name).join(" | ")} &#8226; {timeFormat(movie.runtime)}
          </p>

          <div className="flex items-center justify-between mt-4 pb-3">
            <button onClick={() => {navigate(`/movies/${movie._id}`); scrollTo(0, 0)}} className="px-4 py-2 text-xs bg-[#b91c1c] hover:bg-[var(--color-primary-dull)] transition rounded-full font-medium
            cursor-pointer ">By Tickets</button>
            <p className="flex items-center gap1 text-sm text-gray-400 mt-1 pr-1">
              <StarIcon className="w-4 h-4 text-[#b91c1c] fill-[#b91c1c]"/>
              {movie.vote_average.toFixed(1)}
            </p>
          </div>
    </div>
  )
  
}
export default MovieCard