import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {

  state = {
    basket: 0  
  }

  addToBasket = () => {
    this.setState({
      basket: this.state.basket + 1
    })
  }

  removeFromBasket = () => {
    this.setState({
      basket: this.state.basket - 1
    })
  }

  render() {
    return(
      <React.Fragment>
        <Navbar basketNumbers = {this.state.basket}/>
        <Home addtocart = {this.addToBasket} removecart = {this.removeFromBasket}/> 
      </React.Fragment>
    )
  }
}



export default App;
