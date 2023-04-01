import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Movies({ setMovies, movies }) {
  const [loader, setLoader] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=c6a430182fee351f38e1f95aba8df7e8&language=en-US&page=1';
    await axios(url).then((data) => {
      setMovies(data.data.results);
      setLoader(false);
    });
  }

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 header">
              <h1>Movies</h1>
              <input
                placeholder="Search Movie"
                id="search"
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Movies</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container content">
        {loader ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="row movies-row">
            {movies
              .filter((val) =>
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((movie) => {
                return (
                  <div className="col-lg-4" key={movie.id}>
                    <div className="card">
                      <div className="img-wrap">
                        <img
                          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                          alt=""
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="vote">
                            <strong className="price">
                              {movie.vote_average}
                            </strong>
                          </span>
                          <Link
                            to={`/movies/${movie.id}`}
                            className="btn btn-dark btn-sm"
                          >
                            DETAILS &#8594;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </main>
  );
}

export default Movies;