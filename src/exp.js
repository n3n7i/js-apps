
var exp_Elem = document.createElement("div");
document.body.append(exp_Elem);

exp_Elem.log = function(xstr){ exp_Elem.innerHTML += xstr;}
exp_Elem.log("hello world");

