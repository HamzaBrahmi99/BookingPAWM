import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"


function Hotel() {
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon incon={faLocationDot}/>
            <span>Elton St 125 New York</span>
          </div>
          <div className="hotelImages">
            <div className="hotelImgWrapper">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/121399207.jpg?k=16e7a6131ee3cc1bc92346d473b167d92eb9be1a35172e03db8426b47041e91f&o=&hp=1" alt="" className="hotelImg" />
            </div>
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Soggiorna nel cuore di Praga</h1>
              <p className="hotelDesc">Ex residenza di Re Giorgio, il 3 Epoques Apartments by Prague Residences è il
               più antico edificio rimasto sulla riva destra del Fiume Moldava a Praga e dista appena 4 minuti
                a piedi dalla Piazza della Città Vecchia e dal Ponte Carlo.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Completa la prenotazione!</h1>
              <b>€400</b>
              <button>Prenota ora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel