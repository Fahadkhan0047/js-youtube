const user = {
    username: "Fahad",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to My Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai()
// {
//     let username = 'fahad'
//     console.log(this.username)
// }

// chai()

// arrow function

// const addtwonum = (num1,num2) => {

//     return num1+num2

// }

// another way for react

// const addtwonum = (num1,num2) => (num1+num2)

const addtwonum = (num1,num2) => ({username:'Fahad'})

console.log(addtwonum(3,4))