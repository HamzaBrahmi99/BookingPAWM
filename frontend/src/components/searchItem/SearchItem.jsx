import { Link } from "react-router-dom"
import "./searchItem.css"

export const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
        <img src={item.photos[0]} alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siSubtitle">{item.title}</span>
            <span className="siFeatures">{item.desc}</span>
        </div>
        <div className="siDetails">
            <div className="siPrice">{item.cheapestPrice}</div>
            <Link to={`/hotels/${item._id}`}>
              <button className="siCheckButton">Vedi disponibilità</button>
            </Link>
        </div>
    </div>
  )
}
