import "./admin.scss"
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Datatable from '../../components/datatable/Datatable'
import { useContext } from "react"
import { AuthContext } from "../../components/context/AuthContext"

function Admin() {

  return (
    <div className="admin">
      <Sidebar/>
        <div className="adminContainer">
            <h1>Benvenuto Admin!</h1>
            Qui potrai gestire, aggiungendo, eliminando o aggiornando, tutti gli hotel e gli utenti!
        </div>
    </div>
  )
}

export default Admin