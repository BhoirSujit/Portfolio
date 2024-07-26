import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './Global.css'

function App() {


  return (
   <main className='overflow-x-hidden 2xl:mx-20'>
   <Header />
   <Hero />
   <About />
   
   <Skills />
<Projects/>
   <Contact />
   <Footer />
   </main>
  )
}

export default App
