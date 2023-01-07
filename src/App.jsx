import { Pbody } from './Components/Pbody'
import { Dream } from './Components/Dream'
import { Navbar } from './Components/Navbar'
import './index.css'
import { Footer } from './Components/Footer'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Dream/>
      <Pbody/>
      <Footer/>
    </div>
  )
}

export default App
