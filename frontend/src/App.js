import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import { AuthContext } from "./components/context/AuthContext";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import AdminHotelList from "./pages/adminList/AdminHotelList";
import AdminUserList from "./pages/adminList/AdminUserList";
import NewHotel from "./pages/newHotel/NewHotel";
import NewUser from "./pages/newUser/NewUser";
import Register from "./pages/register/Register";

function App() {

  const ProtectedRoute = ({children})=>{
    const {user} = useContext(AuthContext)
    //Se non c'è nessun user o non è Admin
    if(user === null){
      return <Navigate to="/" />
    }
    else if(!user.isAdmin ) {
      return <Navigate to="/" />
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
        <Route path="/allusers" element={<ProtectedRoute><AdminUserList/></ProtectedRoute>}/>
        <Route path="/allhotels" element={<ProtectedRoute><AdminHotelList/></ProtectedRoute>}/>
        <Route path="/newhotel" element={<ProtectedRoute><NewHotel/></ProtectedRoute>}/>
        <Route path="/newuser" element={<ProtectedRoute><NewUser/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
