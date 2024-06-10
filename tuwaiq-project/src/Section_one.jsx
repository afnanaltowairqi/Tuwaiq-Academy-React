import Filter from './assets/filter.png'
function Section_one() {
    return(
        <div className="Section_one">
            <div className="filter-box">
                <h1>المعسكرات والبرامج </h1>
                <div className='group-btn'>
                    <p className='adult'>الكبار</p>
                    <p className='children'>الناشئون</p>
                </div>
                <div className='circle'> <img src={Filter}></img> </div>
            </div>
        </div>
    );
}
export default Section_one