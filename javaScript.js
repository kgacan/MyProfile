
var nizDivova=document.getElementsByName("srednjidiv");
var nizLista=document.getElementsByTagName("li");


for(var i=0; i<nizLista.length; i++){
    nizLista[i].onclick=promijeniListu;
}

var txt = "Ovo je moja web stranica na temu seminarskog rada iz predmeta web razvoj i dizajn (WRD). Nadam se da je dobro uradjena. Ovo je moja web stranica na temu seminarskog rada iz predmeta web razvoj i dizajn (WRD). Nadam se da je dobro uradjena.";

var a=-1;
var b=0;
var siz=56;
var subtxt="x";

for(var i=1; i<txt.length; i++){
    setTimeout("document.getElementById('textdisplay').value=newMake()",i*300);
}

function newMake(){
    a=a+1;
    b=a+siz;
    subtxt=newSub(a,b);
    return subtxt;
}

function newSub(a,b){
    var dio=txt.substring(a,b);
    return dio;
}


function promijeniListu(e){
    var element=e.target;
    for(var i=0; i<nizLista.length; i++){
        if(nizLista[i].classList.contains("on")){
            nizLista[i].classList.remove("on");
        }
    }
    element.classList.add("on");

    promijeniDiv(element.id);
}

function promijeniDiv(id){

    var identifikator=id;
    for(var i=0; i<nizDivova.length; i++){
        if(nizDivova[i].classList.contains("trenutni")){
            nizDivova[i].classList.replace("trenutni","obicni");
            break;
        }    
    }  

    for(var i=0; i<nizDivova.length; i++){
        if(nizDivova[i].id==identifikator){
            nizDivova[i].classList.replace("obicni","trenutni");
            break;
        }
    }

}
function noviprozor(){
    window.open("./radovi/Digitron.html",'popUpWindow','height=550, width=500, left=300, top=50, resizable=yes, scrollbars=yes, toolbar=yes, menubar=no');
}
function noviprozor2(){
    window.open("./radovi/validacija.html",'popUpWindow','height=550, width=500, left=300, top=50, resizable=yes, scrollbars=yes, toolbar=yes, menubar=no');
}

var allEntries=[];
function  sacuvajPodatke(){
    localStorage.setItem("Imeprezime",document.getElementById("ip").value);
    localStorage.setItem("gradposjetioca",document.getElementById("grad").value);
    localStorage.setItem("odabranogodiste",document.getElementById("selectionlist").value);
    localStorage.setItem("oc",document.getElementById("ocjena").value);

    var entry={
        "ip":localStorage.getItem("Imeprezime"),
        "grad":localStorage.getItem("gradposjetioca"),
        "godiste":localStorage.getItem("odabranogodiste"),
        "ocjena":localStorage.getItem("oc")
    }
    var myJSON=JSON.stringify(entry);

    for(var i=0; i<allEntries.length;i++){
        var obj=JSON.parse(allEntries[i]);
        var obj2=JSON.parse(myJSON);
        //var ipvar1=obj.ip;
        //var ipvar2=obj2.ip;
        //alert(ipvar1);

        if(obj.ip.localeCompare(obj2.ip) == 0 && obj.godiste.localeCompare(obj2.godiste) == 0)
        {
            var r=confirm("Osoba je vec ocijenila rad. Da li zelite jos jednom ocijeniti rad?");
            if(r!=true){
                document.getElementById("ip").value="";
                document.getElementById("grad").value="";
                document.getElementById("selectionlist").value="";
                document.getElementById("ocjena").value="";
                return;
            }
        }
    }
        allEntries.push(myJSON);
        document.getElementById("ip").value="";
        document.getElementById("grad").value="";
        document.getElementById("selectionlist").value="";
        document.getElementById("ocjena").value="";

}

function procitajPodatke(){
    $("table tbody tr").remove();
    for(var i=0; i<allEntries.length; i++){
        var objekat=JSON.parse(allEntries[i]);
        $("table").append("<tr><td>"+objekat.ip+"</td><td>"+objekat.grad+"</td><td>"+objekat.godiste+"</td><td>"+objekat.ocjena+"</td>");
    }
}
function obrisiPodatke(){
    $("table tbody tr").remove();
}



