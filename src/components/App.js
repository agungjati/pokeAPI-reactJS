

import React from 'react'
import './App.css'
import ListPokeContainer from '../containers/ListPokeContainer'
import MyPokes from './MyPokes'

class App extends React.Component {

  render() {
    return (
      <div className="container-app">
        <ListPokeContainer />
        <MyPokes />
      </div>
    )
  }
}

export default App