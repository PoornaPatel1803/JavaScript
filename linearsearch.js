let arr=[12,14,11,4,15,22,23,2,44,3,66,44,7,3,8,90];
let sElement=prompt("enter the element to find(12,14,11,4,15,22,23,2,44,3,66,44,7,3,8,90): ");
for(i=0;i<arr.length;i++){
    if(arr[i]==sElement){
        console.log("found ",sElement," at ",i+1,"th Position");
    }
}