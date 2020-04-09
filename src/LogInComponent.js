import React from 'react'

function LogIn (props){
    if(props.isLoggedIn === true ){
        return(
            <h2>Loading...</h2>
        )
    }else{
        return(
            <h2></h2>
        )
    }
}

export default LogIn