// API ( Application Programming Interface )
// Its Actually URL









// How to get Data from an API in JS
// var data = fetch('https://jsonplaceholder.typicode.com/posts')
// console.log(data)


// Promise Handling
// 1. then().catch()
// fetch('https://jsonplaceholder.typicode.com/posts').then((d)=>{return d.json()}).then((ad)=>{
//     console.log(ad)
// })

// 2. Asynchronious
// async function fetchData() {
//     var data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     var jsonData = await data.json()

//     jsonData.map((v) => {
//         document.write(`<h1 style="color:red;background-color:yellow" >${v.title}</h1>`)
//         document.write(`<p>${v.body}</p>`)
//         document.write('<hr>')
//     })
// }

// fetchData()





//  fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
//   return data.json()
// }).then((d)=>{
//     console.log(d)
// })

// async function ali(){
//     var d =await fetch("https://jsonplaceholder.typicode.com/users")
//     console.log(await d.json())
    
//  }
 
//  ali()