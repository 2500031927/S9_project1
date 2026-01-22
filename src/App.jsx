import { useState } from 'react'
import photo1Logo from './assets/girl icon.png'
import photo2Logo from './assets/girl icon.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={photo1Logo} className="logo" alt="photo1" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={photo2Logo} className="logo " alt="photo2" />
        </a>
      </div>
      <h1>Illusion</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App