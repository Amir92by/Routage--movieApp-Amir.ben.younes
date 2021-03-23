import { Link } from "react-router-dom";
// import { Button } from 'react-bootstrap';
import React,{useState,useEffect} from 'react'
import moviesData from "../MoviesData";
import '../Movie/Movie.css'

const Movie = ({match}) => {

    const [movie, setMovie] = useState({})

   useEffect(() => {

    setMovie(moviesData.find(movie=> movie.id === +match.params.id))
   }, [match.params.id])

    return (
        <div className='Description'>
   
            
            <iframe  style={{border:'1px solid #FFC107', borderRadius:'20px',marginBottom:'10px'}} width="727" height="409" src={movie.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="This is a unique title" />
            <br/>
            <h4 className='title-Description'> <strong>Description</strong>  <br/> {movie.description} </h4>
            <Link to='/'>
            <button type="button" class="btn btn-outline-warning"> Go Home</button>
            </Link>
        </div>
    )
}

export default Movie
