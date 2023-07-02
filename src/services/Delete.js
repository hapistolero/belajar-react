import axios from "axios"
import { OnlineRoot } from "./config"
import { RootPath } from "./config"


const Delete = (path,root) => {
    const promise = new Promise((resolve, reject)=>{

        axios.delete(`${root ? OnlineRoot : RootPath}/${path}`)
        .then((res)=>{
            resolve(res.status)
        }, (err) =>{
            reject(err)
        })
    })
    return promise
}

export default Delete