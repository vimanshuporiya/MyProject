const str ='123456789';

function reverseStr(str) {
    let output =''
   for(let i =str.length-1; i >= 0; i-- ){
       output = output + str[i]

   }
  return output
}
console.log(reverseStr(str));
