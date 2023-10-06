const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input = document.getElementById("resultabsence");
const reven = document.getElementById("reven");
const sel = document.getElementById("sel");
const re = document.getElementById("re");
var io;
var is;
var ww;
var ll;
var op;
var po;
function ff() {
 if (sel.value==="Alabama" && input1.value< 940000) {



//    (totalAnnualAbsences * EDHDPV) * -1    
   
    io=input1.value;
    is=Math.round((Number(io)*0.25)/208);
    reven.innerHTML=is;
        

   ww=input2.value;
   ll=Number(ww)*12;
   input.innerHTML=ll; 

   
   po=Math.round(input.innerHTML * reven.innerHTML);
   re.innerHTML=po;
    }
else{
    reven.innerHTML === "0$";
};

}
