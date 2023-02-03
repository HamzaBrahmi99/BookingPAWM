import React from 'react'
import Datatable from '../../components/datatable/Datatable'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../../components/table/Table'
import Table from '../../components/table/Table'
import "./adminList.scss"


export default function AdminUserList() {
  return (
    <div className="newHotel">
        <Sidebar/>
        <div className="newHotelContainer">
            <h1>Lista di tutti gli Utenti</h1>
            <div className="datiContainer">
                <Datatable/>
            </div>
        </div>
    </div>
  )
}