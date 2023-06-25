import React , {Component, Fragment} from "react";
import {BrowserRouter ,Routes, Route, Link} from 'react-router-dom'
import { Card } from "../../component/card/card";
import Product from "../../pages/product/product";
import LifeCycle from "../../pages/lifeCycle/lifeCycle";
import Blogpost from "../../pages/blogpost/blogpost";
import CardPages from "../../pages/CardPages/cardpages";
import Detail from "../../pages/blogpost/detail/detail";
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
            




<BrowserRouter>
    <Fragment>
        <div>
            <ul>
                <li>
                   <Link to='/'>home</Link> 
                </li>
                <li>
                   <Link to='/product'>product</Link> 
                </li>
                <li>
                   <Link to='/lifecycle'>lifecycle</Link> 
                </li>
                <li>
                   <Link to='/card'>card</Link> 
                </li>
            </ul>
        </div>
        <Routes>
            <Route path="/" exact element={<Blogpost />}/>
            <Route path="/product" element={<Product/>}/>
            <Route path='/lifecycle' element={<LifeCycle/>}/>
            <Route path='/card' element={<CardPages/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
       </Routes>
    </Fragment>
</BrowserRouter>




        )
    }
}

export default Home;