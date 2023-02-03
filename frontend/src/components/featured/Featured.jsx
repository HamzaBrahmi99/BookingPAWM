import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { SearchContext } from "../context/SearchContext"
import "./featured.css"

const Featured = ()=> {
    const {data,loading,error,reFetch} = useFetch("/hotels/countByCity?cities=camerino,san severino,foligno")
    const {dispatch} = useContext(SearchContext)
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key:'selection'
        }
      ]);
    
      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1,
      });

  const navigate = useNavigate()
    const handleSearch = (destination)=>{
    console.log(destination)
    dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
    navigate("/hotels", { state: { destination, dates, options }} )
    }
  return (
    <div className="featured">
        {loading ? ("Loading plase wait") :
        <>
            <div className="featuredItem" onClick={()=>handleSearch("camerino")}>
               <img src="https://cf.bstatic.com/xdata/images/city/600x600/774955.jpg?k=40e1c55ebe9a5ed6f0031edacca344f08c76f5082650a1518f4fdf1e856685ae&o=" alt="" className="featuredImg" />
               <div className="featuredTitles">
                    <h1>Camerino</h1>
                    <h2>{data[0]} hotel</h2>
                </div>
            </div>
            <div className="featuredItem" onClick={()=>handleSearch("san severino")}>
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/868594.jpg?k=7ad034e667278f1155e5ed37aee8284d4692fd96c43fa3c7039ecc9c512f5ee8&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>San Severino</h1>
                    <h2>{data[1]}  hotel</h2>
                </div>
            </div>
            <div className="featuredItem" onClick={()=>handleSearch("foligno")}>
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/637894.jpg?k=251b501506841e7821eb9985429777c44e89838dcff28d4e2d0ee4c75462117a&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Foligno</h1>
                    <h2>{data[2]} hotel</h2>
                </div>
            </div>
        </>}
    </div>
  )
}

export default Featured