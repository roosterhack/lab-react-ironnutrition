import React, { Component } from 'react'

export class Search extends Component {
  state = {
    input: ''
  }

  handleChange = e => {
    let { value } = e.target

    this.props.searchFood(value)

    this.setState({
      input: value
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>IronNutrition</h1>
        <input
          type="text"
          className="input"
          name='search'
          onChange={this.handleChange}
          value={this.state.input}
          placeholder='search...'
        />
      </React.Fragment>
    )
  }
}

export default Search
