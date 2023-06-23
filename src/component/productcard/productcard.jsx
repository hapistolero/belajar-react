import React, { Component } from "react";

export default class ProductCard  extends Component {
    
    state={
        order:0
    }

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
                return(
                    <div>
                    <button onClick={this.handlePlus}>Tambah</button>
                    <span>{this.state.order}</span>
                    <button onClick={this.handleMinus}>Kurang</button>
                </div>
                )
            }
   
    }
