import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Piggies from './Piggies'

class App extends Component {
  constructor() {
    super()

    this.state = {
      hogs: hogs,
      filtered: false,
      sortedByWeight: false,
      sortedByName: false
    }

  }

getHogs = () => {
  return (
  hogs["name"]
   )
}

filtered = () => {
  this.setState( {
     filtered: !this.state.filtered
  })
}

sortedByName = () => {
  this.setState ( {
    sortedByName: !this.state.sortedByName
  })
}

sortedByWeight = () => {
  this.setState ( {
    sortedByWeight: !this.state.sortedByWeight
  })
}


  render() {
    console.log(this.state.sortedByWeight)

    return (
      <div className="App">
          < Nav />
          <button onClick={this.filtered}>Filter by Greased</button>
          <button onClick={this.sortedByName}>Sort By Name</button>
          <button onClick={this.sortedByWeight}>Sort By Weight</button>
          < Piggies sortedByName={this.state.sortedByName} sortedByWeight={this.state.sortedByWeight} filtered={this.state.filtered} hogs={this.state.hogs}/>
      </ div>
    )
  }
}

export default App;
