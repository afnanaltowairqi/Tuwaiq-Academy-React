import './App.css'
import Nav from './Nav.jsx'
import Section_one from './Section_one.jsx'
import Card from './Card.jsx'
import Section_tow from './Second_section.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <Nav />
      <Section_one />
      <div className='cards'>
        <Card head='لقاء' title='فعالية WWDC24 Watch Party' location='الرياض' caleander='يوم واحد' date=' يبدأ في 10/6/2024' expired={false} />
        <Card head='معسكر' title='هندسة الحوسبة السحابية المتقدمة AWS' location='الرياض' caleander=' 4 أسابيع' date=' يبدأ في 23/6/2024' expired={false} />
        <Card head='برنامج' title='إدارة خدمات تقنية المعلومات (ITIL)' location='الرياض' caleander=' أسبوع واحد' date=' يبدأ في 23/6/2024' expired={false} />
        <Card head='برنامج' title=' أساسيات علوم الشبكات NETWORK+ ' location='الرياض' caleander=' أسبوعان' date=' يبدأ في 15/10/2023'expired={true} />
        <Card head='برنامج' title='البنية المؤسسية بمنهجية وإطار TOGAF' location='الرياض' caleander=' أسبوع واحد' date='يبدأ في 15/10/2023' expired={true} />
        <Card head='برنامج' title='أمن وحماية المعلومات في osi model' location='الرياض' caleander=' أسبوع واحد' date='يبدأ في 15/10/2023' expired={true} />
      </div>
      <Section_tow />
      <Footer />
    </>
  )
}
export default App