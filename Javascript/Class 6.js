// Template Literals

// var marks = 654
// console.log("Marks are " + marks + " " + "=")
// console.log(`Marks are ${marks} =`)


// Callback Function
// A Function passes as an argument to another funtions

// var ary = [9]

// ary.filter(function (v,i,a){
//     console.log(v,i,a)
// })




// DOM & BOM
// Browser Object Model
// Document Object Model

// Selecting DOM Elements

// getElementsByTagName()
// getElementsByClassName()
// getElementById() -------------------- Most Preferable        
// querySelector()
// querySelectorAll()

// console.log(document.querySelectorAll('.head'))
// console.log(document.getElementsByTagName('h1'))
// console.log(document.getElementsByClassName('head'))
// console.log(document.getElementById('h'))


// document.getElementById('h').innerText = "Hello <br> World"
// document.getElementById('h').innerHTML = "Hello <br> World"





var pass = document.getElementById('password')

function showHidePassword(){
    if(pass.type == "password"){
        pass.type = "text"
    }else{
        pass.type = "password"
    }
}