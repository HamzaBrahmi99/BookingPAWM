import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"

import Sidebar from "../../components/sidebar/Sidebar"
import "./newUser.scss"
import { useState } from "react"
import axios from "axios"

const NewUser = ()=> {

    const [info, setInfo] = useState({})

    const handleChange = e=>{
        setInfo(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleClick = async e=>{
        e.preventDefault()
        console.log(info)
        try {
            const newuser = {
                ...info,
                photos: "https://cdn-icons-png.flaticon.com/512/201/201426.png",
            }
            await axios.post("/auth/register", newuser);
    } catch (err) {console.log(err)}
    }

  return (
    <div className="newHotel">
        <Sidebar/>
        <div className="newHotelContainer">
            <h1>Aggiungi un Utente</h1>
            <div className="datiContainer">
                <form>
                    <div className="formInput">
                        <label>Username: </label>
                        <input onChange={handleChange} type="text" placeholder="username" id={"username"}/>
                    </div>
                    <div className="formInput">
                        <label>Email: </label>
                        <input onChange={handleChange} type="text" placeholder="email" id={"email"}/>
                    </div>
                    <div className="formInput">
                        <label>Password: </label>
                        <input onChange={handleChange} type="password" id={"password"}/>
                    </div>
                    <div className="formInput">
                        <label>IsAdmin: </label>
                        <input onChange={handleChange} type="checkbox" value= "true" id={"isAdmin"}/>
                    </div>
                    <button onClick={handleClick}>Salva Utente</button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default NewUser