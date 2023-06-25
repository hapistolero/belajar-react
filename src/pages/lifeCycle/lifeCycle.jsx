import React, { Component } from "react";

export default class LifeCycle extends Component{

    // constructor
    constructor(props){
        super(props)
        this.state ={
            count: 0

        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
console.log('getDerivedStateFromProps')
return null
    }

    componentDidMount(){
console.log('componentDidMount')

// setTimeout(()=>{
//     this.setState({
//         count:2
//     })
// },300)

    }

    shouldComponentUpdate(nextProps, nextState){
console.log('shouldComponentUpdate')

if(nextState.count > 4){
  return false  
}
return true
    }

    getSnapshotBeforeUpdate(prevProps, prevStae){
console.log('getSnapshotBeforeUpdate')
return null
    }

    componentDidUpdate(prevProps,prevStae, snapshot)
{
    console.log('componentDidUpdate')

}
    
componentWillUnmount(){
console.log('componentWillUnmount')
}

changeCount=()=>{
    this.setState(
        {
            count: this.state.count +1
        }
    )
}
    render(){
        return(
            <button onClick={this.changeCount}>Component Button {this.state.count}</button>
        )
    }
}