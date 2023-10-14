const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input = document.getElementById("resultabsence");
const reven = document.getElementById("reven");
const sel = document.getElementById("sel");
const shift= document.getElementById("time")
const re = document.getElementById("re");
var shiftlen; 
var io;
var is;
var ww;
var ll;
var op;
var po;
var wage;
var EPTK;
var savings;
if (sel.value==="Alabama") {
    wage=34.03;
}
else if (sel.value==="Alaska") {
    wage=67.67;
}
else if (sel.value==="Arizona") {
    wage=52.69;
} 
    else if (sel.value==="Arkansas") {
        wage=51.11;
    }
    else if (sel.value==="California") {
        wage=67.11;
    }
    else if (sel.value==="Colorado") {
        wage=53.20;
    }
    else if (sel.value==="Connecticut") {
        wage=52.48;
    }    
    else if (sel.value==="Delaware") {
        wage=50.95;
    }
    else if (sel.value==="District") {
        wage=66.57;
    }
    else if (sel.value==="Florida") {
        wage=41.62;
    }
    else if (sel.value==="Georgia") {
        wage=50.39;
    }
    
    if (shift.value==="1") {
        shiftlen=1;
    } else if (shift.value==="2") {
        shiftlen=2;
    } 
    else if (shift.value==="3") {
    shiftlen=3;
} 
else if (shift.value==="4") {
    shiftlen=4;
}  else if (shift.value==="5") {
    shiftlen=5;
}  else if (shift.value==="6") {
    shiftlen=6;
        
}  else if (shift.value==="7") {
    shiftlen=7;
}  else if (shift.value==="8") {
    shiftlen=8;
}  else if (shift.value==="9") {
    shiftlen=9;
} 
else if (shift.value==="10") {
    shiftlen=10;
}  else if (shift.value==="11") {
    shiftlen=11;
}  else if (shift.value==="12") {
    shiftlen=12;
} 
function ff() {


 



//    (totalAnnualAbsences * EDHDPV) * -1    
   
    io=input1.value;
    // EDHDPV =is
    is=(Number(io)*0.25)/208;
    

    // ch
    
        
    //Annual Absences
   ww=input2.value;
   ll=Number(ww)*12;
   input.innerHTML=ll; 

  // Annual Production Lost 
   po=Math.round(ll * is);
   reven.innerHTML=po;
    //Estimated Savings
    //EPTK = shift * (WBS + (WBS * 0.3)) * totalAnnualAbsences
    EPTK =Number(shiftlen)*(((Number(wage)+(Number(wage) * 0.3)))*Number(ll));
    // input.innerHTML=EPTK; 
     savings=(ll* is)-EPTK;
    re.innerHTML=Math.round(savings);
    if (savings<=0) {
        re.innerHTML=0;
    }
    return    
}



