var i = 0;
let mot = document.getElementById("mot")
let hai = document.getElementById("hai")
let ba = document.getElementById("ba")
let bon = document.getElementById("bon")
let nam = document.getElementById("nam")
function one(){
       let img = ["./tang1/khi1.jpg","./tang1/gau1.jpg"]
       mot.src = img[i];
       i++;
       if(i == 2){
              i = 0;
       }
       check();
}
var j = 0;
function two(){
       let img = ["./tang2/gau2.jpg","./tang2/khi2.jpg"]
       hai.src = img[j];
       j++;
       if(j == 2){
              j = 0;
       }
       check();
}
var k = 0;
ba.addEventListener("click",three)
function three(){
       let img = ["./tang3/gau3.jpg","./tang3/khi3.jpg"]
       ba.src = img[k];
       k++;
       if(k==2){
              k=0;
       }
       check();
}
var g = 0;
bon.addEventListener("click",four)
function four(){
       let img = ["./tang4/khi4.jpg","./tang4/gau4.jpg"]
       bon.src = img[g];
       g++;
       if(g==2){
              g=0;
       }
       check();
}
var o = 0;
nam.addEventListener("click",five)
function five(){
       let img = ["./tang5/khi5.jpg","./tang5/gau5.jpg"]
       nam.src = img[o];
       o++;
       if(o==2){
              o=0;
       }
       check();

}


function check(){
       let le1 = document.querySelector(".le1")
       let le2 = document.querySelector(".le2")
       let le3 = document.querySelector(".le3")
       let le4 = document.querySelector(".le4")
       let le5 = document.querySelector(".le5")

       if( mot.src == "http://localhost:63342/th_ifelse_6/tang1/gau1.jpg" && hai.src == "http://localhost:63342/th_ifelse_6/tang2/gau2.jpg" && ba.src =="http://localhost:63342/th_ifelse_6/tang3/gau3.jpg" && bon.src =="http://localhost:63342/th_ifelse_6/tang4/gau4.jpg" && nam.src =="http://localhost:63342/th_ifelse_6/tang5/gau5.jpg"){
              le1.style.display = "block"
              le2.style.display = "block"
              le3.style.display = "block"
              le4.style.display = "block"
              le5.style.display = "block"
       }
       else if(mot.src == "http://localhost:63342/th_ifelse_6/tang1/khi1.jpg" && hai.src == "http://localhost:63342/th_ifelse_6/tang2/khi2.jpg" && ba.src == "http://localhost:63342/th_ifelse_6/tang3/khi3.jpg" && bon.src == "http://localhost:63342/th_ifelse_6/tang4/khi4.jpg" && nam.src == "http://localhost:63342/th_ifelse_6/tang5/khi5.jpg"){
              le1.style.display = "block"
              le2.style.display = "block"
              le3.style.display = "block"
              le4.style.display = "block"
              le5.style.display = "block"
       }
       else{
              le1.style.display = "none"
              le2.style.display = "none"
              le3.style.display = "none"
              le4.style.display = "none"
              le5.style.display = "none"
       }
}

