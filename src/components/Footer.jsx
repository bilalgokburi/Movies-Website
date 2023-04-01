import { Link, NavLink } from 'react-router-dom'


function Footer() {
  return (
    <footer className='footer'>
    <div className="container">

      <nav className="d-flex justify-content-center">
      <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/movies"
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
          >
            Movies
          </NavLink>
          <NavLink
            to=""
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
      </nav>
      <div className="copyrights">
        &copy; 2022 <Link to='/'>MovieDB</Link> - All Rights Reservered.
      </div>

    </div>
  </footer>
  )
}

export default Footer