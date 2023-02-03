import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import { SearchContext } from "../context/SearchContext";
import "./propertyList.css"

const PropertyList = () => {

    const {data,loading,error,reFetch} = useFetch("/hotels/countByType");
    
  return (
    <div className="pList">
        {loading ? ("Loading...!")
        :(<>   
            <div className="pListItem">
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>{data[0]?.type}</h1>
                    <h2>{data[0]?.count} {data[0]?.type}</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>{data[1]?.type}</h1>
                    <h2>{data[1]?.count} {data[1]?.type}</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>{data[2]?.type}</h1>
                    <h2>{data[2]?.count} {data[2]?.type}</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450056.jpeg?k=251e2507d43a24a4c58bb961b8d157147d56efbf91b49f9606bc768c58f581e4&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>{data[3]?.type}</h1>
                    <h2>{data[3]?.count} {data[3]?.type}</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450093.jpeg?k=aa5cc7703f3866af8ffd6de346c21161804a26c3d0a508d3999c11c337506ae1&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>{data[4]?.type}</h1>
                    <h2>{data[4]?.count} {data[4]?.type}</h2>
                </div>
            </div>
        </>)}
    </div>
  )
}
export default PropertyList