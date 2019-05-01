import React, { Component } from 'react'

export class FoodBox extends Component {
  render() {
    const { foods } = this.props
    const foodList = foods.map((food, i) => {
      return (
        <div className="box" key={i}>
          <article className="media" key={i}>
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                  // value=''
                  />
                </div>
                <div className="control">
                  <button className="button is-info">
                    +
                </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      )
    })

    return (
      <React.Fragment>
        {foodList}
      </React.Fragment>
    )
  }
}

export default FoodBox
