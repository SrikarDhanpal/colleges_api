url="http://universities.hipolabs.com/search?name="
async function getcols(country) {
    try{

        let res=await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("Error: ",e);
    }
    
}
btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    let cols=await getcols(country);
    showcols(cols);
})
function showcols(cols){
    let ul=document.querySelector("ul");
    list.innerText="";
    for(col of cols){
        console.log(col);
        let li=document.createElement("li");
        li.innerText=col.name;
        ul.appendChild(li);
    }   
}