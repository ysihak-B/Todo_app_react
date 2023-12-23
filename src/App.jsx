import React, { Component } from 'react'
import Navbar from './component/Navbar'
import TodoRows from './component/TodoRows'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName: 'Ysihak',
       todoItems: [
        {action: 'Buy milk', done: true},
        {action: 'Dentist at 5pm', done: false},
        {action: 'Go to gym', done: false}
       ],
       newToDo: ''
    }
  }

  updateValue = (event) =>{
    this.setState({
      newToDo: event.target.value
    }, console.log(this.state.newToDo))
  }

  newToDo = () =>{
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        {action: this.state.newToDo, done: false}
      ]
    })
  }

  toggleDone = (todo) =>{
    this.setState({
       todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? {...item, done: !item.done} : item
       )
    })
  } 

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Navbar name={this.state.userName}/>
          <div className='col-12'>
            <input 
              className='form-control' 
              onChange={this.updateValue} 
              value={this.state.newToDo} 
            />
            <button className='btn btn-primary' onClick={this.newToDo}>
              Add
            </button>
          </div>
          <div className='col-12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.todoItems.map((item) => (
                    <TodoRows keys={item.action} item={item} callback={this.toggleDone}/>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App