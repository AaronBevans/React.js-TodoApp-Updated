import React from "react"

class Application extends React.Component{

    render(){
        //inline css styling can go here.
        
        //to use props use 'this.' keyword to activate props items.
        return(
            <div>
                <h3>{this.props.whatever}</h3>
            </div>
        )
    }
}
export default Application

import React from 'react'
import Application from "./FakeApplicationComp"

class App extends React.Component{
    render(){
        return(
            <div>
                <Application whatever = 'Hello'/>
            </div>
        )
    }
}

class Apple extends React.Component{
    render(){
        return(
            <div>
                {this.props.moreShit}
            </div>
        )
    }
}
export default Apple

import React from 'react'

class App1 extends React.Component{
    render(){
        const fakeComponent = fakeData.map(dataItem=> <FakeData key={dataItem.id}
        dataItem={//points to object
            item//
        }
        />)
        return(
                <div>
                </div>
        )
    }
}
export default App1

import React from 'react'
import PracticeChild from "./practiceComp"
//component that renders its own state.
//but accepts a child component that uses props.
class PracticeApp extends React.Component{

    constructor(){
        super()
        this.state = {
            name:'Aaron',
            title:'Front-End Software Engineer',
            develop:'User Interfaces'
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.title}</h1>
                <h1>{this.state.develop}</h1>
                <br/>
                <PracticeChild
                name = 'Aaron Bevans',
                title = 'Fron-End Software Engineer',
                data = 'properties',
                language = 'JavaScript',
                framework = 'ReactJS'
                />
            </div>
        )//props will always render from inside a child component.
    }
}
export default PracticeApp

import React from 'react'
//deliver props from here
class PracticeChild extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.title}</h1>
                <br/>
                <br/>
                <h1>{this.props.data}</h1>
                <h1>{this.props.language}</h1>
                <h1>{this.props.framework}</h1>
            </div>
        )
    }

}
export default PracticeChild

/*const pseudoArray = [
    {
        name:'Aaron',
        title:'Software Engineer'   
    },
    {
        data:'props',
        language:'JavaScript',
        framework:'ReactJS'
    },
]
export default pseudoArray*/

//template literals
let title = 'Front-Software Engineer';
let language = 'JavaScript';
let framework = 'React.js';

let literalSentence = `I am a ${title} who uses ${language} with frameworks like ${framework}.`;
//practice conditional rendering.
class Conditioned extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render(){
        let displayLog
        if(this.state.isLoggedIn){
            displayLog = 'in'
        }else{
            displayLog = 'out'
        }
        return(
            <div>
            <h2>You are currently logged (displayLog)</h2>
            </div>
        )
    }
}

//counter component that changes its own state to count up.
class Counter extends React.Component{
    constructor(){
        super()
        this.state = {//name of state object
            count:0
        }
    } 

    handleClick(){//method that allows state object to be changed.
        this.setState({count:1})
    }

    render(){
        return(
            //{this.state.count} = embedding state change.

            //onClick={this.handleClick} = event handler that allows state change functionality.
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}
export default Counter

class Counter1 extends React.Component{
    constructor(){
        super()

        //original state object
        this.state = {
            count1:0
        }
    }

    //method that declares new state object
    handleClick(){
        this.setState({count1:1})
    }

    render(){
        //{this.state.count1} = new state object within element to be rendered.
        //onClick={this.handleClick} = event handler that renders new state object to the web page.
        return(

            <div>
                <h1>{this.state.count1}</h1>

                <button onClick={this.handleClick}>Count Up!</button>
            </div>
        )
    }

}
export default Counter1

class CountApp extends React.Component(){
    constructor(){
        super()
        this.state = {
            count2:3
        }
    }
    handleClick(){
        this.setState({count2:3})
    }
    render(){
        return(
            <div>
                <h1>{this.state.count2}</h1>
                <button onclick={this.handleClick}>Click to add!</button>
            </div>
        )
    }
}
export default CountApp

class CountApp1 extends React.Component{
    constructor(){
        super()
        this.state = {
            count3: 4
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({count3: 5})
    }
    render(){
        return(
            <div>
                <h1>{this.state.count3}</h1>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}
export default CountApp1

class NewCount extends React.Component{
    constructor(){
        super()
        this.state = {
            count0:1
        }
    }
    this.handleClick = this.handleClick.bind(this)
}
    handleClick(){
        this.setState({count0:2})
    }
render(){
    return(
        <div>
            <h1>{this.state.count0}</h1>
            <button onClick ={this.handleClick}>Click</button>
        </div>
    )
}
export default NewCount

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState=>{
            return{
                count:prevState.count + 1
            }
        })

    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click!</button>
            </div>
        )
    }
}
export default App

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState =>{
            return{
                count:prevState.count + 1
            }
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}
export default App


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todo:completed
        }
        this.handleChange = this.handleChange.bind(this)//binds method to class.
    }

    handleChange(id){//method tha changes state
        this.setState(prevState=>{

            const updatedTodos = prevState.todos.map(todo=>{
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos:updatedTodos
            }
        })
    }

    render(){
        const todoItems = this.state.todos.map(item=> <TodoItem key={item.id} //mapped data that uses state.
        item={item}
        handleChange={this.handleChange}
            />)
        return(
            <div>
                {todoItems}
            </div>
        )
    }
}
export default App

//GENERAL IDEA PRACTICE/MOCK UP
import dataArray from "./dataArrayFile"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            array:dataArray
        }
        this.changeUp = this.changeUp.bind(this)
    }

   changeUp(id){
       this.setState(prevState=>{
           const updatedData = prevState.array.map(dataItem=>{
               if(dataItem.id === id){
                   return{
                       ...dataItem,
                       completed:!dataItem.completed
                   }
               }
               return dataItem
           })
           return {
               array: updatedData
           }
       })
   }

    render(){
        const arrayComponents = this.state.array.map(data=> <FakeComponent            
        key={data.id} itemFake={data} changeUp={this.changeUp}
        />)

        return(
            <div>
                <input type='checkbox' checked={props.itemFake.checked}

                onChange ={()=> props.changeUp(props.itemFake.id)}
                />
            </div>
        )
    }
}
export default App

import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            data:array
        }
        this.handleChange = this.handleChange.bind(this)
    }

    //method that changes state.
    handleChnage(id){
        this.setState(prevState=>{
            const updatedArray = prevState.data.map(dataItems=>{
                if(dataItems.id === id){
                    return{
                        ...dataItems,
                        completed:!dataItems.completed
                    }
                }
                return dataItems
            })
            return{
                data:updatedItems
            }
        })
    }
  

    render(){
        const fakeComponent = this.state.data.map(dataItem=> <Component
        key={dataItem.id} fkObj={dataItem} 
        handleChange={this.handleChange}
        />)

        return(
            <div>
                {fakeComponent}
                
            </div>
        )
    }
}
export default App

//fake checkbox component
function Component(props){
    return(
        <div>

            <input type='checkbox' 
            checked={props.fkObjJ.completed}
            onChange={props.handleChange(props.fkObj.id)}
            }>

        </div>
}

{/*component will re-render once lifecycle method runs.*/} 

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading:true
        }
    }

/*Lifecycle method that checks for updates when the page renders
then it will re-render and run updated code.*/

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading:false
            })
        }, 1500);
    }
    

    render(){
        return(
            <div>
                <Conditional isLoading={this.state.isLoading}/>{/*component contains whatever state is available and renders it*/} 
            </div>
        )
    }
}
export default App


{/*functional component to render*/}

function Conditional(props){

    return(
        <div>
            {props.isLoading === true ? <h1>Loading...</h1> : <h1>Conditional Rendering</h1>}
        </div>
    )
    
}
export default Conditional


//conditional rendering with use of a loading component and lifecycle method.
import React from 'react'
import LoadContent from './loadContentComp'

class App extends Reac.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    //lifecycle method that re-renders the components, and adds new state when new code is added.
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoggedIn:true
            })
        }, 1500);
    }

    render(){
        return(
            <div>
                <LoadContent isLoggedIn={this.state.isLoggedIn}/>{/*Any state belonging to a component needs to be passed to it.*/}
            </div>
        )
    }
}
export default App

//conditional rendering within child component.
function LoadContent (props){
    return(
        props.isLoggedIn === true ? <h2>Loading...</h2> : <h2>Practice Content...</h2>
    )
} 
export default LoadContent

//conditional rendering with use of state changing method and button.
import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn:false
        }
        this. = this.bind(this)
    }

    //functional method that changes state
    changeState(){
        this.setState(prevState=>{
            return{
                isLoggedIn:!prevState.isLoggedIn
            }
        })
    }

    render(){
        let buttonText = this.state.isLoggedIn === true ? 'Log In' : 'Log out'
        return(
            <div>
                <button onClick={this.changeState}>{buttonText}</button>
            </div>
        )
    }
}
export default App 

//////////////////////////////////////////////////////
//changing state with use of state changing method.
import React from 'react'
import ActivityList from './ActivityList'//pseudo file
import activeArray from './ActiveArray'//pseudo file

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            activities:activeArray
        }
        //bind method!
        this.handleChange = this.handleChange.bind(this)
    }
    

    //create method that changes state and checbox
    handleChange(activityId){
        this.setState(prevState=>{
            const updatedActiveArray = prevState.activities.map(actives=>{
                if(actives.activityId === activityId){
                    return {
                        ...actives,
                        actv:!actives.actv
                    }
                }
                return actives
            })
            return{
                activities: updatedActiveArray
            }
        })

    }

    render(){
        const activityComponent = this.activies.map(do=> <ActivityList key={do.activityId} 
        activeObj={do}
        //add event handler object for checkboxes.

        />)
        return(
            <div>
                {activityComponent}
            </div>
        )
    }
}
export default App

//child component that renders props.
import React from 'react'

function ActivityList(props){//child component
    const actvStyle={
        fontStyle:'italic',
        color:'#cdcdcd',
        textDecoration:'line-through'
    }
    
    return(
        <div>
            <input type='checkbox'

            checked={props.activeObj.actv}

            //Add Event handler
            

            />

            {/*v 'if props.activeObj.actv === true(css style) else(no style given )' v*/}

            <h1 style={ props.activeObj.actv ? actvStyle : null }>{props.activeObj.codeLang0}</h1>

            <h1>{props.activeObj.codeLang1}</h1>
            <h1>{props.activeObj.codeLang2}</h1>
            <h1>{props.activeObj.recreation0}</h1>
            <h1>{props.activeObj.recreation1}</h1>
            <h1>{props.activeObj.recreation2}</h1>
        </div>
    )
}
export default ActivityList

//map this array
const activeArray = [
    {
        activityId:1,
        codeLang0:'html',
        codeLang1:'css',
        codeLang2:'javaScript',
        codeLang3:'jsx',
        actv:false
    },
    {
        activityId:2,
        recreation0:'running',
        recreation1:'hoops',
        reacreation2:'weight lifting',
        actv:false
    }
]
export default activeArray

//practice style and conditional rendering

import React from 'react'

function Component(props){
    const pseudoStyle = {
        fontStyle:'italic',

    }

    return(

        <div>
            <h2 style={props.mappedObj.objKey ? pseudoStyle : null}>{props.mappedObj.objKey}</h2>
        </div>
    )
}
export default Component

//practice componentDidMount()
import React from 'react'

class App extends React.Component{
    constructor()
    this.state = {
        isTrue:false
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isTrue = true
            })
        }, 1500);
    }


    render(){
        return(){
            <div>
                <Greeting isTrue={this.state.isTrue}/>
            </div>
        }
    }
}
export default App

////////////////////
//practice fetching data from an API.
import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        console.log('I love React.js')
    }

    render(){
        return(
            <div>
                <h1>Code goes here</h1>
            </div>
        )
    }
}
export default App

/////////////////////////
//fetching data from an API and converting it into state that can be displayed on screen.
import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            loading:false,
            character: {//data coming back is an object.
                
            }
        }
    }

    /*using component did mount used for API fetch call 
    that converts the data into our state.*/

    componentDidMount(){
        //changing loading to true
        this.setState({loading:true})
        //fethching API data with fetch() method.
        fetch("https://swapi.co/api/people/1")

        //resolve promise by converting into js object.
        .then(response=> response.json())

        //directing the data to be placed into our state.
        .then({data=>{
            loading:false
            this.setState({//setting up our state to accept the received data.
                character:data//assigning our data in out state object.
            })
        })     
    }



//current state always gets passed into the render method as; this.state. etc...
    render(){
        const loadingtext = this.state.loading ? 'Loading...' : this.state.charcter.name
        return(
            <div>
                {loadingtext}
            </div>
        )
    }
}
export default App


////////////////
/*Using lifecycle method, componentDidMount() to fetch data from an api
and render it to the screen*/
import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            loading:false,
           character:{}
        }
    }
    /*using lifecycle method to make API call and rendering it to the webpage once we change state.*/
    componentDidMount(){
        this.setState({
            loading:true
        })
        fetch("https://swapi.co/api/people/1")
        .then(response=> response.json())
        .then(data=>{
            this.setState({
                laoding:false,
                character:name
            })
        })
    }

   render(){
       //add javaScript to be rendered.
       //const loadingText = this.state.loading ? 'Loading...' : this.state.character.name
       return(
           <div>
                {/*loadingText*/}
                {this.state.loading ? <h1>Loading...</h1> : this.state.character.name}
           </div>
       )
   }
}
export default App

//Practice conditional rendering//////////$$$,$$$//////////////Practice api fetch and conditional rendering////Forms


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            loading:true,
            character:{}
        }
    }

    componentDidMount(){
        this.setState({
            loading:false
        })
        fetch("https://swapi.co/api/people/13")
        .then(response=> response.json())
        .then(data=>{
            this.setState({
                loading:true,
                character:data
            })
        })
    }

    render(){
        const isLoading = this.state.loading ? 'loading...' : this.state.charcter.name
        return(
            <div>
            {isLoading}
            </div>
        )
    }
}
export default App 