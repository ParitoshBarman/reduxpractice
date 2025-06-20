import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'

function themeStyle(theme){
  switch(theme){
    case 'dark':
      return {
        backgroundColor:'black',
        color:'white'
      }
    case 'light':
      return {
        backgroundColor:'white',
        color:'black'
      }
    default:
      return {
        backgroundColor:'red',
        color:'yellow'
      }
  }
}

function App() {
  const count = useSelector((state)=>state.count)
  const theme = useSelector((state)=>state.theme)
  const dispatch = useDispatch();

  const inputRef = useRef()
  function changeHandeler(){
    dispatch({type:'CUSTOM', payload:inputRef.current.value})
  }

  return (
    <>
      <div style={themeStyle(theme)}>
        <p>Theme: {theme}</p>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <br />
        <button onClick={()=>dispatch({type:'DARK'})}>Dark</button>
        <button onClick={()=>dispatch({type:'LIGHT'})}>Light</button>
        <input type="text" ref={inputRef} onChange={changeHandeler} placeholder='using Ref' />
        <input type="text"  onChange={(e)=>dispatch({type:'CUSTOM', payload:e.target.value})} placeholder='using e.target.value' />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch({type:'DECREMENT'})}>
          DECREMENT
        </button>
        <button disabled>
          count is {count}
        </button>
        <button onClick={() => dispatch({type:'INCREMENT'})}>
          INCREMENT
        </button>
        <br />
        <button onClick={() => dispatch({type:'RESET'})}>
          RESET
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
