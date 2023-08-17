// document.getElementById('h').style.color = 'green'
// document.getElementById('h').style.backgroundColor = 'yellow'


// var h = document.getElementById('h')

// h.classList.remove('hi')
// h.classList.add('head')
// h.classList.replace('hi','head')



function showPopup(){

    // By Inline CSS
    // document.getElementById('pop').style.visibility = 'visible'
    // document.getElementById('pop').style.opacity = 1
    // document.getElementById('pop').style.transform = 'scale(1)'

    
    // By External CSS
    document.getElementById('pop').classList.add('active')
    document.body.style.overflow = 'hidden'


}


function hidePopup(){

    // document.getElementById('pop').style.visibility = 'hidden'
    // document.getElementById('pop').style.opacity = 0
    // document.getElementById('pop').style.transform = 'scale(0)'

    document.getElementById('pop').classList.remove('active')
    document.body.style.overflow = 'visible'
}
