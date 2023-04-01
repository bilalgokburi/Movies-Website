import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className='home'>
      <div className="container content">
        <div className="row">
          <div className="col-lg-7 punto">
            <h1><Link to='/movies'>Select</Link></h1>
            <h2>The Movie</h2>
            <h3>Of The Day</h3>
          </div>
          <div className="col-lg-5 landing">
            <img  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*A16jtswEFDQ6fm-G2bh8rA.png" alt="movies" />
          </div>
        </div>
      </div>
  </main>
  )
}

export default Home