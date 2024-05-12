const resMenuicon = document.querySelector('.menu')
const resmenudiv = document.querySelector('.backGround-menu')
const HeaderSec = document.querySelector('.header-sec')
const SectionSec = document.querySelector('.section-sec')
const SectionSec2 = document.querySelector('.section-sec-2')
const cancelBTN = document.querySelector('#x')
const bgm = document.querySelector('#bgm')
const Nothing = document.querySelector('.nothing')
const leftsec = document.querySelector('.left-side-sec')
const CancelDIV = document.querySelector('.close-menu2')

function showmenu (){
    resmenudiv.style.width = 70 + '%'
    HeaderSec.style.filter = 'blur(2px)'
    SectionSec.style.filter = 'blur(2px)'
    SectionSec2.style.filter = 'blur(2px)'
    CancelDIV.style.display = 'block'
    CancelDIV.style.zIndex = 1
}


cancelBTN.addEventListener('click' , function (){
    resmenudiv.style.width = 0 + '%'
    HeaderSec.style.filter = 'blur(0px)'
    SectionSec.style.filter = 'blur(0px)'
    SectionSec2.style.filter = 'blur(0px)'
    CancelDIV.style.display = 'none'
})

resmenudiv.addEventListener('click' , () => {
    resmenudiv.style.width = 0 + '%'
    HeaderSec.style.filter = 'blur(0px)'
    SectionSec.style.filter = 'blur(0px)'
    SectionSec2.style.filter = 'blur(0px)' 
    CancelDIV.style.display = 'none'  
})


CancelDIV.addEventListener('click' , () => {
    resmenudiv.style.width = 0 + '%'
    HeaderSec.style.filter = 'blur(0px)'
    SectionSec.style.filter = 'blur(0px)'
    SectionSec2.style.filter = 'blur(0px)'
    CancelDIV.style.display = 'none'
})

resMenuicon.addEventListener('click' , showmenu )