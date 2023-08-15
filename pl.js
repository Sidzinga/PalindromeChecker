
function palindrome(str){
    let shrt = str.toLowerCase().replaceAll(/\W/g,'')
 let rvrs = shrt.split('').reverse().join('')
 console.log(rvrs == shrt)
return rvrs == shrt


}
palindrome("Was it a car or a cat I saw?")
//console.log(palindrome("Was it a car or a cat I saw?"))
