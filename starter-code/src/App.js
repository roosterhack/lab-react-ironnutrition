import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'
import FoodBox from './FoodBox'
import AddForm from './AddForm';
import Search from './Search'

class App extends Component {
  state = {
    form: false,
    foodName: "",
    foodImg: "",
    calories: 0,
    foods,
    filtered: foods,
    today: []
  };

  //show/hide form 
  handleShowForm = () => {

    this.setState({
      showForm: !this.state.showForm
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

  //handle search
  searchFood = value => {
    const filtered = this.state.foods.filter(food => {
      food.name.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({
      filtered
    })
  }

  render() {
    return (
      <React.Fragment>
        <Search searchFood={this.searchFood} />
        <div style={{ width: "70%", float: "left" }}>
          {this.state.filtered.map((el, i) => {
            <FoodBox key={i} food={el} showForm={this.state.showForm} />
          })
          }
        </div>

        <AddForm showForm={this.state.showForm} addFood={this.addFood} />
        <button onClick={this.handleShowForm}>Add food</button>
      </React.Fragment>
    );
  }
}

export default App;
