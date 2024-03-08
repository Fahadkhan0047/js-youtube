// reduce()

const num = [1,2,3,4]

// const myTotal = num.reduce(function(acc,currval){

//     console.log(`value of acc is ${acc} and val of currentval is ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = num.reduce((acc,curval) => (acc+curval),0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'Javascript Course',
        Price: 299
    },
    {
        itemName: 'Python Course',
        Price: 899
    },
    {
        itemName: 'Data Science Course',
        Price: 1999
    },
]

const Totalamt = shoppingCart.reduce((acc,item)=>acc+ item.Price, 0)

console.log(Totalamt);