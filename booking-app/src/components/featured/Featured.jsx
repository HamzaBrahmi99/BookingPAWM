import "./featured.css"

const Featured = ()=> {
  return (
    <div className="featured">
    <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/774955.jpg?k=40e1c55ebe9a5ed6f0031edacca344f08c76f5082650a1518f4fdf1e856685ae&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Camerino</h1>
            <h2>123 boh</h2>
        </div>
    </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/868594.jpg?k=7ad034e667278f1155e5ed37aee8284d4692fd96c43fa3c7039ecc9c512f5ee8&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>San Severino</h1>
                <h2>456 boh</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/637894.jpg?k=251b501506841e7821eb9985429777c44e89838dcff28d4e2d0ee4c75462117a&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Foligno</h1>
                <h2>789 boh</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured