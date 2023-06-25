import React , {Component, Fragment} from "react";
import { Card } from "../../component/card/card";
import Product from "../product/product";
import LifeCycle from "../lifeCycle/lifeCycle";
import Blogpost from "../blogpost/blogpost";

class Home extends Component{
state = {
    showComponent: true
}

// componentDidMount(){
//     setTimeout(()=>{
//         this.setState({
//             showComponent:false
//         })
//     },500
//     )
// }
    render(){
        return(
            <Fragment>

{/* <Card name='ambatukam' hobi='ngocok'/>
<Card name='john c' hobi='main bola'/> */}
{/* <Product/> */}


{/* {
    this.state.showComponent ?
<LifeCycle/>
:
null
} */}

<Blogpost/>



</Fragment>
        )
    }
}

export default Home;