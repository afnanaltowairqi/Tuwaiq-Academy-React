function expired(props) {
    let expired=props.expired;
    if(expired==false){
        return(
            <>
            <button className="btn" >التفاصيل</button>

            </>
        )
    } else {
        return (
            <>
            <button className="btn2" >مغلق</button>
            </>
        )
    }
}
export default expired