"use strict";

var totalWeight = 0;
var count = 0;

function truck(){
    let id = prompt("Enter the id of the parcel: ");
    console.log("Parcel ID is: "+id);

    let weight = prompt("\nEnter the weight of the parcel(kg): ");
    console.log("Parcel weight is: "+weight);

    totalWeight = totalWeight + parseFloat(weight);
    count++;
}

let ans = prompt("Do you want to add a parcel:yes/no- ");  

while(ans=="yes"){
    truck();
    ans = prompt("Do you want to add another parcel:yes/no- ");   
}

alert("All parcel(s) added!");
alert("Total weight of the truck:(kg) "+totalWeight);
alert("Total no. of parcels: "+count);
