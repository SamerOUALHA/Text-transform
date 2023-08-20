let uppercase = document.getElementById("uppercase");
let capitalize = document.getElementById("capitalize");
let lowercase = document.getElementById("lowercase");
let inp = document.getElementById("inp");
let outp = document.getElementById("outp");
uppercase.addEventListener("click", function(){
    outp.value = inp.value;
    outp.style.textTransform = "uppercase";
})
capitalize.addEventListener("click", function(){
    outp.value = inp.value;
    outp.style.textTransform = "capitalize";
})
lowercase.addEventListener("click", function(){
    outp.value = inp.value;
    outp.style.textTransform = "lowercase";
})