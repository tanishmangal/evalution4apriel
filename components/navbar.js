function navbar(){
    return  `<a  href="index.html">Home</a>
      <input type="text"  id="search_input" placeholder="Search..">
    <button id="btn">search</button>`
};

async function results(url){
  try{
   const res=await fetch(url);
   const data=await res.json();
   return data.articles
  }catch(err){  
      console.log(err)
  }
}


function append(data){
  data.forEach(ele => {
  let div1=document.createElement("div")
  div1.setAttribute("class","news")
  let div2=document.createElement("div")
  div2.style.width="38%";
  div2.style.height="100%"
  
  let div3=document.createElement("div")
  div3.style.width="60%";
  div3.style.height="100%"
  
  let image=document.createElement("img");
  image.src=ele.urlToImage;
  image.style.width="100%"
  image.style.height="100%"
 
  div2.append(image)
  let title=document.createElement("h3");
  title.innerText=ele.title
  let btn=document.createElement("button")
  btn.setAttribute("id","btn")
  let a1=document.createElement("a")
  a1.innerText="See News"
  a1.style.color="black"
  a1.style.textDecoration="none"
  btn.append(a1)
  div3.append(title,btn)
  div1.append(div2,div3)
  document.querySelector("#results").append(div1)
 })
 } 




 function search(){
  document.querySelector("#btn").addEventListener("click",function(){
      myFunction();
  })
  
  function myFunction(){
    let query=document.querySelector("#search_input").value;
    localStorage.setItem("query",query)
    location.href="search.html"
  }
  }

export{navbar,append,results,search}