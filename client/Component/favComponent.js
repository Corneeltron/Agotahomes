import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//handle click = set state to value of target of event handler
//usie axois post to saver into database
//

class Favorites extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      favorites : []
    }
    this.handleClick = this.handleClick.bind(this);
    //this.alertMe = this.alertMe.bind(this);
  }

//  const  [favorites, setFavorites] = useState([])
  // componentDidMount(){
  //  this.handleClick();
  // }
//console.log('Outside Handle Click')
  handleClick(e) {
    this.setState({
      favorites: e.target.value
    })
    console.log('Inside Handle Click')
    console.log(e.target, 'inside handle click - e')
    axios.post('http://localhost:3000/api/favs', {
      favorites : this.state.favorites
    })
    .catch(err => console.log('Error in Hnadle Click'))
  }
  render(){
    return(
      <div>
        <button id='Fav' onClick= {this.handleClick}>Click</button>
      </div>
    )
  }  
}

export default Favorites;