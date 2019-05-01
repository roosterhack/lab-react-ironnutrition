import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'
import FoodBox from './FoodBox'
import AddForm from './AddForm';

class App extends Component {
  state = {
    foods: [...foods],
    showForm: false
  }

  //show/hide form 
  handleShowForm = () => {
    let show = !this.state.showForm
    this.setState({
      showForm: show
    })
  }

  //handle add food
  addFood = food => {
    let foods = [...this.state.foods]
    foods.unshift(food)

    this.setState({
      foods,
      showForm: false
    })

  }


  render() {
    return (
      <React.Fragment>
        <FoodBox foods={this.state.foods} showForm={this.state.showForm} />
        <AddForm showForm={this.state.showForm} addFood={this.addFood} />
        <button onClick={this.handleShowForm}>Add food</button>
      </React.Fragment>
    );
  }
}

export default App;
