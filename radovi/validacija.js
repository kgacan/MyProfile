


var elementi=document.getElementsByTagName("input");
for(var i=0; i<elementi.length; i++){
    if(elementi[i].type != "submit")
        elementi[i].onblur=validateInput;
}
document.getElementById("nivoskole").onblur=validateInput;

var forma=document.forms["forma1"];
var nizParagrafa=forma.getElementsByTagName("p");

document.getElementById("clear").onclick=clear;


function validateInput(e){

    var element=e.target;
    if(element== null)
        element=e;
    var valid=true;
    var identifikator;
    if(element.value=="")
        valid=false;
    else{
        switch(element.id){
            case "username":
                if(element.value.length<3){
                    valid=false;
                }
                break;
            case "email":
                var provjera=true;
                var regexWord=/[@]/;
                provjera=regexWord.test(element.value);
                if(element.value<3 || provjera==false)
                    valid=false; 
                break;
            case "lozinka":
                var regexWords= /[a-zA-Z]/;
                var regexNumbers= /[0-9]/;
                valid=regexNumbers.test(element.value) && regexWords.test(element.value);
                if(valid==false)
                break;
            case "lozinka2":
                if(element.value != document.getElementById("lozinka").value){
                    valid=false;
                }
                break;
            case "nivoskole":
                if(element.value=="none")
                    valid=false;
                break;
            
            default:
        }
    }
    if(!valid){
        element.classList.add("error");
        switch(element.id){
            case "username":
                document.getElementById("p1").innerHTML="Neispravno uneseno polje!";
            break;
            case "email":
                document.getElementById("p2").innerHTML="Neispravno uneseno polje!";
            break;
        case "lozinka":
                document.getElementById("p3").innerHTML="Neispravno uneseno polje!";
            break;
        case "lozinka2":
                document.getElementById("p4").innerHTML="Neispravno uneseno polje!";
            break;
        default:
        }
    }
    else{
        element.classList.remove("error");
        switch(element.id){
            case "username":
                document.getElementById("p1").innerHTML="";
            break;
        case "lozinka":
                document.getElementById("p3").innerHTML="";
            break;
        case "lozinka2":
                document.getElementById("p4").innerHTML="";
            break;
        default:
        }
    }
    return valid;
}

function clear(){
    for(var i=0; i< elementi.length; i++){
        if(elementi[i].type != "submit"){
            //elementi[i].value="";
            elementi[i].classList.remove("error");
        }
    }
        for(var i=0; i<nizParagrafa.length; i++){
            if(nizParagrafa[i].innerHTML != ""){
                 nizParagrafa[i].innerHTML="";
            }
        }
    var list=document.getElementById("nivoskole");
    list.selectedIndex=0;
    list.classList.remove("error");
}

function validateForm(){
    var valid=true;
    for(var i=0; i<elementi.length; i++){
        if(elementi[i].type !="submit"){
            if(!validateInput(elementi[i]))
                valid=false;
        }
    }
    if(!validateInput(document.getElementById("nivoskole")))
        valid=false;
    return valid;
}
