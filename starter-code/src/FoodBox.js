import React, { Component } from 'react'

export class FoodBox extends Component {

  state = {
    quantity: 1
  };

  handleChange = e => {
    const { value } = e.target

    this.setState({
      quantity: Number(value)
    })
  }
  render() {
    const { name, calories, image } = this.props.food

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={this.handleChange}
                  className="input"
                  type="number"
                  value={this.state.quantity}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() => {
                    this.props.addFood({
                      ...this.props.food,
                      quantity: this.state.quantity
                    })
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default FoodBox
