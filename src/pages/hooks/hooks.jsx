import React, {Component, useEffect, useState} from 'react'

const Hooks = () =>{
 
    const [count, setCount] = useState(0)

    useEffect(()=>
    {
        // component did mount
        document.title=`counter : ${count}`
        
        // component will unmount
        return ()=>{
            document.title='belajar react'
        }
        // component did update
    },[count])

        return(
            <div>
                <p>nilai : {count}</p>
                <button onClick={()=> setCount(count + 1)}>Update</button>
            </div>
        )
    
}

export default Hooks