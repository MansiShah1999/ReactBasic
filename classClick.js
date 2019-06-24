import React, { Component } from 'react'

class Classclick extends Component{

    clickhandler(){
        console.log('Button clicked')
    }
    render(){
            return (
            <div>
            <button onClick={this.clickhandler}>Click me</button>
            </div>
        )
    }
}
export default Classclick