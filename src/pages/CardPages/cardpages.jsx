import React, {Component} from "react";
import { Card } from "../../component/card/card";
export default class CardPages extends Component {


    render(){
        return(
            <>
            <Card name='anjing' hobi='ngegay' ></Card>
            <Card name='ambatukam' hobi='iyota?' ></Card>
            </>
        )
    }
}