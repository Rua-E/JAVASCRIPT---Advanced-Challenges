function showRating(rating){
    //INITIALIZED EMPTY STRING
    let ratings = "";
    //LOOP THROUGH ROUNDED DOWN RATING
    for (let i=0; i< Math.floor(rating); i++){
        //ADD A START FOR EVERY ITTERATION
        ratings += '*'
        //IF IT IS NOT THE LAST ITTERATION, ADD A SPACE
        if (i !== rating -1){
            ratings += ' '
        }
    }

    //IF THE NUMBER IS NOT AN INTEGER THEN ADD A PERIOD
    if (!Number.isInteger(rating)){
        ratings = ratings + '.'
    }
    //RETURN RATINGS
    return ratings
}
console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));

function sortLowToHigh(prices){
    return prices.sort((a, b) => a - b);
}
console.log(sortLowToHigh([20,40,10,30,50,10]));
console.log(sortLowToHigh([20,40,10,30,50,10]));
console.log(sortLowToHigh([20,40,10,30,50,10]));

function sortHighToLow(numbers) {
    return numbers.sort((a,b) => {
       return b.price - a.price
    });
}
console.log(sortHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10},
])
);


//CALL API

async function postsByUser(userId){
    
    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts/");
    
    const result = await promise.json()

    const posts = result.filter(element => element.userId === userId)
    
    console.log(posts)
}


postsByUser(4);


async function firstSixIncomplete(userId) {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/todos/");

    const result = await promise.json()

    const incompleteTasks = result.filter(elem => !elem.completed).slice(0,6);

    console.log (incompleteTasks)
}

firstSixIncomplete(6)

