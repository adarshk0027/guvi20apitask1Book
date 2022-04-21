async function GetData(){
    try{
        const result=await fetch("https://the-dune-api.herokuapp.com/books/10")
        const data=await result.json()
        console.log(data);
        return data
    }
    catch{
        console.log("error");
    }
    
}

let count=0
async function displayData(){
    let info=await GetData()
    console.log(info);
    const first=document.getElementById('first');
    const body=document.getElementById('body')
    info.forEach(element => {
        //div1 created 
     count++    
    let div=document.createElement('div');
    let countDiv=document.createElement('div');
    let div1=document.createElement('div');
    let div2=document.createElement('div')
    first.append(div)
    div.append(countDiv)
    countDiv.classList.add('count','bg-warning');
    countDiv.innerText=count
    div.append(div1)
    //add class to div
    div.classList.add('col-md-6','firstDiv');
    div1.innerHTML=`<h3> ${element.title} </h3>`
    div1.classList.add('Title');
    //title div ends
    //author and year div starts
    div.appendChild(div2);
    div2.classList.add('row');
    let div3=document.createElement('div')//for Author Name
    let div4=document.createElement('div')//its For Year
    //append to div2
    div2.append(div3)
    div3.classList.add('col-md-12')
    //Author Creation
    div3.innerHTML=`<h3>Author: <span class="span">${element.author}</span></h3>`
    div2.append(div4)
    div4.classList.add('col-md-12')

    //year giving
    div4.innerHTML=`<h4>Year: <span class="span">${element.year}</h4>`
    //ends Author AND year section
    //starts Wiki Section
    let div5=document.createElement('div')
    div.appendChild(div5)
    div5.classList.add('row')
    
    //create div for wiki
    let div6=document.createElement('div')
    div5.appendChild(div6)
    div6.classList.add('col-md-12')
    div6.innerHTML=`<h4>  <span class="span"> <small> ${element.wiki_url} </small>  </h4>`
    body.append(first)
    });
    


}
displayData()