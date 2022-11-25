// for (let i=1; i<=20; i++) {
//     if (i%3===0 && i%5===0) {
//         console.log("Frontend Simplified")
//     }
//     else if(i%3===0) {
//         console.log("Frontend")
//     }
    
//     else if(i%5===0) {
//         console.log("Simplified")
//     }

//     else{
//         console.log(i)
//     }
// }

// let str = "Frontend Simplified"

// for (let i = 0; i<=str.length-1; i++) {
//     console.log(str[i])
// }

// function welcomePersonToFES(firstName, lastName) {
//     console.log("Welcome to FES, " + firstName + " " + lastName)
// }

// welcomePersonToFES("David", "Bragg");
// welcomePersonToFES("Joshua", "Richter");

// function convertCelsiusToFarenheit (celsius) {
//     return celsius*1.8+32
// }

// console.log(convertCelsiusToFarenheit(0));
// console.log(convertCelsiusToFarenheit(10));
// console.log(convertCelsiusToFarenheit(30));

// let arr = [20, 30, 40, 50, 100]

// let newArr = arr.filter(element => {
//     if (element < 50){
//         return true;
//     }
// })
// console.log(newArr);

// let grades = ["FAIL", "FAIL", "FAIL"]

// let newArray = grades.filter(x =>{
//     if (x !== "FAIL"){
//         return true;
//     }
// })

// console.log(newArray)

// let grades = ["A+", "A", "FAIL"];
// let newGrades = [];

// for (i = 0; i<=grades.length-1; i++){
//     if (grades[i] !== "FAIL"){
//         newGrades.push(grades[i])
//     }
// }

// console.log(newGrades)

// let dollars = [0, 10, 20];

// let newCents = dollars.map((element) => {
//     return element*100;
// })

// console.log(newCents);

// let dollars = [1, 5, 10, 3];
// let cents = [];

// for (i = 0; i<= dollars.length-1; i++) {
//     cents.push(dollars[i]*100);
// }

// console.log(cents);

let users = [
    {
    username: "Joshua",
    email: "jed4997@gmail.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordID: "Josh#001",
    lessonsCompleted: [0, 1]
    },
    {
    username: "David",
    email: "david@frontendsimplified.com",
    subscriptionStatus: "VIP",
    discordID: "David#001",
    lessonsCompleted: [0, 1, 2, 3]
    }
]

function logIn(email, password) {
    for (let i = 0; i <= users.length-1; i++) {
        if (users[i].email === email) {
            console.log(users[i].email)
            if (users[i].password === password) {
                console.log("Log the user in.")
            }
            else {
                console.log("Password is incorrect.")
            }
        }
    }
}

logIn("jed4997@gmail.com", "test123")

function Register (name, email, password, subscriptionStatus, discordID, lessonsCompleted) {
    let newUser = {
        newUsername: name,
        newEmail: email,
        newPassword: password,
        newSubscriptionStatus: subscriptionStatus,
        newDiscordID: discordID,
        newLessonsCompleted: lessonsCompleted
    }
    users.push(newUser);
    console.log(users);
}

Register ("Ian", "emart630@gmail.com", "password123", "VIP", "Zen#001", [0, 1, 2]);

function changeTitleToRed() {
    document.querySelector(".title").style.color = "red";
}