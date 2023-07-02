import React, { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../reducers/globalactiontype";
import { GlobalConsumer } from "../../context/context";
class ProductCard  extends Component {
    
    // state={
    //     order:0
    // }

    handleCounterChange = (newvalue) =>{
        this.props.onCounterChange(newvalue)
    }

    handlePlus = () =>{
        this.setState(
            {order: this.state.order +1}, ()=>
            this.handleCounterChange(this.state.order)
        )

       
        }

        
            handleMinus = () =>{
                if(this.state.order >0){
                    this.setState(
                        {order: this.state.order -1},
                        ()=>
            this.handleCounterChange(this.state.order)
                    )
                    
                }
               
            }

            render(){
                console.log(this.props)
                return(
                   
                       
                          <div>
                                <button onClick={()=> this.props.dispatch({type:'ADD_ORDER'})} >Tambah</button>
                                <span>{this.props.state.totalOrder}</span>
                                <button onClick={()=> this.props.dispatch({type:'MINUS_ORDER'})} >Kurang</button>
                            </div>

                  
                   
               
                )
            }
   
    }

    // const mapStateToProps = (state)=>{
    //     return {
    //         order:state.totalOrder
    //     }
    // }

    // const mapDispatchToProps =(dispatch)=>{
    //     return{
    //         handlePlus:()=>dispatch({type: ActionType.ADD_ORDER}),
    //         handleMinus:()=>dispatch({type:ActionType.MINUS_ORDER})
    //     }
    // }

    // export default connect(mapStateToProps,mapDispatchToProps)(ProductCard)
    export default GlobalConsumer(ProductCard)