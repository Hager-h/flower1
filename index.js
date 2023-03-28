
// for menu icon
let menu=document.querySelector(".menu")
let links=document.querySelector(" ul")

// for images
let allSmallImages=document.querySelectorAll(".third-part li img")
let bigImage=document.querySelector(".image img")

// for  showing navbar after first page
let first=document.querySelector(".first")
let nav=document.querySelector(".nav-big")
let navHeight=nav.getBoundingClientRect().height


// for menu icon
  menu.addEventListener("click",function(){
      links.classList.toggle("go")
      
  })

// for images and localestorage

 bigImage.src=localStorage.getItem("img")

allSmallImages.forEach((img)=>{
    img.addEventListener("click",function(e){
        bigImage.src="css/images/p1.jpeg"
bigImage.src=e.target.src    
localStorage.setItem("img",e.target.src)

    })
})



// for  showing navbar after first page

let navFunction=function(entries){
const [entry]  =entries
  if(!entry.isIntersecting)  nav.classList.add("borderr")
    else
        nav.classList.remove("borderr")

    
}


let headerObserver=new IntersectionObserver(navFunction, {
    root:null,
    threshold:0,
    rootMargin:`-${navHeight}px`,
});
headerObserver.observe(first)


document.querySelector(".ul-div").addEventListener("click",function(e){
    e.preventDefault();
     if(e.target.closest(".btn-nav")){

    let id=e.target.getAttribute("href")
console.log(id);
document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
links.classList.remove("go")    
}


})