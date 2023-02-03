import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import { SearchItem } from "../../components/searchItem/SearchItem"
import useFetch from "../../hooks/useFetch"

function List() {

  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destination)
  const [dates, setDates] = useState(location.state.dates)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false)

  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)

  const { data,loading,error,reFetch } = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max||999}`)

  
  const handleClick = ()=>{
    reFetch()
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destinazione/nome struttura:</label>
            <input onChange={(e)=>setDestination(e.target.value.toLowerCase())} placeholder={destination} type="text" id="dest"/>
          </div>
          <div className="lsItem">
            <label>Check-in Date</label>
            <span onClick={()=>setOpenDate(!openDate)}>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
            {openDate && <DateRange 
              onChange={(item)=>setDates([item.selection])} 
              minDate={new Date()}
              ranges={dates}
            />}
          </div>
          <div className="lsItem">
            <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">Min prezzo <small>per notte</small></span>
                <input type="number" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Max prezzo <small>per notte</small></span>
                <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput"/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adulti</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Bambini</span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Camere</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
              </div>
            </div>
          </div>
          <button onClick={handleClick}>Cerca</button>
        </div>
        <div className="listResult">
        {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
        </div>
        </div>
      </div>
    </div>
  )
}

export default List