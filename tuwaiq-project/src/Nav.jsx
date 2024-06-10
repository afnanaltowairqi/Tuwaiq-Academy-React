import LogoWhite from './assets/logo-white.png'
function Nav() {
    return(
        <nav className="navbar">
                <ul className='nav-list'>
                    <img className="logo-white" src={LogoWhite} alt='logo white'></img>
                    <li>الرئيسية</li>
                    <li>  المعسكرات و البرامج</li>
                    <li>حول الأكاديمية </li>
                    <li>الأكاديميات التابعة </li>
                    <li>مركز الاختبارات </li>
                </ul>
                <div className='left-nav'>
                    <p className="login"> تسجيل الدخول </p>
                    <p className="lang"> English</p>
                </div>
                <div className='nav-title'>
                    <h4>أكاديمية طويق</h4>
                </div>
        </nav>
    );
}
export default Nav