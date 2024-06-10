import LogoWhite from './assets/logo-white.png'
import DiscrdIcon from './assets/discord-icon.png'
import YoutubeIcon from './assets/youtube-icon.png'
import TwitterIcon from './assets/twitter-icon.png'
import SnapchatIcon from './assets/snapchat-icon.png'
import LinkedinIcon from './assets/linkedin-icon.png'


import Logofooter2 from './assets/saudi.png'

function Footer() {
    return(
        <footer className="footer">
            <img className="logo-white-footer" src={LogoWhite} alt='logo white'></img>
            <div class="footeritems">
            <div class="line1"> 
                <div class="f1"> شارك كمدرب </div>
                <div class="f2">  الشروط والأحكام   </div>
            </div>
            <div class="line2">
                <div class="f3"> حول الأكاديمية </div>
                <div class="f4">  سياسة الخصوصية  </div>
            </div>
            </div>
            <div className='social'>
                <img className='social1' src={LinkedinIcon}></img>
                <img className='social1' src={SnapchatIcon}></img>
                <img className='social1' src={YoutubeIcon}></img>
                <img className='social1' src={TwitterIcon}></img>
                <img className='discordimag' src={DiscrdIcon}></img>
            </div>
            <div className="logofooter2"> <img src={Logofooter2} alt="logo"></img> </div>
            <div class="copyright">
                <p>جميع الحقوق محفوظة لأكاديمية طويق 2024</p>
            </div>
        </footer>
    );
}
export default Footer