a=document.querySelectorAll(".drum");
totalNumber=a.length;
//for all buttons (click)
for(var i=0; i<totalNumber; i++)
{
    a[i].addEventListener("click",function(){
        var clickedDrum= this.innerHTML;
        drumSound(clickedDrum);
    })
}

//for all buttons (keys)
document.addEventListener("keypress",function(event)
{
    var key=event.key;
    drumSound(key);  
    buttonAnimation(key);
})
//for drum sounds
function drumSound(key)
{
    switch(key){
        case "w": var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
        case "a": var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case "s": var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case "d": var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case "j": var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "k": var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case "l": var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
    }
}

//for button animation
function buttonAnimation(activeKey){
    var activeButton=document.querySelector("."+ activeKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
    
}