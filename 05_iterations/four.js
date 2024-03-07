const myObject = {
    js: 'javacript',
    py: 'python',
    cpp: 'c plus plus',
}

for (const key in myObject) {
    // console.log(myObject[key]);
    console.log(`${key} is for ${myObject[key]}`);
    
}