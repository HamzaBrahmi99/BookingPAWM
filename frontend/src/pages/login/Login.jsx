import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../components/context/AuthContext"
import "./login.css"

const Login = () => {
    const [ credentials, setCredentials ] = useState({
        username:undefined,
        password:undefined,        
    })
    const { loading, error, dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleChange = (e)=>{
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value}))
    }
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("/auth/login", credentials);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
          if(res.data.details.isAdmin) navigate("/admin")
           else navigate("/");
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };

return (
    <div className="login">
        <div className="lContainer">
          <h1>Login</h1>
        <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
        <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
        <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
        {error &&<span>{error.message}</span>}
        </div>
    </div>
  )
}

export default Login