import React , {Component, Fragment, createContext} from "react";
import {BrowserRouter ,Routes, Route, Link} from 'react-router-dom'
import { Card } from "../../component/card/card";
import Product from "../../pages/product/product";
import LifeCycle from "../../pages/lifeCycle/lifeCycle";
import Blogpost from "../../pages/blogpost/blogpost";
import Hooks from "../../pages/hooks/hooks";
import CardPages from "../../pages/CardPages/cardpages";
import Detail from "../../pages/blogpost/detail/detail";
import GlobalProvider from "../../context/context";
// context


class Home extends Component{


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
                <li>
                   <Link to='/hooks'>hooks</Link> 
                </li>
            </ul>
        </div>
        <Routes>
            <Route path="/" exact element={<Blogpost />}/>
            <Route path="/product" element={<Product/>}/>
            <Route path='/lifecycle' element={<LifeCycle/>}/>
            <Route path='/card' element={<CardPages/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path="/hooks" element={<Hooks/>}></Route>
       </Routes>
    </Fragment>
</BrowserRouter>




        )
    }
}

export default GlobalProvider(Home);