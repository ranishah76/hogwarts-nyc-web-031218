import piggy from '../porco.png';
import hogs from '../porkers_data'
import React, { Component } from 'react';
import '../App.css';
import Appcss from "../App.css"

// return  this.props.hogs.map((hog) => {
//   return
//   <li>
//   <li>Name: {hog.name}</li>
//   <li>Speciality: {hog.specialty}</li>
//   <li>Greased: {hog.greased.toString()}</li>
//   <li>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
//   <li>Highest medal achieved: {hog['highest medal achieved']} </li>
//   </li>
// this.state = {
//   imagesource: ''
// }

class Pig extends Component {

constructor() {
  super()

  this.state = {
    clicked: false
  }
}


showInformation = () => {
 this.setState( {
   clicked: !this.state.clicked
 })
}


render () {
if (this.state.clicked === false) {
  return (
     <ul className="pigTile">
       <li>Name: {this.props.hog.name}</li>
       <li><img onClick={this.showInformation} src={this.props.hog.image}/></li>
      </ul>)}
  else {
    return (
    <ul className="pigTile">
          <li>Name: {this.props.hog.name}</li>
          <li><img onClick={this.showInformation} src={this.props.hog.image}/></li>
          <li>Speciality: {this.props.hog.specialty}</li>
          <li>Greased: {this.props.hog.greased.toString()}</li>
          <li>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
          <li>Highest medal achieved: {this.props.hog['highest medal achieved']} </li>
     </ul>
        )
      }
 }

}

export default Pig


// <li>Speciality: {this.props.hog.specialty}</li>
// <li>Greased: {this.props.hog.greased.toString()}</li>
// <li>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
// <li>Highest medal achieved: {this.props.hog['highest medal achieved']} </li>
