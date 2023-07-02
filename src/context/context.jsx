import React, {createContext,Component, Children} from "react"

export const RootContext = createContext()
const Provider = RootContext.Provider


const GlobalProvider = (Children) =>{
    return (
        class ParetComp extends Component {
            state = {
                totalOrder:0
            
            }
            
            dispatch = (action) =>{
                if(action.type=== 'ADD_ORDER'){
                    return this.setState({
                        totalOrder:this.state.totalOrder +1
                    })
                }
                if(action.type=== 'MINUS_ORDER'){
                    return this.setState({
                        totalOrder:this.state.totalOrder -1
                    })
                }
            }
            render() {
                return(
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props}/>
                    </Provider>
              
                )
            }
        }
        
    )
}



export default GlobalProvider

// consumer

const Consumer = RootContext.Consumer

export const GlobalConsumer = (Children) =>{
    return(
        class ParentConsumer extends Component{
            
            render(){
                return(
                    <Consumer>

                    {
                        value =>{
                            return(
        <Children {...this.props} {...value}/>
                            )
                        }
                    }
                </Consumer>
        

                )
            }
        }
       
    )
}

