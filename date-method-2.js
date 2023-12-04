document.write("calculate yesterday"+"<br>")
document.write("-------------------"+"<br>")

var x=new Date();
var s=x.getDate();
x.setDate(s-1) 
document.write(x.toLocaleString()+"<br>")