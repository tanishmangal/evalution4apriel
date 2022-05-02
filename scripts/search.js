// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar,append,results,search} from "../components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()
search()

let query=localStorage.getItem("query")
let url=`https://masai-mock-api.herokuapp.com/news?q=${query}`;
console.log(url)
results(url).then((data)=>{
    append(data)
 })