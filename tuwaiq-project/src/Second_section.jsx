import Step1 from './assets/course-step-1.png'
import Step2 from './assets/course-step-2.png'
import Step3 from './assets/course-step-3.png'

function Second_section() {
    return(
        <div className="Second_section">
            <div className="gray-box">
                <h1>خطوات التسجيل</h1>
                <div className='steps'>
                    <div className='circle1'><img src={Step1}></img> </div>
                    <div className='line'>-------------</div>
                    <div className='circle1'><img src={Step2}></img></div>
                    <div className='line'>-------------</div>
                    <div className='circle1'><img src={Step3}></img></div>
                </div>
                <div className='titleSteps'>
                        <p>الانضمام إلى المنصة </p>
                        <p>التــســــــــجيــــــــــــل في المعسكر أو البرنامج  </p>
                        <p>انتظار رسالة القــــبــــــــــــول </p>
                </div>
            </div>
        </div>
    );
}
export default Second_section