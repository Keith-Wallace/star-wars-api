import React from 'react'
import ReactDOM from 'react-dom'

import './app.scss'


const App = () => {
  return (
    <div className='app'>
      <p>React here!</p>
    </div>
  )
}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
