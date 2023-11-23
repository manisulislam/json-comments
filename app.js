const json_data=()=>{
        
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res=>res.json())
    .then(data=>all_data(data))
}

const all_data=(data)=>{
    console.log(data);
    const total=document.getElementById("total");
    total.innerText=data.length;
    const first_container=document.getElementById("first_container");
    data.forEach(element => {
        const div=document.createElement("div");
        div.classList.add("first_container");
        div.innerHTML=`
        <h1>${element.name}</h1>
        <p>${element.email}</p>
        <p>${element.body.slice(0,50)}</p>
        `;
        first_container.appendChild(div);
    
    })
}