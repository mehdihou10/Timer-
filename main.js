let ch = document.querySelectorAll(".time .change");
let del = document.querySelectorAll(".time .delete");

let play = document.querySelector(".control i:first-child");
let pause = document.querySelector(".control i:nth-child(2)");
let reply = document.querySelector(".control i:last-child");


if(window.localStorage.getItem("sec")){
    
    ch[2].innerHTML = window.localStorage.getItem("sec");
    if(window.localStorage.getItem("sec")>=10){
        del[2].style.display = "none";
    }

    
    
}

if(window.localStorage.getItem("min")){
    ch[1].innerHTML = window.localStorage.getItem("min");

    if(window.localStorage.getItem("min")>=10){
        del[1].style.display = "none";
    }
}

if(window.localStorage.getItem("hours")){
    ch[0].innerHTML = window.localStorage.getItem("hours");

    if(window.localStorage.getItem("hours")>=10){
        del[0].style.display = "none";
    }
}


let c;
pause.style.display = "none";

    play.onclick = function(){
        setTimeout(function(){
            pause.style.display = "grid";
            play.style.display= "none";
        
        },500);

        
            c = setInterval(function(){
    
                ch[2].innerHTML++;
                if(ch[2].innerHTML >=10){
                    del[2].style.display= "none";
                }
                if(ch[2].innerHTML == "60"){
                    ch[2].innerHTML = "0";
                    del[2].style.display= "block";
                    ch[1].innerHTML++;
                
                   if(ch[1].innerHTML >= 10){
                    del[1].style.display= "none";
                   }
                
                   if(ch[1].innerHTML == "60"){
                    ch[1].innerHTML = "0";
                    del[1].style.display= "block";
                    ch[0].innerHTML++;
                    if(ch[0].innerHTML >=10){
                    del[0].style.display= "none";
                    }
                    
                
                   }
                
                }
        
                window.localStorage.setItem("sec",ch[2].innerHTML);
                window.localStorage.setItem("min",ch[1].innerHTML);
                window.localStorage.setItem("hours",ch[0].innerHTML);
        
        
                
                },1000);
        
       
    };




pause.onclick = function(){
    
        pause.style.display = "none";
        play.style.display = "grid";
    

    clearInterval(c);
   
};

reply.onclick = function(){
ch.forEach((ch)=>{
ch.innerHTML = "0";
});
pause.click();

window.localStorage.setItem("sec","0");
del[2].style.display = "block";

window.localStorage.setItem("min","0");
del[1].style.display = "block";


window.localStorage.setItem("hours","0");
del[0].style.display = "block";

};
