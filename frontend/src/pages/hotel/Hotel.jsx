import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import useFetch from "../../hooks/useFetch"
import { useLocation } from "react-router-dom"


function Hotel() {
  const location = useLocation()
  //Restituisce il terzo elemento della location 0/1/2 che è l'id dell'hotel
  const id = location.pathname.split("/")[2]
  const { data,loading,error } = useFetch(`/hotels/find/${id}`)

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      {loading ?"Loading..." : (
        <div className="hotelContainer">
          <div className="hotelWrapper">
            <button className="bookNow">Prenota ora!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon incon={faLocationDot}/>
              <span>{data.address}</span>
            </div>
            <div className="hotelImages">
              <div className="hotelImgWrapper">
                <img src={data.photos} alt="" className="hotelImg" />
              </div>
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Completa la prenotazione!</h1>
                <h2><b>{data.cheapestPrice}</b></h2>
                <button>Prenota ora</button>
              </div>
            </div>
          </div>
          <div className="footer"></div>
        </div>)}
    </div>
  )
}

export default Hotel