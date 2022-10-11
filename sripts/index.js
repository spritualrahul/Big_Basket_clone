//import { fetchdata } from "../component/fetchurl";
let url=`https://bigbasketnewdb.herokuapp.com/products`
let fetchdata=async (url)=>{
    let res =await fetch(url)
    let data=await res.json()
    console.log(data);
    }
    fetchdata(url)