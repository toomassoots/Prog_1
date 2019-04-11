var a = 1;
var b = "2";
if(typeof b =="string"){
    b = parseInt(b) // täisarvuks teisendamine (vt.ka ParseFloat)
}
var c = a+b;
/*if(typeof c =="string"){
    c = parseInt(c)
}*/
c=c.toString();//Tekstiks teisendamine 
