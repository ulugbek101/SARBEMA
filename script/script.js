

let dropLink = document.querySelector('.drop')
let dropIcon = document.querySelector('.drop__icon')
let dropMenu = document.querySelector('.nav__bar_history')

let tab1 = document.querySelector('.tabs__items .tabs__item:nth-of-type(1)')
let tab2 = document.querySelector('.tabs__items .tabs__item:nth-of-type(2)')
let tab3 = document.querySelector('.tabs__items .tabs__item:nth-of-type(3)')
let tab4 = document.querySelector('.tabs__items .tabs__item:nth-of-type(4)')

tab1.addEventListener('click', function () {
    tab1.classList.remove('selected')
    tab1.style = `color: var(--WhiteColor);
                  background: var(--GreenColor);`
    tab2.style = `color: var(--TitleColor);
                  background: var(--WhiteColor)`
    tab3.style = `color: var(--TitleColor);
                  background: var(--WhiteColor)`
    tab4.style = `color: var(--TitleColor);
                  background: var(--WhiteColor)`
})
tab2.addEventListener('click', function () {
    tab1.classList.remove('selected')
    tab2.style = `color: var(--WhiteColor);
                  background: var(--GreenColor);`
    tab1.style = `color: var(--TitleColor);
                  background: var(--WhiteColor)`
    tab3.style = `color: var(--TitleColor);
                  background: var(--WhiteColor)`
    tab4.style = `color: var(--TitleColor);
                  background: var(--WhiteColor)`
})
tab3.addEventListener('click', function () {
    tab1.classList.remove('selected')
    tab3.style = `color: var(--WhiteColor);
                  background: var(--GreenColor);`
    tab1.style = `color: var(--TitleColor);
                  background: var(--WhiteColor)`
    tab2.style = `color: var(--TitleColor);
                  background: var(--WhiteColor)`
    tab4.style = `color: var(--TitleColor);
                  background: var(--WhiteColor)`
})
tab4.addEventListener('click', function () {
    tab1.classList.remove('selected')
    tab4.style = `color: var(--WhiteColor);
                  background: var(--GreenColor);`
    tab1.style = `color: var(--TitleColor);
                  background: var(--WhiteColor)`
    tab2.style = `color: var(--TitleColor);
                  background: var(--WhiteColor)`
    tab3.style = `color: var(--TitleColor);
                  background: var(--WhiteColor)`
})


dropLink.addEventListener('click', function () {
    dropIcon.classList.toggle('rotate')
    dropMenu.classList.toggle('display_none')
})


