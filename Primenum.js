let val=prompt("Enter the number:");
let flag;
for(i=2;i<(val/2);i++){
    if(val%i==0){
        flag=1;
    }
}
if(flag==1){
    console.log(val,"is not prime");
}else{
    console.log(val,"is prime");
}