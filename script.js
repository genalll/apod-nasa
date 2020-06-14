class Api { 
    constructor(options) { 
      this.baseUrl = options.baseUrl; 
      this.headers = options.headers; 
    } 
   
    getNevs() { 
      return fetch(this.baseUrl, { 
        headers: this.headers 
      }) 
    } 
   
  } 

const img= document.querySelector(".foto");
const text= document.querySelector(".text");
const title= document.querySelector(".data");
const iframe= document.querySelector(".iframe");

const fetche = new Api({ 
    baseUrl: 'https://api.nasa.gov/planetary/apod?api_key=RrA8wz2hkZOhkAdt8deV4ulgT5tRk6yru5v7LMNt', 
    headers: {  
        'Content-Type': 'application/json' 
    } 
});

fetche.getNevs().
then(res => { 
    if (res.ok) { 
        console.log("OK"); 
        return res.json(); 
    } 
}) 
.then(data => { 
    console.log(data);
    if (data.media_type==="video"){
      iframe.setAttribute("src",data.url);
      img.classList.toggle("foto_none");
      text.textContent=data.explanation;
      title.textContent=data.title;
    }
    else{
    img.setAttribute("src",data.hdurl);
    text.textContent=data.explanation;
    title.textContent=data.title;
    iframe.classList.toggle("foto_none");
    }
    })
  
  
    
.catch((err) => { 
    console.log(err); 
}); 

