const dino=document.getElementById("dino");
const cactus=document.getElementById("cactus");


function jump(){
    if(dino.classList!="jump"){
        dino.classList.add("jump");
        setTimeout(function(){
            dino.classList.remove("jump");
        },1000 );
    }
    
}

let isAlive=setInterval(function(){
    let dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"));


    let cactusLeft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft < 40 && cactusLeft> 0 && dinoTop>=140){
        alert("Game over");
    }
    

},20);

document.addEventListener("keydown",function(event){
jump();
});
