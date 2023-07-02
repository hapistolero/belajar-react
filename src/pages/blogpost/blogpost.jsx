import React, { Component }  from "react";
import { useNavigate } from "react-router";
import './blogpost.css'
import { BlogCard } from "../../component/blogcard/blogcard";
import axios from 'axios'
import API from "../../services";
export default class Blogpost extends Component{
    state ={
        post:[],
        form:{
            id:'',
            title:'',
            body:''
        },
        isUp:false,
        comments: []

    }

   
    getPost = () =>{
        API.getNewsBlog().then(res =>{
            this.setState({
                post:res
            })
        })

        // API.getComments().then(res =>{
        //     this.setState({
        //         comments:res
        //     })
        // })
       
    }

    handleFormChange = (event) =>{
        let formDataNew = {...this.state.form}
        let id = new Date().getTime()
        if(!this.state.isUp){
            formDataNew['id'] = id
        }
      
        
        formDataNew[event.target.name] = event.target.value
       
        this.setState({
            form : formDataNew
       }, ()=>{
        console.log(this.state.form)
       })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        if(this.state.isUp){
this.putData()
        }else{
            this.postData()
        }
  
    }


    postData= ()=>{
        API.postNewBlog(this.state.form).then((res)=>{
            this.getPost(
                this.setState({
                    form:{
                        id:1,
                        title:'',
                        body: '',

                    }
                })
            )
        })
        
    }

    handleRemove =(data)=>{
        API.deleteBlog(data).then(
            res => {
                this.getPost()
            }
        )
   
    }

    handleUpdate = (data) =>{
        this.setState({
            form: data,
            isUp: true
        })
       
    }

    putData = () =>{
        API.updateNewBlog(this.state.form, this.state.form.id).then((res)=>{
            this.getPost()
            this.setState({
                isUp:false,
                form:{
                    id:'',
                    title:'',
                    body:''
                },


        })
        })
    }
        
    

    handleDetail = (id) =>{
      
        console.log(this.props.navigation)
        
     }
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => 
        //     this.setState({
        //         post: json
        //     }))
this.getPost()

       
    }

  

    render(){
        return(
            <>
            <p>blog</p>

            <form>
                <label for='title'  >Title</label>
                <input value={this.state.form.title} name='title' onChange={this.handleFormChange} type='text' id='title'></input>
                <br></br>
                <label for='body'  >body</label>
                <br></br>
                <textarea  value={this.state.form.body}name='body' onChange={this.handleFormChange} type='text' id='body'></textarea>
                <br></br>
            <button onClick={(e)=>this.handleSubmit(e)}>submit</button>
            
            </form>

{this.state.post.map(post =>{

    return  <BlogCard key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} toDetail={this.handleDetail}/>
}

    )}
    {/* {
        this.state.comments.map(com =>{
            return <p>{com.email}</p>
        })
    } */}
          
            </>
        )
    }
}