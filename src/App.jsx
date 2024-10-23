import { BrowserRouter,Route,Routes } from 'react-router-dom'

import './App.css'
// import Chat from './Components/Chat'
import FirstNavbar from "./Components/FirstNavbar"
// import SecondNav from './Components/SecondNav'
// import Card from './Components/Card'
import Dashboard from './Components/Dashboard'
import Incidents from './Components/Incidents'
import Locations from './Components/Locations'
// import ThirdNav from './Components/ThirdNav'
import StepBar from './Components/StepBar'
import NewCards from './Components/NewCards'
import SecondIncident from './Components/SecondIncident'
import Map from './Components/Map'
function App() {
 

  return (
    <>

     <BrowserRouter>
     <FirstNavbar />
     <Routes>
      <Route element={<Dashboard />} path='/'></Route>
      <Route element={<Incidents />} path='/Incidents'></Route>
      <Route element={<Locations />} path='/Locations'></Route>
      <Route element={<StepBar />} path='/StepBar'></Route>
      <Route element={<SecondIncident />} path='/SecondIncident'></Route>
      <Route element={<NewCards />} path='/NewCards'></Route>
      <Route element={<Map />} path='/Map'></Route>
     </Routes>
     </BrowserRouter>
    
     
    </>
  )
}

export default App
