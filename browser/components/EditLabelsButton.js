import React, { Component } from 'react'
import $ from 'jquery'
import Labels from './Labels'

export default class EditLabelsButton extends Component {

  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state = {
      editing: false,
    }
  }

  onClick(event){
    console.log('testing ');
    this.setState({editing: true}) 
  }

  render(){
    return this.state.editing ? <Labels /> : <button className="BoardShowPage-button BoardShowPage-DeleteBoardButton" onClick={this.onClick}>
      Edit Labels
    </button>
  }
}
