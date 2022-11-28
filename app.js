function showRating (ratingNumber) {
    let ratings = "";
    for (i = 1; i<=ratingNumber; i++) {
        if (i === ratingNumber) {
            ratings = ratings + "*"
        }

        else {
            ratings = ratings + "* "
        }
    }
    if (!Number.isInteger(ratingNumber)){
        ratings = ratings + ".";
    }
    return ratings;
}

console.log(showRating(4));

function sortLowToHigh(arr1) {
    return arr1.sort((a, b) => a - b)
}

console.log(sortLowToHigh([1, 5, 0, 10, 100015, 2000, 2]));

async function postsByUsers (userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts/")
    const result = await promise.json()
    const posts = result.filter(element => element.userId === userId)
    console.log(posts)
}

postsByUsers(4);

async function firstXIncomplete (exnumber) {
    const promise1 = await fetch("https://jsonplaceholder.typicode.com/todos")
    const results1 = await promise1.json()
    const posts1 = results1.filter(element1 => element1.completed === false).slice(0, exnumber)
    console.log(posts1)

}

firstXIncomplete(4);