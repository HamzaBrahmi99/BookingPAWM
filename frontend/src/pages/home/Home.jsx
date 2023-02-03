import Featured from "../../components/featured/Featured"
import { Header } from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import "./home.css"
const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Numero di strutture per tipologia</h1>
          <PropertyList/>
          <div className="footer"></div>
        </div>
    </div>
  )
}

export default Home