
let ourItem = document.getElementsByClassName("item");
let openIcon = document.getElementsByClassName("iconOpen");
let closeIcon = document.getElementsByClassName("iconClose");

// console.log(ourItem);

for (let i = 0; i < ourItem.length; i++) {

    closeIcon[i].style.display = "none";



    ourItem[i].addEventListener("click",()=>{
      let result = ourItem[i].classList.toggle("active");

    });
    
}