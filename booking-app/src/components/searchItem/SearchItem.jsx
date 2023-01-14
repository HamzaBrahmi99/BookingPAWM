import "./searchItem.css"

export const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/72905401.webp?k=abcb71543a55a5d7cb7ce27869da1816a77efdf341c4eab2405ad2afbf5e7187&o=&s=1" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Da Foschetta</h1>
            <span className="siSubtitle">Camera Matrimoniale/Doppia con Letti Singoli con Vista Giardino</span>
            <span className="siFeatures">Letti: 1 matrimoniale o 2 singoli</span>
        </div>
        <div className="siDetails">
            <div className="siPrice">€400</div>
            <button className="siCheckButton">Vedi disponibilità</button>
        </div>
    </div>
  )
}
