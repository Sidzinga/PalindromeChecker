
function rearrangePalindrome(str){



let capCheck = []
let short = str.toLowerCase().replaceAll(/\W/g,'')
let split = short.split('')

let rearrange = split.sort()
let index = []
let difference = []
let i
let confirmation =[]
let splitStr = str.split('')
let last

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
    last = (rearrange.lastIndexOf(rearrange[i])).valueOf()
  
index.push(last)

} 
 
} 

for(i = index.length - 1;i > 0; i--){
let x = (index[i] - index[i-1]).valueOf()
difference.push(x);


 }




 for(i = 0;i<difference.length;i++ ){
   if(difference[i] % 2 !== 0){
confirmation.push(difference[i])
   } 
 }
 
//  console.log(difference)
 
// console.log(confirmation)
// console.log(confirmation.length)

// console.log(rearrange)

if (confirmation.length == 1 || confirmation.length == 0){
   // return console.log("This string can be rearanged to a palindrome")
   return confirmation.length == 1 || confirmation.length == 0
}
else if (confirmation.length > 1 && confirmation.length !== 0){
   // return console.log("This string cannot be rearranged to a palindrome")
   return (confirmation.length == 1 || confirmation.length == 0)
}
 

}






rearrangePalindrome("Was it a car or a cat I saw?")
console.log(rearrangePalindrome("Was it a car or a cat I saw?"))
