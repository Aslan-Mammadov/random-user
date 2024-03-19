import axios from "axios"
const Base_Url = "https://api.randomuser.me";
export async function fetchUser(){
    let response= await axios.get(Base_Url)
    return response.data.results[0]
}