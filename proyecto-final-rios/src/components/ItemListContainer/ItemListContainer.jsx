import React, { Component } from 'react'

export default class ItemListContainer extends Component {
  render(props) {
    return (
      <div>{this.props.greeting}</div>
    )
  }
}
