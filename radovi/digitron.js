



/*var nizOperanada = {"Plus": "+","Minus": "-","Puta": "*","Podijeljeno": "/"};
alert(nizOperanada.length);
for(var i=0; i<nizOperanada.length; i++){
        alert("poruka");
}*/

function izbrisi(){
    document.getElementById("display").innerHTML="";
}

function izracunajUkupno(znak){


    var divdisplay=document.getElementById("display");

    if(divdisplay.innerHTML.length==30)
        divdisplay.innerHTML+="\n";

    if(znak=="+" || znak=="-" || znak=="*" || znak=="/"){
        if(divdisplay.innerHTML=="")
            return;
        if(divdisplay.innerHTML.includes("+") || divdisplay.innerHTML.includes("-") ||
        divdisplay.innerHTML.includes("*")|| divdisplay.innerHTML.includes("/")){
            return;
        }
        divdisplay.innerHTML+=znak;
        return;
        
    }
    if(znak=="."){
        if(divdisplay.innerHTML=="")
            return;

        if(divdisplay.innerHTML[divdisplay.innerHTML.length-1]=="+" || divdisplay.innerHTML[divdisplay.innerHTML.length-1]=="-" ||
        divdisplay.innerHTML[divdisplay.innerHTML.length-1]=="*" || divdisplay.innerHTML[divdisplay.innerHTML.length-1]=="/")
           return;     
        
        var niz;
        var br1,br2;
        if(divdisplay.innerHTML.includes("+")){
            var niz=divdisplay.innerHTML.split("+");
            br1=niz[0];
            br2=niz[1];
            if(br2.includes("."))
                return;
        }
        if(divdisplay.innerHTML.includes("-")){
            var niz=divdisplay.innerHTML.split("-");
            br1=niz[0];
            br2=niz[1];
            if(br2.includes("."))
                return;
        }
        if(divdisplay.innerHTML.includes("*")){
            var niz=divdisplay.innerHTML.split("*");
            br1=niz[0];
            br2=niz[1];
            if(br2.includes("."))
                return;
        }
        if(divdisplay.innerHTML.includes("/")){
            var niz=divdisplay.innerHTML.split("/");
            br1=niz[0];
            br2=niz[1];
            if(br2.includes("."))
                return;
        }

        var brojac=0;
        for(var i=0; i<divdisplay.innerHTML.length; i++){
            if(divdisplay.innerHTML[i]==".")
                brojac++;
        }
        if((divdisplay.innerHTML.includes("+")|| divdisplay.innerHTML.includes("-") ||
        divdisplay.innerHTML.includes("*") ||divdisplay.innerHTML.includes("/")) && (brojac>=2))
            return;
        if((!divdisplay.innerHTML.includes("+") && !divdisplay.innerHTML.includes("-") &&
        !divdisplay.innerHTML.includes("*") && !divdisplay.innerHTML.includes("/")) && (brojac>=1))
            return;
    }
    if(znak=="0" && divdisplay.innerHTML=="0")
        return;
    
        var posljednjaDvaKaraktera=divdisplay.innerHTML.slice(-2);
    if(znak=="0" && (posljednjaDvaKaraktera=="+0" || posljednjaDvaKaraktera=="-0" ||
    posljednjaDvaKaraktera=="*0" || posljednjaDvaKaraktera=="/0"))
        return;

    divdisplay.innerHTML+=znak;
}

function izracunaj(){
    var ukupno;
    var broj1;
    var broj2;
    var ispis=document.getElementById("display");
    var sadrzajdiva=document.getElementById("display").innerHTML;

    if(sadrzajdiva[sadrzajdiva.length-1]=="+" || sadrzajdiva[sadrzajdiva.length-1]=="-" ||
    sadrzajdiva[sadrzajdiva.length-1]=="*" || sadrzajdiva[sadrzajdiva.length-1]=="/") 
        return;

    if(sadrzajdiva.includes("+")){
        var niz=sadrzajdiva.split("+");
        broj1=niz[0];
        broj2=niz[1];
        if(broj1.includes("."))
            broj1=parseFloat(broj1);
        else
            broj1=parseInt(broj1);       
        if(broj2.includes("."))
            broj2=parseFloat(broj2);
        else
            broj2=parseInt(broj2);
        ukupno=broj1+broj2;
        ispis.innerHTML=ukupno;
    }
    else if(sadrzajdiva.includes("-")){
        var niz=sadrzajdiva.split("-");
        broj1=niz[0];
        broj2=niz[1];
        if(broj1.includes("."))
            broj1=parseFloat(broj1);
        else
            broj1=parseInt(broj1);       
        if(broj2.includes("."))
            broj2=parseFloat(broj2);
        else
            broj2=parseInt(broj2);
        ukupno=broj1-broj2;
        ispis.innerHTML=ukupno;
    }
    else if(sadrzajdiva.includes("*")){
        var niz=sadrzajdiva.split("*");
        broj1=niz[0];
        broj2=niz[1];
        if(broj1.includes("."))
            broj1=parseFloat(broj1);
        else
            broj1=parseInt(broj1);       
        if(broj2.includes("."))
            broj2=parseFloat(broj2);
        else
            broj2=parseInt(broj2);
        ukupno=broj1*broj2;
        ispis.innerHTML=ukupno;
    }
    else if(sadrzajdiva.includes("/")){
        var niz=sadrzajdiva.split("/");
        broj1=niz[0];
        broj2=niz[1];
        if(broj1.includes("."))
            broj1=parseFloat(broj1);
        else
            broj1=parseInt(broj1);       
        if(broj2.includes("."))
            broj2=parseFloat(broj2);
        else
            broj2=parseInt(broj2);
        ukupno=broj1/broj2;
        ispis.innerHTML=ukupno;
    }
}