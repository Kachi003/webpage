

function verify(form){
    let string=document.querySelector(".input").value;
    
     let regex=/^[a-z]+\d*@gmail[.]com/i;
    
    let check=regex.test(string);
    
    if(check==false){
        document.querySelector(".message").style.display="flex";
        return false;
    }
    
    
    }



