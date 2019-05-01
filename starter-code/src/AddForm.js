import React, { Component } from 'react'

export class AddForm extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0
  }

  handleChange = e => {
    let { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, image, calories, quantity } = this.state
    const food = {
      name,
      calories,
      image,
      quantity
    }

    this.props.addFood(food);
    this.setState({
      name: '',
      calories: 0,
      image: '',
      quantity: 0
    })
  }

  render() {
    const { showForm } = this.props
    if (showForm) {
      return (
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Food name</label>
            <input type="text"
              name='name'
              onChange={this.handleChange}
              value={this.state.name}
            />

            <label htmlFor="url">Food image</label>
            <input type="text"
              name='image'
              onChange={this.handleChange}
              value={this.state.image}
            />


            <label htmlFor="calories">Calories</label>
            <input type="text"
              name='calories'
              onChange={this.handleChange}
              value={this.state.calories}
            />


            <label htmlFor="quantity">Quantity</label>
            <input type="number"
              name='quantity'
              onChange={this.handleChange}
              value={this.state.quantity}
            />

            <input
              type="submit"
              value='submit'
            />

          </form>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
        </React.Fragment>
      )
    }

  }
}

export default AddForm
