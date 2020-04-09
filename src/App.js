import React from 'react'
import "./index.css"
import TodoList from "./TodoListComponent"
import MainHeading from "./MainHeadingComponent"
import Footer from "./FooterComponent"
import GreetHeading from "./ChildGreetingComponent"
import todoListArray from "./TodoArray"
import LogIn from "./LogInComponent"




class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: todoListArray,
            isLoggedIn: true,
            greetings:true,
            task:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    /*method that changes previous state objects in array to 
    new conditions.*/

    handleChange(id){//method
        this.setState((prevState)=>{

            const updatedTodos = prevState.todos.map(todo=>{

                if(todo.id === id){
                    return{
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return{
                todos: updatedTodos
            }
        })

    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoggedIn:false
                })
            }, 1500);

        setTimeout(() => {
            this.setState({
                greetings:false
                })
            }, 1500);
        }


      render(){
        const todoComponent = this.state.todos.map(item=> 
        //todoArray is inside '<TodList/>' component
        <TodoList key={item.id} //before: const todoComponent = todoListArray.map...
        
        itemObj={item} 

        handleChange={this.handleChange}//handleChange method is an object that is part of the '<TodList/>' component
        handleChange1={this.handleChange1}
        />)

                return(
            <div>
                <MainHeading/>

                <LogIn isLoggedIn={this.state.isLoggedIn}/>

                <br/>
                <hr/>

                <GreetHeading greetings={this.state.greetings}/>

                <div className="todo-list">
                {todoComponent}
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>
            )

        }
}
export default App