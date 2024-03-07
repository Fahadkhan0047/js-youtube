           //             for of  LOOP

    // ["","".""]
    // [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`the value of greet is ${greet}`);
    
}


  // MAPS

const map = new Map()
map.set('IN','India')
map.set('KSA','Saudi Arabia')
map.set('FR','France')
map.set('IN','India')

console.log(map);

for (const [key,value] of map) {
    console.log(value, ":=" , value );
    
}