import piggy from '../porco.png';
import hogs from '../porkers_data'
import React, { Component } from 'react';
import '../App.css';
import Appcss from "../App.css"
import Pig from './Pig'

class Piggies extends Component {
  constructor(props) {
    super(props)

  }


 getHog = () => {
  return  this.props.hogs.map((hog) => {
    return (<Pig hog={hog} />)
   })
 }


 filterbyGrease = () => {
   return this.props.hogs.filter((hog) => {
     return hog.greased === true
   })
 }

 filterHog = () => {
  return  this.filterbyGrease().map((hog) => {
    return (<Pig hog={hog} />)
   })
 }

 // sortHogByName = () => {
 // }

 sortHogByWeight = () => {
   return this.props.hogs.sort(function(a, b) {
    return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
  })
 }

 sortByWeight = () => {
  return  this.sortHogByWeight().map((hog) => {
    return (<Pig hog={hog} />)
   })
 }


 sortHogByName = () => {
   return this.props.hogs.sort(function(a,b) {
     let comparison = 0;
     if (a.name > b.name) {
       comparison = 1;}
      else if (a.name < b.name) {
        comparison = -1
      }
    return comparison;
  })
}

sortbyName = () => {
 return  this.sortHogByName().map((hog) => {
   return (<Pig hog={hog} />)
  })
}


  render()  {

    if (this.props.filtered === true) {
      return (
        <div>
        {this.filterHog()}
        </div>
      )
    }

    else if (this.props.sortedByWeight === true) {
      return (
        <div>
        {this.sortByWeight()}
        </div>
          )
}
else if (this.props.sortedByName === true) {
  return (
    <div>
    {this.sortbyName()}
    </div>
      )
}

    else {
      return (
        <div>
        {this.getHog()}
        </div>
  )}

}
}



export default Piggies
