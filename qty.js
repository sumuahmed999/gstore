
var q = 0;

function incr(){
  if(q >= 0){
    q++;
  }
  var input = document.getElementById("id1");
  input.value = q;
}

function decr(){
  if(q > 0){
    q--;
  }
  var input = document.getElementById("id1");
  input.value = q;
}