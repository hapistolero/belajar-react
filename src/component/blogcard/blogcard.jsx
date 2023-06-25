import React from "react";


export  const BlogCard = (props) =>{

    return(
        <div className="card">
        <img src='https://placeimg.com/100/100/any' alt='gambar'/>
        <p>{props.data.title}</p>
        <p>{props.data.body}</p>
        <button onClick={()=> props.remove(props.data.id)}>hapus</button>
        <button onClick={()=> props.update(props.data)}>update</button>
    </div>

    )
}