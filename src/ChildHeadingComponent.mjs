// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
  // 1. A Navbar component X
  // 2. A MainContent component X
  // 3. A Footer component X

import React from "react"

function GreetHeading(props){
    return(
        props.greetings === true ? <h2>Loading...</h2> : <h2 style={{color:'lightSeaGreen'}}>Add, update or delete tasks with TaskIt...</h2>
    )
}
export default GreetHeading

