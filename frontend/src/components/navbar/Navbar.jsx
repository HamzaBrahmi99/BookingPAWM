import "./navbar.css"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Navbar() {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const { loading, error, dispatch} = useContext(AuthContext)
  const handleLogout = (e)=>{
      e.preventDefault();
      dispatch({ type: "LOGOUT" });
      navigate("/");
  }
  return (
    <div className="navbar">
        <div className="navConteiner">
          <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
            <span className="logo">Booking</span>
          </Link>
            {user ? ("Benvenuto " + user.username) : (
              <div className="navItems">
                <Link to="/register">
                  <button className="navButton">Register</button>
                </Link>
                <Link to="/login">
                  <button className="navButton">Login</button>
                </Link>
              </div>
            )}
            {user && <button onClick={handleLogout} className="navButton">Logout</button>}
        </div>
    </div>
  )
}

export default Navbar