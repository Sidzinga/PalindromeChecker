
function rearrangePalindrome(str){



let capCheck = [] // Used to store capital letters for case sensitive palindrome checker
let short = str.toLowerCase().replaceAll(/\W|_/g,'') 
let split = short.split('') //Splits filtered string so that for loops may loop through each letter

let rearrange = split.sort() // Sorted array of Split letters
let index = []  // Index for sorted array of letters added by 1
let count = []  //Count for each letter 

let i // Used for indexing in each for loop
let confirmation =[] // Stores values representing the count of odd letters
let splitStr = str.split('') // Used to split string to array, to check for capital letters in case sensitive palindrome checker
let last // Pushed from for loop to index

// Checking for capital letters first

// for(i = 0; i<splitStr.length; i++){
// if(splitStr[i] == splitStr[i].toUpperCase()){
//    capCheck.push(splitStr[i])
// }
// }

// if(capCheck.length > 0 && capCheck.length < str.length){
//    return console.log("This string cannot be rearranged to a palindrome")
// }






for( i =0;i<rearrange.length;i++){

if(rearrange[i]!== rearrange[i-1]){
    last = (rearrange.lastIndexOf(rearrange[i])).valueOf() + 1
  
index.push(last)

} 
 
} 
count.push(index[0])
for(i = index.length - 1;i > 0; i--){
let x = (index[i] - index[i-1]).valueOf()
count.push(x);


 }




 for(i = 0;i<count.length;i++ ){
   if(count[i] % 2 !== 0){
confirmation.push(count[i])
   } 
 }
 
 console.log(count)
 console.log(index)
console.log(confirmation)
console.log(confirmation.length)

console.log(rearrange)








let result
if (confirmation.length == 1 || confirmation.length == 0){
   // return console.log("This string can be rearanged to a palindrome")
   result = confirmation.length == 1 || confirmation.length == 0
}
else if (confirmation.length > 1 && confirmation.length !== 0){
   // return console.log("This string cannot be rearranged to a palindrome")
   result = (confirmation.length == 1 || confirmation.length == 0)
}

if(index[0] % 2 !== 0 && index){}
console.log(result)
 return result

}







rearrangePalindrome("")
