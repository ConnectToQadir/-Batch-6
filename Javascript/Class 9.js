// Time Related Function in JS
// 1. setTimeout()
// 2. setInterval()

// console.log("1")
// setTimeout(()=>{
//     console.log("2")
// },1000)
// console.log("3")


// console.log("1")
// setInterval(()=>{
//     console.log("2")
// })
// console.log("3")




// function greeting(){
//     document.querySelector('h2').innerText = "Hi"
//     setTimeout(()=>{
//         document.querySelector('h2').innerText = "By"
//     },3000)
// }





var slider = document.querySelector('.slider')

slider.style.width = slider.children.length * 100 + "%"



setInterval(()=>{
    if(slider.children.length != 1){
        slider.style.transform = `translateX(-${100/slider.children.length}%)`
    }
},2000)


slider.addEventListener('transitionend',()=>{
    slider.appendChild(slider.firstElementChild)
    slider.style.transition = 'none'
    slider.style.transform = 'translateX(0)'
    setTimeout(()=>{
        slider.style.transition = '1s'
    })
})