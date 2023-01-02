import axios from 'axios'

export default function Result(req, res){
    axios.get("localhost:4444/api").then(res => {
        console.log(res)
        
    }).catch(() => {
        alert('Data has not been received')
    })
} 