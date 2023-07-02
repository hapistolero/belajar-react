import axios from "axios"
import { OnlineRoot } from "./config"
import { RootPath } from "./config"


const Put = (path, root, data) =>{

    const promise = new Promise((resolve, reject) => {
        axios.put(`${root ? OnlineRoot : RootPath}/${path}`,data)
        .then((res)=> {console.log(res)
            resolve(res.status)
        },

     

        
        (err)=>
       reject(err)
        )
    })


    return promise



}

export default Put