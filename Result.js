let eng=prompt("enter marks for english:");
let mat=prompt("enter marks for maths:");
let sci=prompt("enter marks for science:");

var e=parseInt(eng);
var m=parseInt(mat);
var s=parseInt(sci);

let total=(e+m+s);
console.log("Total marks scored:",total);
let perc=(total/90)*100;

console.log("Percentage:",perc);
if(perc>=80 && perc<=100){
    console.log("grade optained: A");;
}
else if(perc>=70 && perc<=89){
    console.log("Grade obtained: B");
}
else if(perc>=60 && perc<=69){
    console.log("Grade obtained: C");
}
else if(perc>=50 && perc<=59){
    console.log("Grade obtained: D");
}
else if(perc>=0 && perc<=49){
    console.log("Grade obtained: F");
}
else{
    console.log("incorrect output");
}