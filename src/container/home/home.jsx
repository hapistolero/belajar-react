import React , {Component, Fragment} from "react";
import { Card } from "../../component/card/card";
import Product from "../product/product";

class Home extends Component{

    render(){
        return(
            <Fragment>
{/* <Card name='ambatukam' hobi='ngocok'/>
<Card name='john c' hobi='main bola'/> */}
<Product/>
</Fragment>
        )
    }
}

export default Home;