import React, { Component, useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Detail() {
    const { id } = useParams();
  
    const [data,setData] = useState({
        title:'',
        body:''
    })

     const getData =()=>{
        axios.get(`http://localhost:3005/posts/${id}`)
        .then((res)=>{
setData({
    title: res.data.title,
    body: res.data.body
})
console.log(res.data)
        })
     }

     useEffect(() => {
        getData()
        return () => {
          // Code to run on component unmount
          // Clean up resources, cancel subscriptions, etc.
        };
      }, []);
    
   
        return(
            <>
            <p>detail</p>
            <p>Title :{data.title}</p>
            <p>Title :{data.body}</p>
            </>
        )
   
}