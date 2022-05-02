// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar,append,results, search} from "../components/navbar.js";
console.log(navbar())
let q="in"

let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${q}`
 results(url).then((data)=>{
    append(data)
 })

search()




 