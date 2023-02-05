import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../components/context/AuthContext"
import "./register.css"

const Register = () => {
    
    const { loading, error, dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
    const [info, setInfo] = useState({})

    const handleChange = e=>{
        setInfo(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("/auth/register", info);
          navigate("/login");
        } catch (err) {
          
        }
      };
      const handleReg = (e)=>{
        navigate("/login");
      }
return (
    <div className="login">
        <div className="lContainer">
          <h1>Registrati!</h1>
            <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
            <input type="text" placeholder="email" id="email" onChange={handleChange} className="lInput" />
            <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
        <button disabled={loading} onClick={handleClick} className="lButton">Registrati!</button>
        <button disabled={loading} onClick={handleReg} className="lButton">Sei già registrato?</button>
        
        {error &&<span>{error.message}</span>}
        </div>
    </div>
  )
}

export default Register