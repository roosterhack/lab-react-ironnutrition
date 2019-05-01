import React, { Component } from 'react'

export class Search extends Component {
  render() {
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

    return (
      <React.Fragment>
        <h1>IronNutrition</h1>
        <input
          type="text"
          name='search'
          onChange={this.handleChange}
          value={this.state.name}
        />
      </React.Fragment>
    )
  }
}

export default Search
