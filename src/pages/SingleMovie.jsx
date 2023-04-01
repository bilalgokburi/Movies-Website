import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai';

function SingleMovie() {
  const navigate = useNavigate()
  const { movieId } = useParams()
  const [details, setDetails] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=c6a430182fee351f38e1f95aba8df7e8&language=en-US&page=1'
    await axios(url)
      .then(data => {
        setDetails(data.data.results)
      })
  }

  // match the data 
  const singleMovie = details.find(detail => detail.id === parseInt(movieId))

  // keep the singleMovie defined even if page refreshed
  if (!singleMovie) {
    return <main><div className='text-center pt-5'>Loading...</div></main>
  }

  return (
    <main>
      <div className='container content single-p'>
      <div className="row">
        <div className="col-lg-5">
          <img src={`https://image.tmdb.org/t/p/original${singleMovie.backdrop_path}`} alt="" />
        </div>
        <div className="col-lg-7">
          <h2> {singleMovie.title} </h2>
          <p className='vote-average'> <AiFillStar style={{
      color: 'rgb(245, 197, 24)'
    }} />  <strong>{singleMovie.vote_average} / 10</strong> </p>
          <p> {singleMovie.overview} </p>

          <br />
          <button className='btn btn-dark btn-sm' onClick={() => navigate(-1)}>BACK</button> &nbsp;
          <button className='btn btn-dark btn-sm' onClick={() => navigate('/movies')}>NAVIGATE TO MOVIES</button> &nbsp;
        </div>
      </div>
    </div>
    </main>
  )
}

export default SingleMovie