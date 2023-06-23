import React, {Component, Fragment} from "react";
import ProductCard  from "../../component/productcard/productcard";

export default class Product extends Component {
    state={
        order:0
    }

   

    handleCounterChange = (NewValue) => {
       this.setState({
        order:NewValue
       }) 
    }
    render(){        
        return(
            <Fragment>
            <div>
                Troli : {this.state.order}
            </div>

            
          <ProductCard onCounterChange={(value)=> this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}