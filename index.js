const textbox=document.getElementById("textbox");
const tofah=document.getElementById("tofah");
const tocel=document.getElementById("tocel");
const result=document.getElementById("result");

let temp;

function convert(){
    event.preventDefault();
  if(tofah.checked){
    temp=Number(textbox.value);
    temp=temp * 9 / 5 + 32;
    result.textContent=temp.toFixed(2)+"❄️F";

  }
  else if(tocel.checked){
    temp=Number(textbox.value);
    temp=(temp-32) * (5/9) ;
   result.textContent=temp.toFixed(2) +"❄️C";
  
  }
  else{
     result.textContent="select a unit";
  }


}