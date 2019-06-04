// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{
    
    focus=()=>{
        console.log('Good!')
    }
    
    blue=()=>{
        console.log('Hey! Eyes on me!')
    }
    
    
    render(){
        return(
            <div>
                <button
                    onFocus={this.focus}
                    onBlur={this.blue}
                >
                </button>
            </div>
            )
    }
}

export default EyesOnMe;