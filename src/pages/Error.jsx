import { Link } from 'react-router-dom'

function Error() {
  return (
    <main  style={{backgroundColor: '#fff', color: '#444'}}>
       <div className="pg-header">
        <div className="container">
          <h1>404 Error</h1>
        </div>
      </div>
      <div className="container content">
        <p>Page not found...</p>
        <Link to='/' className='btn btn-primary'>Go To Home Page</Link>
      </div>
    </main>
  )
}

export default Error