console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket=['cheese','bread','eggs','milk'];
const maxItems=5;


function addItem(){
let added = basket.unshift('apple');
console.log(`The basket now has the following items: ${basket}`);
//unshift 
}
//- take an input parameter for a string `item`
// add the new item to the global array `basket`. 
// return `true` indicating the item was added

function listItems(){
//for loop
for (i=0; i<basket.length;i++){
    console.log(basket[i]);
}
}// loop over the items in the `basket` array
//console.log each individual item on a new line

function empty(){
    basket.splice(0,basket.length);
    console.log(basket,'no items in the basket');
}// clear items from basket

function isFull(){
    if (basket.length < maxItems){
    console.log(false, ' you have more room in your basket');
    }
    else {
        console.log(true,' There is no more room in the basket.')
    }
}
function removeItem(){
    console.log(basket.pop())
}
//pop
