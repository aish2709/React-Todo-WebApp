import React, { Component } from 'react'
import './Todo.css'
 class Todo extends Component {
constructor(){
    super();
    this.state={
        tasks:[{task:'Check Mails',id:1},{task:'Read article',id:2},{task:'Complete Homework',id:3}],
        currTask:''
    }
}
handleChange=(e)=>{
console.log(e.target.value)
this.setState({
    currTask:e.target.value
})

}

handleSubmit=()=>{
this.setState({
    tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
    currTask:''
})

}

handleDelete=(id)=>{
    let narr=this.state.tasks.filter((taskObj)=>{
        return taskObj.id!=id
    })
    this.setState({
        tasks:[...narr]
    })
}

  render() {
    console.log('render')
    return (
      <div class="wrapper">
        <input type='text'  value={this.state.currTask} onChange={this.handleChange} class="textfield"/>
        <button onClick={this.handleSubmit} class="submit">Submit</button>
        <ul>
{
    this.state.tasks.map((taskObj)=>
    (
        <li key={taskObj.id}>
            <p>{taskObj.task}</p>
            <button onClick={()=> this.handleDelete(taskObj.id)} class="delete">Delete</button> 
            {/* onclick delete button so we use arrow function as DOM will directly call delete but now we givr func defination  */}
        </li>
    )
    )
}
</ul>
      </div>
    )
  }
}

export default Todo;
