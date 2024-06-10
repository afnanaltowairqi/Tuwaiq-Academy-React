import LocationIcon from './assets/location_icon.png'
import CaleanderIcon from './assets/caleander_icon.png'
import DateIcon from './assets/caleander2_icon.png'
import Expired from './Expired.jsx'

function Card(props) {
    return(
        <div className="container"> 
            <div className="card" style={{borderRightColor:props.head  === "لقاء" ? "#cc7dbf" : "gray" &&
                        props.head === "معسكر" ? "#723f9c" :"gray" && props.head === "برنامج" && props.expired===false ? "#65e7cb" : "gray" }}>
                <div className="card-title">
                    <h2 style={{color:props.head === "لقاء" ? "#cc7dbf" : "gray" &&
                        props.head === "معسكر" ? "#723f9c" :"gray" && props.head === "برنامج" && props.expired===false ? "#65e7cb" : "gray" }}>{props.head}</h2>
                    <h4> {props.title} </h4>
                </div>
                <div className="card-info">
                    <div className='info1'>
                    <p> <img className='icons' src={LocationIcon}></img> {props.location}</p>
                    <p><img src={CaleanderIcon}></img>{props.caleander}  </p>
                    </div>
                    <div className='info2'>
                        <p><img src={DateIcon}></img> {props.date} </p>
                        <Expired expired={props.expired} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card