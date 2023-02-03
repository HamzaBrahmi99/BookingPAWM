import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import useFetch from "../../hooks/useFetch"
import { useLocation, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { SearchContext } from "../../components/context/SearchContext"
import { AuthContext } from "../../components/context/AuthContext"
import axios from "axios"


function Hotel() {
  const location = useLocation()
  //Restituisce il terzo elemento della location 0/1/2 che è l'id dell'hotel
  const id = location.pathname.split("/")[2]
  const { data,loading,error } = useFetch(`/hotels/find/${id}`)

  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const [active, setActive] = useState(false);
  const afterClick = () => {
    setActive(!active);
  };


  const handleClick = async () => {
    try {
      if (user) {
          console.log("prima:"+data.rooms)
          if(!active){
            afterClick()
            const r = data.rooms
            const res = await axios.put((`/hotels/reserve/${data._id}`), {
              rooms:  r + options.room,
            });
            return res.data;
          } else {
            afterClick()
            const r = data.rooms
            if(r>0){
              const res = await axios.put((`/hotels/reserve/${data._id}`), {
                rooms:  r - options.room,
              });
              return res.data;

            } else {
              const res = await axios.put((`/hotels/reserve/${data._id}`), {
                rooms:  0,
              });
              return res.data;

            }
            
          }
    
        } else {
          navigate("/login");
        }
    } catch (err) {
      
    }
    
  };

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      {loading ?"Loading..." : (
        <div className="hotelContainer">
          <div className="hotelWrapper">
            <button  onClick={handleClick} style={{ backgroundColor: active ? "red" : "#0071c2" }} className="bookNow">{active ? "Annulla prenotazione":"Prenota ora!"}</button>
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
                <h1>Completa la prenotazione!</h1>{console.log(days)}
                <h2><b>€{days<1 ? 1 * data.cheapestPrice * options.room : days * data.cheapestPrice * options.room} ({days<1 ? 1 : days} notti)</b></h2>
                <button  onClick={handleClick} style={{ backgroundColor: active ? "red" : "#0071c2" }}>{active ? "Annulla prenotazione":"Prenota ora!"}</button>              </div>
            </div>
          </div>
          <div className="footer"></div>
        </div>)}
    </div>
  )
}

export default Hotel