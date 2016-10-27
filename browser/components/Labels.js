import React, {Component} from 'react'
import Form from './Form'
export default class Label extends Component {
  constructor(props){
    super(props)
    this.state = {
      editingLabels: true,
    }
}

updateLabels(){
  console.log(updateLabels)
}

render(){
  const editLabelsForm = this.state.editingLabels ? <Form className="EditLabelsModal-form" onSubmit={this.updateLabels}>
    <button> This is a button </button>
    <button> This is a button </button>
    <button> This is a button </button>
    <button> This is a button </button>
    <button> This is a button </button>
  </Form> : null

  return <div className="EditLabelsModal"> {editLabelsForm} </div>
}

}
