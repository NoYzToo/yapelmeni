let doc = document;

let swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 20,


    pagination: {
        el: '.swiper-certificates__pagination',
        clickable: true,
    },


    navigation: {
        nextEl: '.swiper-certificates__button-next',
        prevEl: '.swiper-certificates__button-prev',
    },

});



let openModalBtn = doc.querySelector('.sec1__content__button');

let modalWindow = doc.querySelector('.modalwindow-price-list');

let phoneNumber = doc.querySelector('.modalwindow-price-list__content__form');

let inputNumber = phoneNumber.querySelector('.modalwindow-price-list__content__number');

let paddingHeader = 150



let headerPriceListBtn = doc.querySelector('.header__menu__list-item__price-list')
let headerCatalogBtn = doc.querySelector('.header__menu__list-item__catalog')
let headerOptBtn = doc.querySelector('.header__menu__list-item__opt')
let headerDeliveryBtn = doc.querySelector('.header__menu__list-item__delivery')
let headerAboutBtn = doc.querySelector('.header__menu__list-item__about')
let headerContactBtn = doc.querySelector('.header__menu__list-item__contact')





headerPriceListBtn.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({
        top: `${doc.querySelector('.sec1').scrollTop}`,
        behavior: 'smooth',
    })
})
headerCatalogBtn.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({
        top: `${window.pageYOffset + doc.querySelector('.sec2').getBoundingClientRect().top - paddingHeader}`,
        behavior: 'smooth',
    })
})
headerOptBtn.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({
        top: `${window.pageYOffset + doc.querySelector('.sec3').getBoundingClientRect().top - paddingHeader}`,
        behavior: 'smooth',
    })
})
headerDeliveryBtn.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({
        top: `${window.pageYOffset + doc.querySelector('.sec4').getBoundingClientRect().top - paddingHeader}`,
        behavior: 'smooth',
    })
})
headerAboutBtn.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({
        top: `${window.pageYOffset + doc.querySelector('.sec5').getBoundingClientRect().top - paddingHeader}`,
        behavior: 'smooth',
    })
})
headerContactBtn.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({
        top: `${window.pageYOffset + doc.querySelector('.footer').getBoundingClientRect().bottom}`,
        behavior: 'smooth',
    })
})








function openModal(event) {
    let pR = (window.innerWidth - doc.body.offsetWidth) + 'px'
    let hPadR = (window.innerWidth - doc.querySelector('.header').offsetWidth) + 'px'
    modalWindow.style.display = 'flex';
    doc.body.style.overflow = 'hidden';
    doc.body.style.paddingRight = pR;
    doc.querySelector('.header').style.paddingRight = hPadR
    doc.querySelector('.header').style.zIndex = '0'
}
openModalBtn.addEventListener('click', (event) => {
    openModal()
})
function closeModal(event) {
    if (event.target.classList.contains('modalwindow-price-list__content__close') || event.target.classList.contains('modalwindow-price-list')) {
        modalWindow.style.display = 'none';
        doc.body.style.overflow = 'auto';
        doc.body.style.paddingRight = '';
        doc.querySelector('.header').style.paddingRight = ''
        console.log('lol')
        doc.querySelector('.header').style.zIndex = '10'
    }
}
modalWindow.addEventListener('click', (event) => {
    closeModal(event)
})

phoneNumber.addEventListener('submit', (event) => {
    if (inputNumber.value.length == 0) {
        event.preventDefault();
        inputNumber.style.border = '3px solid red'
    }
})

inputNumber.addEventListener('input', (event) => {
    inputNumber.style.border = '1px solid rgba(49, 49, 49, 1)'
})



let catalog = [

    {
        name: 'pelmeni',
        img: './img/sec2/pelmeni.png',
        parag: 'Пельмени глубокой заморозки',
    },
    {
        name: 'pelmeni',
        img: './img/sec2/pelmeni.png',
        parag: 'Пельмени глубокой заморозки',
    },
    {
        name: 'pelmeni',
        img: './img/sec2/pelmeni.png',
        parag: 'Пельмени глубокой заморозки',
    },
    {
        name: 'pelmeni',
        img: './img/sec2/pelmeni.png',
        parag: 'Пельмени глубокой заморозки',
    },
    {
        name: 'khinkali',
        img: './img/sec2/khinkali.png',
        parag: 'Хинкали глубокой заморозки',
    },
    {
        name: 'manti',
        img: './img/sec2/manti.png',
        parag: 'Манты глубокой заморозки',
    },
    {
        name: 'pelmeni',
        img: './img/sec2/pelmeni.png',
        parag: 'Пельмени глубокой заморозки',
    },
    {
        name: 'vareniki',
        img: './img/sec2/vareniki.png',
        parag: 'Вареники глубокой заморозки',
    },
    {
        name: 'khinkali',
        img: './img/sec2/khinkali.png',
        parag: 'Хинкали глубокой заморозки',
    },
    {
        name: 'pelmeni',
        img: './img/sec2/pelmeni.png',
        parag: 'Пельмени глубокой заморозки',
    },
    {
        name: 'pelmeni',
        img: './img/sec2/pelmeni.png',
        parag: 'Пельмени глубокой заморозки',
    },
    {
        name: 'pelmeni',
        img: './img/sec2/pelmeni.png',
        parag: 'Пельмени глубокой заморозки',
    },
    {
        name: 'khinkali',
        img: './img/sec2/khinkali.png',
        parag: 'Хинкали глубокой заморозки',
    },
    {
        name: 'khinkali',
        img: './img/sec2/khinkali.png',
        parag: 'Хинкали глубокой заморозки',
    },
    {
        name: 'khinkali',
        img: './img/sec2/khinkali.png',
        parag: 'Хинкали глубокой заморозки',
    },
    {
        name: 'manti',
        img: './img/sec2/manti.png',
        parag: 'Манты глубокой заморозки',
    },
    {
        name: 'manti',
        img: './img/sec2/manti.png',
        parag: 'Манты глубокой заморозки',
    },
    {
        name: 'khinkali',
        img: './img/sec2/khinkali.png',
        parag: 'Хинкали глубокой заморозки',
    },
    {
        name: 'khinkali',
        img: './img/sec2/khinkali.png',
        parag: 'Хинкали глубокой заморозки',
    },
    {
        name: 'manti',
        img: './img/sec2/manti.png',
        parag: 'Манты глубокой заморозки',
    },
    {
        name: 'vareniki',
        img: './img/sec2/vareniki.png',
        parag: 'Вареники глубокой заморозки',
    },
    {
        name: 'vareniki',
        img: './img/sec2/vareniki.png',
        parag: 'Вареники глубокой заморозки',
    },

]

function createElem(item, elem) {

    elem.classList.add('catalog__main__box__item');
    let elemImg = doc.createElement('img');
    elemImg.setAttribute('src', item.img);
    let elemContent = doc.createElement('div');
    elemContent.classList.add('catalog__main__box__item__content');
    let elemContentParag = doc.createElement('p');
    elemContentParag.textContent = item.parag;
    let elemContentButtonYellow = doc.createElement('button');
    elemContentButtonYellow.classList.add('catalog__main__box__item__opt');
    elemContentButtonYellow.classList.add('yellow-button');
    elemContentButtonYellow.textContent = 'Заказать оптом';
    let elemContentButton = doc.createElement('button');
    elemContentButton.classList.add('catalog__main__box__item__more');
    elemContentButton.textContent = 'Подробнее'

    elemContent.appendChild(elemContentParag)
    elemContent.appendChild(elemContentButtonYellow)
    elemContent.appendChild(elemContentButton)


    elem.appendChild(elemImg)
    elem.appendChild(elemContent)

}

let catalogBox = doc.querySelector('.catalog__main__box')

catalogAll()

function catalogAll() {

    catalogBox.innerHTML = ''

    for (let item of catalog) {

        let elem = doc.createElement('div');

        createElem(item, elem)

        catalogBox.appendChild(elem)

    }
}
function catalogKhinkali() {

    catalogBox.innerHTML = ''

    for (let item of catalog) {

        let elem = doc.createElement('div');

        createElem(item, elem)

        if (item.name == 'khinkali') {
            catalogBox.appendChild(elem)
        }

    }
}
function catalogPelmeni() {

    catalogBox.innerHTML = ''


    for (let item of catalog) {

        let elem = doc.createElement('div');

        createElem(item, elem)


        if (item.name == 'pelmeni') {
            catalogBox.appendChild(elem)
        }

    }
}
function catalogManti() {

    catalogBox.innerHTML = ''


    for (let item of catalog) {

        let elem = doc.createElement('div');

        createElem(item, elem)


        if (item.name == 'manti') {
            catalogBox.appendChild(elem)
        }

    }
}
function catalogVareniki() {

    catalogBox.innerHTML = ''


    for (let item of catalog) {

        let elem = doc.createElement('div');

        createElem(item, elem)

        if (item.name == 'vareniki') {
            catalogBox.appendChild(elem)
        }


    }
}



let catalogFilter = doc.querySelector('.catalog__main__filter')

catalogFilter.addEventListener('click', (event) => {
    if (event.target.classList.contains('all')) {
        catalogAll()
    } else if (event.target.classList.contains('manti')) {
        catalogManti()
    } else if (event.target.classList.contains('pelmeni')) {
        catalogPelmeni()
    } else if (event.target.classList.contains('khinkali')) {
        catalogKhinkali()
    } else if (event.target.classList.contains('vareniki')) {
        catalogVareniki()
    }
})










let cookieBox = doc.querySelector('.cookie')

let cookieInterval = setInterval(() => {
    if (window.pageYOffset >= (window.pageYOffset + doc.querySelector('.sec2').getBoundingClientRect().top).toFixed(0) - paddingHeader) {
        clearInterval(cookieInterval)

        cookieBox.style.bottom = '0px'
    }
}, 1000);

let cookieBtn = doc.querySelector('.cookie__content__link')
cookieBtn.addEventListener('click', (event => {
    cookieBox.style.bottom = '-100px'
    setTimeout(() => {
        cookieBox.style.display = 'none'
    }, 300);
}))




window.onload = (event) => {
    let loader = doc.querySelector('.preloader')
    loader.style.display = 'none'
    doc.body.style.overflow = 'auto'
}