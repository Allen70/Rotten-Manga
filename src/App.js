import Navbar from './components/Navbar'
import { MangaPage } from './components/MangaPage'
import { useState } from 'react'
import './App.css';

function App() {
  let [userType, setUserType] = useState("user")
  return (
    <div className="App">
      <Navbar/>
      <MangaPage userType={userType}/>
    </div>
  )
}

export default App;