function convert(){
const celcius=Number(document.getElementById("input").value)
const far=celcius*9/5+32
const result=document.getElementById("result")
result.innerHTML=far.toFixed(2)+"f";
document.body.style.backgroundColor="green";
document.button.style.Color="orange"
}