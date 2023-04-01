import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="logo">
          <Link to="/" className="brand">
            MDB
          </Link>
        </div>
        <nav className="nav">
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
            to="/sign-in"
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link diff-active"
            }
          >
            Log In
          </NavLink>
          <NavLink
            to="/sign-up"
            className={(navData) =>
              navData.isActive ? "nav-link active" : "nav-link diff-active2"
            }
          >
            Sign Up
          </NavLink>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header