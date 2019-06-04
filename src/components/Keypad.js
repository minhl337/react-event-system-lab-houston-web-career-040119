// Code Keypad Component Here
import Reach from "react"

class Keypad extends Reach.Component{
    
    keyUp=()=>{
        console.log('Entering password...')
    }
    
    
    render(){
        
        return(
            <div>
                <input type="password" onKeyUp={this.keyUp}/>
            </div>
            
            );

    }

}

export default Keypad;