import React, {Component, Fragment} from "react";
import ProductCard  from "../../component/productcard/productcard";
import { connect } from "react-redux";

class Product extends Component {
    // state={
    //     order:0
    // }

   

    // handleCounterChange = (NewValue) => {
    //    this.setState({
    //     order:NewValue
    //    }) 
    // }
    render(){        
        return(
            <Fragment>
            <div>
                Troli : {this.props.order}
            </div>

            
          <ProductCard />
            </Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        order:state.totalOrder
    }
}

export default connect(mapStateToProps)(Product)