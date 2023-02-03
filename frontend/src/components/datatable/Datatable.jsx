import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { hotelColumns, userColumns, userRows } from "../../datasource";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
  
const Datatable = () => {

  const location = useLocation();
  let typeColumn, message;
  let path = location.pathname.split("/")[1];
  if(path === "allusers"){
    path="users"
    typeColumn = userColumns
    message = "user"
  }else{
    path="hotels"
    message = "hotel"
    typeColumn=hotelColumns
  }
  const [list, setList] = useState([]);
  const [hotel, setHotel] = useState([])
  const { data, loading, error } = useFetch(`/${path}`);

  useEffect(() => {
      setList(data);
    }, [data]);
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`/${path}/${id}`);
        setList(list.filter((item) => item._id !== id));
      } catch (err) {}
    };

    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row._id)}
              >
                Elimina
              </div>
            </div>
          );
        },
      },
    ];

  return (
    <div className="datatable" style={{ height: 400, width: '100%' }}>
      <div className="datatableTitle">
        Aggiungi un {message==="user" ? "Utente" : "Hotel"}
        <Link to={`/new${message}`} style={{textDecoration:"none"}} className="link">
        Aggiungi {message==="user" ? "Utente" : "Hotel"}
        </Link>
      </div>
      <DataGrid
      rows={list}
      columns={typeColumn.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
      getRowId={row=>row._id}
    />
    </div>
  )
}

export default Datatable