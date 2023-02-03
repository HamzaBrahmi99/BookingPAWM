import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"

import Sidebar from "../../components/sidebar/Sidebar"
import "./newHotel.scss"
import { useState } from "react"
import axios from "axios"

const NewHotel = ()=> {

    const [info, setInfo] = useState({})

    const handleChange = e=>{
        setInfo(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleClick = async e=>{
        e.preventDefault()
        try {
            const newhotel = {
                ...info,
                photos: "https://cdn-icons-png.flaticon.com/512/201/201426.png",
            }
            await axios.post("/hotels", newhotel);
    } catch (err) {console.log(err)}
    }

  return (
    <div className="newHotel">
        <Sidebar/>
        <div className="newHotelContainer">
            <h1>Aggiungi un Hotel</h1>
            <div className="datiContainer">
                <form>
                    <div className="formInput">
                        <label>Nome Hotel: </label>
                        <input onChange={handleChange} type="text" placeholder="nome hotel" id={"name"}/>
                    </div>
                    <div className="formInput">
                        <label>Tipo di Hotel: </label>
                        <input onChange={handleChange} type="text" placeholder="tipo hotel" id={"type"}/>
                    </div>
                    <div className="formInput">
                        <label>Città: </label>
                        <input onChange={handleChange} type="text" placeholder="città" id={"city"}/>
                    </div>
                    <div className="formInput">
                        <label>Indirizzo: </label>
                        <input onChange={handleChange} type="text" placeholder="indirizzo" id={"address"}/>
                    </div>
                    <div className="formInput">
                        <label>Titolo dell'Hotel: </label>
                        <input onChange={handleChange} type="text" placeholder="titolo dell'Hotel" id={"title"}/>
                    </div>
                    <div className="formInput">
                        <label>Descrizione: </label>
                        <input onChange={handleChange} type="text" placeholder="descrizione" id={"desc"}/>
                    </div>
                    <div className="formInput">
                        <label>Inserisci immagine Hotel: </label>
                        {/*<input type={"text"} placeholder="**Carico un'immagine predefinita per velocizzare le cose"  id={"photos"}></input>
                        <input onChange={handleChange} type="file"/>*/}
                    </div>
                    <div className="formInput">
                        <label>Inserisci prezzo: </label>
                        <input onChange={handleChange} type="number" id={"cheapestPrice"}/>
                    </div>
                    <button onClick={handleClick}>Salva Hotel</button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default NewHotel