//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        console.log("5 is the best number");
    }
    console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop ${j} and Inner Loop ${i}`);
        
    }
}
let myArray = ["flash", "Superman","Batman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

for (let i = 0; i <= 20; i++) {
    if (i==5) {
        console.log(`detected 5`);
        // break
        continue
        
    }
    console.log(`Value of i is ${i} `);
    
}