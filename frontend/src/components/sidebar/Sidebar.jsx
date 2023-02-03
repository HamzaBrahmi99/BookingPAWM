import "./sidebar.scss"
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
  

const Sidebar = () => {
  const navigate = useNavigate()

  const { loading, error, dispatch} = useContext(AuthContext)
  const handleLogout = (e)=>{
      e.preventDefault();
      dispatch({ type: "LOGOUT" });
      navigate("/");
  }

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/admin" style={{ textDecoration: "none" }}>
            <span className="logo">DashBoard Admin</span>
            </Link>
        </div>
        <hr />
        
        <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/newhotel" style={{ textDecoration: "none" }}>
            <li>
              <span>Aggiungi hotel</span>
            </li>
          </Link>
          <Link to="/newuser" style={{ textDecoration: "none" }}>
            <li>
              <span>Aggiungi utente</span>
            </li>
          </Link>


          <p className="title">LISTS</p>
          <Link to="/allusers" style={{ textDecoration: "none" }}>
            <li>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/allhotels" style={{ textDecoration: "none" }}>
            <li>
              <span>Hotels</span>
            </li>
          </Link>
          
          <p className="title">Logout</p>
          <li>
            <Link onClick={handleLogout} style={{ textDecoration: "none" }}>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>



    </div>
  )
}
export default Sidebar;