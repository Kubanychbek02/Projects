import  tads from './modules/tabs';
import  modal from './modules/modal';
import  timer from './modules/timer';
import  cards from './modules/cards';
import  calc from './modules/calc';
import  slider from './modules/slider';
import  forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {

    tads();
    modal("[data-modal]", ".modal");
    timer();
    cards();
    calc();
    slider();
    forms();
});






















// window.addEventListener("DOMContentLoaded", () => {
//     // const tabs = document.querySelectorAll(".tabheader__item"),
//     //     tabsContent = document.querySelectorAll('.tabcontent'),
//     //     tabsParent = document.querySelector('.tabheader__items');

//     // function hideTabeContent() {
//     //     tabsContent.forEach(item => {
//     //         item.classList.add("hide");
//     //         item.classList.remove("show", "fade");
//     //     });

//     //     tabs.forEach(item => {
//     //         item.classList.remove('tabheader__item_active');
//     //     });
//     // }

//     // function showTabContent(i = 0) {
//     //     tabsContent[i].classList.add("show", 'fade')
//     //     tabsContent[i].classList.remove("hide")
//     //     tabs[i].classList.add("tabheader__item_active");
//     // }

//     // hideTabeContent();
//     // showTabContent();

//     // tabsParent.addEventListener('click', (event) => {
//     //     const target = event.target;

//     //     if(target && target.classList.contains('tabheader__item')) {
//     //         tabs.forEach((item, i) => {
//     //             if(target == item) {
//     //                 hideTabeContent();
//     //                 showTabContent(i);
//     //             }
//     //         })
//     //     }
//     // });


//     // Timer

//     // const deadline = '2022-02-19';

//     // function getTimeRemaining(endtime) {
//     //     const t = Date.parse(endtime) - Date.parse(new Date),
//     //           days = Math.floor(t / (1000 * 60 * 60 *24)),
//     //           hours = Math.floor((t / 1000 * 60 *60) % 24),
//     //           minutes = Math.floor((t / 1000 / 60) % 60),
//     //           seconds = Math.floor((t/ 1000) % 60);

//     //     return {
//     //         'total': t,
//     //         'days': days,
//     //         'hours': hours,
//     //         'minutes': minutes,
//     //         'seconds': seconds
//     //     };
//     // }

//     // function getZero(num) {
//     //     if(num >= 0 && num < 10) {
//     //         return `0${num}`;
//     //     } else {
//     //         return num;
//     //     }
//     // }

//     // function setCLock(selector, endtime) {
//     //     const timer = document.querySelector(selector),
//     //         days = timer.querySelector("#days"),
//     //         hours = timer.querySelector("#hours"),
//     //         minutes = timer.querySelector("#minutes"),
//     //         seconds = timer.querySelector("#seconds"),
//     //         timeInterval = setInterval(updateClock, 1000);

//     //     updateClock();

//     //     function updateClock() {
//     //         const t = getTimeRemaining(endtime);

//     //         days.innerHTML = getZero(t.days);
//     //         hours.innerHTML = getZero(t.hours);
//     //         minutes.innerHTML = getZero(t.minutes);
//     //         seconds.innerHTML = getZero(t.seconds);

//     //         if(t.total <= 0) {
//     //             clearInterval(timeInterval);
//     //         }
//     //     }
//     // }

//     // setCLock('.timer', deadline);


//     // // Modal

//     // const modal = document.querySelector(".modal"),
//     //      modalOpen = document.querySelectorAll("[data-modal]");
//     //      modalClose = document.querySelector("[data-close]");

//     // modalOpen.forEach(btn => {
//     //     btn.addEventListener('click', openModal);
//     // });

//     // function openModal() {
//     //     modal.classList.add("show");
//     //     modal.classList.remove("hide");
//     //     document.body.style.overflow = "hidden";
//     //     // clearInterval(modalTimerID);
//     // }

//     // function closeModal() {
//     //     modal.classList.remove("show");
//     //     modal.classList.add("hide");
//     //     document.body.style.overflow = "";
//     // }

//     // modalClose.addEventListener('click', closeModal);

//     // modal.addEventListener('click', (e) => {
//     //     if (e.target === modal || e.target.getattribute('data-close') === '') {
//     //         closeModal();
//     //     }
//     // });

//     // document.addEventListener('keydown', (e) => {
//     //     if(e.code === 'Escape' && modal.classList.contains('show')) {
//     //         closeModal();
//     //     }
//     // });

//     // function showModalByScroll() {
//     //     if(window.pageXOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
//     //         openModal();
//     //         window.removeEventListener('scroll', showModalByScroll)
//     //     }
//     // };

//     // window.addEventListener('scroll', showModalByScroll)
    

//     // Menu

//     // class Menu {
//     //     constructor(img, alt, title, descr, price, parentSelector, ...classes) {
//     //         this.img = img;
//     //         this.alt = alt;
//     //         this.title = title;
//     //         this.descr = descr;
//     //         this.price = price;
//     //         this.classes = classes;
//     //         this.parent = document.querySelector(parentSelector);
//     //         this.transfer = 27;
//     //         this.changeToUAH();
//     //     }

//     //     changeToUAH() {
//     //         this.price = this.price * this.transfer;
//     //     }

//     //     render() {
//     //        const element = document.createElement('div');
//     //        if(this.classes.length === 0) {
//     //            this.element = 'menu__item';
//     //            element.classList.add(this.element);
//     //        } else {
//     //             this.classes.forEach(className => element.classList.add(className));
//     //        }
          
//     //        element.innerHTML = `
//     //                 <img src=${this.img} alt=${this.alt}>
//     //                 <h3 class="menu__item-subtitle">${this.title}"</h3>
//     //                 <div class="menu__item-descr">${this.descr}</div>
//     //                 <div class="menu__item-divider"></div>
//     //                 <div class="menu__item-price">
//     //                     <div class="menu__item-cost">Цена:</div>
//     //                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//     //                 </div>
//     //                  `;

//     //             this.parent.append(element)
//     //     }
//     // }

//     // new Menu(
//     //     "img/tabs/vegy.jpg",
//     //     "vegy",
//     //     'Меню "Фитнес"',
//     //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     //     9,
//     //     '.menu .container',
//     // ).render();

//     // new Menu(
//     //     "img/tabs/elite.jpg",
//     //     "elite",
//     //     'Меню “Премиум”',
//     //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//     //     20,
//     //     '.menu .container',
//     // ).render();

//     // new Menu(
//     //     "img/tabs/post.jpg",
//     //     "post",
//     //     'Меню "Постное"',
//     //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//     //     22,
//     //     '.menu .container',
//     // ).render();

//     // // Forms

//     // const forms = document.querySelectorAll('form');

//     // const message = {
//     //     loading: 'Загрузка',
//     //     success: 'Спасибо! Скоро мы с вами свяжемся',
//     //     failure: 'Что-то пошло не так'
//     // };

//     // forms.forEach(item => {
//     //     bindPostData(item);
//     // });

//     // const postData = async (url, data) => {
//     //     const res = await fetch(url, {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Content-type': 'application/json'
//     //             },
//     //             body: data
//     //     });

//     //     return await res.json();
//     // }

//     // function bindPostData(form) {
//     //     form.addEventListener('submit', (e) => {
//     //         e.preventDefault();

//     //         const statusMessage = document.createElement('div');
//     //         statusMessage.classList.add('status');
//     //         statusMessage.textContent = message.loading;
//     //         form.append(statusMessage);

//     //         const formData = new FormData(form);

//     //         const object = {};
//     //         formData.forEach(function (value, key) {
//     //             object[key] = value;
//     //         });

            
//     //         postData('server.php', JSON.stringify(object))

//     //         .then(data => {
//     //                 console.log(data);
//     //                 showThanksModal(message.success);
//     //                 statusMessage.remove();
//     //         }).catch(() => {
//     //             showThanksModal(message.failure);
//     //         }).finally(() => {
//     //             form.reset();
//     //         })

//     //         // request.addEventListener('load', () =>{
//     //         //     if(request.status === 200) {
//     //         //         console.log(request.response);
//     //         //         showThanksModal(message.success);
//     //         //         form.reset();
//     //         //         statusMessage.remove();
//     //         //     } else {
//     //         //         showThanksModal(message.failure);
//     //         //     }
//     //         // })
//     //     })
//     // }

//     // function showThanksModal (message) {
//     //     const prevModalDialog = document.querySelector('.modal__dialog');

//     //     prevModalDialog.classList.add('hide');
//     //     openModal();

//     //     const thanksModal=  document.createElement('div');
//     //     thanksModal.classList.add('modal__dialog');
//     //     thanksModal.innerHTML = `
//     //     <div class="modal__content">
//     //         <div class="modal__close" data-close>x</div>
//     //         <div class="modal__title">${message}</div>
//     //     </div>`;

//     //     document.querySelector('.modal').append(thanksModal);
//     //     setTimeout(() => {
//     //         thanksModal.remove();
//     //         prevModalDialog.classList.add('show');
//     //         prevModalDialog.classList.remove('hide');
//     //         closeModal();
//     //     }, 4000);
//     // };



//     // // Slider 1

//     // const slides = document.querySelectorAll('.offer__slide'),
//     //     prev = document.querySelector('.offer__slider-prev'),
//     //     next = document.querySelector('.offer__slider-next'),
//     //     total = document.querySelector('#total'),
//     //     current = document.querySelector('#current')
//     // let slideIndex = 1;

//     // showSlides(slideIndex);

//     // if(slides.length < 10) {
//     //     total.textContent = `0${slides.length}`;
//     // } else{
//     //     total.textContent = slides.length;
//     // }

//     // function showSlides(n) {
//     //     if(n > slides.length) {
//     //         slideIndex = 1;
//     //     }

//     //     if(n < 1) {
//     //         slideIndex = slides.length;
//     //     }

//     //     slides.forEach(item => item.style.display = 'none');
//     //     slides[slideIndex - 1].style.display = 'block';

//     //     if(slides.length < 10) {
//     //         current.textContent = `0${slideIndex}`;
//     //     } else{
//     //         current.textContent = slideIndex;
//     //     }
//     // }

//     // function plusSlides(n) {
//     //     showSlides(slideIndex +=n);
//     // }

//     // prev.addEventListener('click', () => {
//     //     plusSlides(-1);
//     // });

//     // next.addEventListener('click', () => {
//     //     plusSlides(+1);
//     // });






//     // // Slider 2

//     // const slides = document.querySelectorAll('.offer__slide'),
//     //     slider = document.querySelector('.offer__slider')
//     //     prev = document.querySelector('.offer__slider-prev'),
//     //     next = document.querySelector('.offer__slider-next'),
//     //     total = document.querySelector('#total'),
//     //     current = document.querySelector('#current'),
//     //     slidesWrapper = document.querySelector('.offer__slider-wrapper'),
//     //     slidesFild = document.querySelector('.offer__slider-inner'),
//     //     width = window.getComputedStyle(slidesWrapper).width;
//     // let slideIndex = 1;
//     // let offset = 0;

//     //     if(slides.length < 10) {
//     //         current.textContent = `0${slideIndex}`;
//     //         current.textContent = `0${slideIndex}`;
//     //     } else{
//     //         current.textContent = slideIndex;
//     //         current.textContent = `${slideIndex}`;
//     //     }

//     // slidesFild.style.width = 100 * slides.length + '%';
//     // slidesFild.style.display = 'flex';
//     // slidesFild.style.transition = '0.5s all';

//     // slidesWrapper.style.overflow = 'hidden';
//     // slides.forEach(slide => {
//     //     slide.style.width = width;
//     // });

//     // slider.style.position = 'relative';
//     // const inducators = document.createElement('ol');
//     //     dots = [];
//     // inducators.classList.add('carousel-inducators');
//     // inducators.style.cssText = `
//     //     position: absolute;
//     //     right: 0;
//     //     bottom: 0;
//     //     left: 0;
//     //     z-index: 15;
//     //     display: flex;
//     //     justify-content: center;
//     //     margin-right: 15%;
//     //     margin-left: 15%;
//     //     list-style: none;
//     // `;
//     // slider.append(inducators);

//     // for (let i = 0; i < slides.length; i++) {
//     //     const dot = document.createElement('li');
//     //     dot.setAttribute('data-slide-to', i + 1);
//     //     dot.style.cssText = `
//     //         box-sizing: content-box;
//     //         flex: 0 1 auto;
//     //         width: 30px;
//     //         height: 6px;
//     //         margin-right: 3px;
//     //         margin-left: 3px;
//     //         cursor: pointer;
//     //         background-color: #fff;
//     //         background-clip: padding-box;
//     //         border-top: 10px solid transparent;
//     //         border-bottom: 10px solid transparent;
//     //         opacity: .5;
//     //         transition: opacity .6s ease;
//     //     `;
//     //     if (i == 0) {
//     //         dot.style.opacity = 1;
//     //     }
//     //     inducators.append(dot);
//     //     dots.push(dot);
//     // }

//     // function deleteNotDigits(str) {
//     //     return +str.replace(/\D/g, '');
//     // }

//     // function currentID () {
//     //     if(slides.length < 10) {
//     //         current.textContent = `0${slideIndex}`;
//     //     } else {
//     //         current.textContent = slideIndex;
//     //     }
//     // };

//     // function offsetID() {
//     //     if(offset == deleteNotDigits(width) * (slides.length - 1)) {
//     //         offset = 0;
//     //     } else {
//     //         offset += deleteNotDigits(width);
//     //     }
//     // };

//     // function slideTranslate () {
//     //     slidesFild.style.transform = `translateX(-${offset}px)`;
//     // };

//     // function dotsID() {
//     //     dots.forEach(dot => dot.style.opacity = '.5');
//     //     dots[slideIndex -1].style.opacity = 1;
//     // }

//     // next.addEventListener('click', () => {
//     //     offsetID()
//     //     slideTranslate();
//     //     if(slideIndex == slides.length) {
//     //         slideIndex = 1;
//     //     } else {
//     //         slideIndex++;
//     //     }
//     //     currentID();
//     //     dotsID();
//     // });

//     // prev.addEventListener('click', () => {
//     //     if(offset == 0) {
//     //         offset = +width.replace(/\D/g, '') * (slides.length - 1);
//     //     } else {
//     //         offset -= +width.replace(/\D/g, '');
//     //     };
//     //     slideTranslate();

//     //     if(slideIndex == 1) {
//     //         slideIndex = slides.length;
//     //     } else {
//     //         slideIndex--;
//     //     }
//     //     currentID();
//     //     dotsID();
//     // });

//     // dots.forEach(dot => {
//     //     dot.addEventListener('click', (e) => {
//     //         const slideTo = e.target.getAttribute('data-slide-to');
//     //         slideIndex = slideTo;
//     //         offset = deleteNotDigits(width) * (slideTo - 1);
//     //         slideTranslate();
//     //         currentID();
//     //         dotsID();
//     //     })
//     // })


// //     // calc

// //     const result = document.querySelector('.calculating__result span');

// //     let sex, 
// //         height, 
// //         weight, 
// //         age, 
// //         ratio;

// //     if(localStorage.getItem('ratio')) {
// //         ratio = localStorage.getItem('ratio');
// //     } else {
// //         ratio = '1.375';
// //         localStorage.setItem('ratio', '1.375');
// //     }

// //     function initLocalSettings(selector, activeClass) {
// //         const elements = document.querySelectorAll(selector);

// //         elements.forEach(elem => {
// //             elem.classList.remove(activeClass);
// //             if (elem.getAttribute('id') === localStorage.getItem('sex')) {
// //                 elem.classList.add(activeClass);
// //             }
// //             if (elem.getAttribute('data-ration') ===  localStorage.getItem('ratio')) {
// //                 elem.classList.add(activeClass);
// //             }
// //         })
// //     }

// //     initLocalSettings('#gender div', 'calculating__choose-item_active');
// //     initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

// //     function caclTotal() {
// //         if (!sex || !height || !weight || !age || !ratio ) {
// //             result.textContent = '____';
// //             return;
// //         }

// //         if (sex === 'female') {
// //             result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
// //         } else {
// //             result.textContent = Math.round((88.36 + (13.4 *weight) + (4.8 * height) - (5.7 * age)) * ratio);
// //         }
// //     }

// //     caclTotal();

// //     function getStaticInformation(selector, activeClass) {
// //         const elements = document.querySelectorAll(selector);

// //         elements.forEach(elem => {
// //             elem.addEventListener('click', (e) => {
// //                 if(e.target.getAttribute('data-ratio')) {
// //                     ratio = +e.target.getAttribute('data-ratio');
// //                     localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
// //                 } else {
// //                     sex = e.target.getAttribute('id');
// //                     localStorage.setItem('sex', +e.target.getAttribute('id'));
// //                 }
    
// //                 elements.forEach(elem => {
// //                     elem.classList.remove(activeClass)
// //                 })
    
// //                 e.target.classList.add(activeClass)
// //             });
    
// //             caclTotal();
// //         })
// //     }

// //     getStaticInformation('#gender div', 'calculating__choose-item_active');
// //     getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

// //     function getDinamicInformation(selector) {
// //         const input = document.querySelector(selector);

// //         input.addEventListener('input', () =>{

// //             if(input.value.match(/\D/g)) {
// //                 input.style.border = '1px solid red';    
// //             } else {
// //                 input.style.border = 'none';
// //             }

// //             switch(input.getAttribute('id')) {
// //                 case 'height':
// //                     height = +input.value;
// //                     break;
// //                 case 'weight':
// //                     weight = +input.value;
// //                     break;
// //                 case 'age':
// //                     age = +input.value;
// //                     break;
// //             }

// //             caclTotal();
// //         });
// //     }

// //     getDinamicInformation('#height');
// //     getDinamicInformation('#weight');
// //     getDinamicInformation('#age');
// });