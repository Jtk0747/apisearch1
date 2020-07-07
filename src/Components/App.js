import React , {Component} from 'react';
import '../Css/Restaurant.css';
import '../Css/App.css';
import RestaurantContainer from './RestaurantContainer';


export default class App extends Component   {
 
  render() {
    return (
        <div className="App">
          <header  className="App-header">
            <h1 className="App-title">Search for the Best Local Restaurants...!!</h1>
          </header>
        <RestaurantContainer />
      </div>
      );
    }
  }
  
