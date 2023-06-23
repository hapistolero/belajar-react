import React , {Component, Fragment} from "react";
import { Card } from "../../component/card/card";

class Home extends Component{

    render(){
        return(
            <Fragment>
<Card name='ambatukam' hobi='ngocok'/>
<Card name='john c' hobi='main bola'/>
</Fragment>
        )
    }
}

export default Home;