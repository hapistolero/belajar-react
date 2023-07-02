import React, {Component, Fragment} from "react";
import ProductCard  from "../../component/productcard/productcard";
import { connect } from "react-redux";
import { RootContext } from "../../container/home/home";
import { GlobalConsumer } from "../../context/context";
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
                                Troli : {this.props.state.totalOrder}
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

// export default connect(mapStateToProps)(Product)
export default GlobalConsumer(Product) 