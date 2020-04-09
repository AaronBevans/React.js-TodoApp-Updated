import React from "react"


class TodoList extends React.Component{
        constructor(props){
        super()
        this.state = {
            task:''
        }
        this.handleChange1 = this.handleChange1.bind(this)
    }

    handleChange1(event){
        const {name, value} = event.target
        this.setState({
        [name]: value
        })
    }

    render(){
       const completedStyle = {
           textDecoration:'line-through',
           color:'red',
           font:'italic'
       }
        return(
        <div>
            <form>
            <ul style={{listStyle:'None', color:'Green'}}>
            <li>
            <input type='checkbox'
            

            checked={this.props.itemObj.completed}//automatcially checks checkboxes.

            onChange={()=>this.props.handleChange(this.props.itemObj.id)}//event handler that uses a class method 
            //that changes state of checkboxes.
            //onChange ={()=>props.handleChange1(props.itemObj.id)}
            />
            </li>

            <form>
            <li>
            <input
            type='text'
            name='task'
            value={this.state.task}
            placeHolder='Task'
            onChange={this.handleChange1}
            />
            </li>
            </form>
            </ul>


        <div>
            <h2 id='todoItems' style={this.props.itemObj.completed ? completedStyle : null}>

                {this.props.itemObj.text} {this.state.task}

            </h2>
        </div>
            </form>
        </div>
        )
    }
    
}

export default TodoList