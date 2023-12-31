import axios from "axios"
import { OnlineRoot } from "./config"
import { RootPath } from "./config"


const Post = (path, root, data) =>{

    const promise = new Promise((resolve, reject) => {
        axios.post(`${root ? OnlineRoot : RootPath}/${path}`,data)
        .then((res)=> {
            console.log(res)
            resolve(res)
            
        },
        
        (err)=>
       reject(err)
        )
    })

    return promise

    

}

export default Post