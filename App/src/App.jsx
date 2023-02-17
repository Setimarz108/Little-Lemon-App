import { useState } from 'react'
import  Layout from './Components/Layout'



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <div className="App">
     
       <Layout></Layout>
    </div>
    </>
  )
}

export default App
