import axios from 'axios'

export default function result(){
    axios.get("http://localhost:4200/").then(res => {
        console.log(res.db("sample_airbnb"))
    })
}