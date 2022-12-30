import axios from 'axios'

export default function result(){
    axios.get("/").then(res => {
        console.log(res.data)
        
    }).catch(() => {
        alert('Data has not been received')
    })
}