 function R() {
    var n1 = document.getElementById("result").value;
    var n2 = eval(n1);
    document.getElementById('result').value = n2;
 }
 function B() {
   var ev = document.getElementById("result");
   ev.value = ev.value.slice(0,-1);
}
 function C() {
    var input = document.getElementById("result");
    input.value = '';
 }
 function S(val) {
   var v = document.getElementById("result");
   v.value = v.value+val;
}
