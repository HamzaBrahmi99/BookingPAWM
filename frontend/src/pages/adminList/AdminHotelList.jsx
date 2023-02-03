import Datatable from "../../components/datatable/Datatable"
import Sidebar from "../../components/sidebar/Sidebar"
import List from "../../components/table/Table"
import "./adminList.scss"

export default function  AdminHotelList() {
  return (
    <div className="newHotel">
        <Sidebar/>
        <div className="newHotelContainer">
            <h1>Lista di tutti gli Hotel</h1>
            <div className="datiContainer">
                <Datatable/>
            </div>
        </div>
    </div>
    
  )
}
