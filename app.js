//Then
const emailRef = document.querySelector(".email")
const statusRef = document.querySelector(".status")

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     emailRef.innerHTML = data.email;
//   });

// Async Await

async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json()
    emailRef.innerHTML = data.email;

}

main();

function getVideo (subscriptionStatus) {
    return new Promise ((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("Show video");
        }
        else if (subscriptionStatus === "FREE") {
            resolve("Show trailer");
        }
        else {
            reject("no video");
        }
    })
}

async function main1(){
    const status = await getVideo("VIP");
    statusRef.innerHTML = status;
}

main1();