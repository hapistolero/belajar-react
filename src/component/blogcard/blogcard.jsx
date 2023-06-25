import React from "react";

import { useNavigate } from "react-router";

export function  BlogCard(props){
const navigate = useNavigate()
    return(
        <div onClick={()=>navigate(`/detail/${props.data.id}`)} className="card">
        <img src='https://placeimg.com/100/100/any' alt='gambar'/>
        <p >{props.data.title}</p>
        <p>{props.data.body}</p>
        <button onClick={()=> props.remove(props.data.id)}>hapus</button>
        <button onClick={()=> props.update(props.data)}>update</button>
    </div>

    )
}