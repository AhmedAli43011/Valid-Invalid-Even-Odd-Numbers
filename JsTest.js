// let value=document.getElementById("input") +""
// isNaN(value)

// // can be wrapped for making simple and readable
// function isNumeric(value){
//   return !isNaN(value)
// }
// isNumeric()
//let result = value.split("");
// if(value>4){
//     console.log("Invalid")
// }

function myFunction(e){
    var x = document.getElementById("mySelect").value;
    var str = x.toString();
    var arr = str.split('');
    console.log(arr)
  var checkEven =  arr.some((item)=>+item % 2 === 0)
    console.log(checkEven)
    if(checkEven){
        console.log('Even Number')
    }else{
        console.log('Odd Number')
    }
}



