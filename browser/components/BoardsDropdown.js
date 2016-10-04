import './BoardsDropdown.sass'
import React, { Component } from 'react'

class BoardsDropdown extends Component {

  constructor(props){
    super(props)
    this.state = {
      open: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle(){
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const dropdown = this.state.open ?
      <Dropdown boards={this.props.boards} /> :
      null
    return <div className="BoardsDropdown" onClick={this.toggle}>
      <button className={this.props.className}>Boards</button>
      {dropdown}
    </div>
  }

}


const Dropdown = (props) => {
  const boards = props.boards.map(board =>
    <div>{board.name}</div>
  )
  return <div className="BoardsDropdown-dropdown">
    the drop down
  </div>
}

class BoardsProvider extends Component {
  render(){
    const props = Object.assign({}, this.props)
    props.boards = [
      {id: 1, name: 'foo'},
      {id: 2, name: 'bar'},
      {id: 3, name: 'baz'},
    ]
    return <BoardsDropdown {...props} />
  }
}

export default BoardsProvider
