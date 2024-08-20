const pageChina = document.querySelector('.page-main-china');

// Burger Menu

const html = document.querySelector('html');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const headerMenu = header.querySelector('.header__menu');
const headerMenuBtn = header.querySelector('.header__btn-menu');

headerMenuBtn.addEventListener('click', () => {

    header.classList.toggle('js-mob-menu');
    headerMenu.classList.toggle('js-mob-menu');
    body.classList.toggle('no-scroll');
    html.classList.toggle('no-scroll');
})

// Header

const main = document.querySelector('.main');

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    const headerHeight = header.offsetHeight;

    if (scrollDistance > 0) {
        header.classList.add('header--fixed');
        main.style.marginTop = `${headerHeight}px`;
    } else {
        header.classList.remove('header--fixed');
        main.style.marginTop = 0;
    }
});

// Indent Left Container

const indentLeftContainer = function() {

    if (window.innerWidth > 1200) {
        const containerMarginLeft = document.querySelector('.container').offsetLeft;

        return containerMarginLeft
    }
}

const paramsSwiperSectionAdvantage = {
    direction: 'horizontal',
    resizeObserver: true,
    observer: true,
    observeParents: true,
    loop: false,
    spaceBetween: 16,
    breakpoints: {
        320: {
            slidesPerView: 1.165,
            slidesOffsetBefore: 24,
            slidesOffsetAfter: 24
        },
        601: {
            slidesPerView: 1.9,
            slidesOffsetBefore: 56,
            slidesOffsetAfter: 56
        },
        901: {
            slidesPerView: 2.15,
            slidesOffsetBefore: 64,
            slidesOffsetAfter: 64
        },
        1201: {
            observer: true,
            observeParents: true,
            slidesPerView: 4.47,
            slidesOffsetBefore: 88 + indentLeftContainer(),
            slidesOffsetAfter: 88,
        }
    }
}

// Main Block 4 Swiper

const paramsSwiperSectionProjects = {
    direction: 'horizontal',
    resizeObserver: true,
    loop: false,
    spaceBetween: 16,
    navigation: {
        nextEl: '.section-projects__item-next',
        prevEl: '.section-projects__item-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.165,
            slidesOffsetBefore: 24,
            slidesOffsetAfter: 24
        },
        601: {
            slidesPerView: 1.75,
            slidesOffsetBefore: 56,
            slidesOffsetAfter: 56
        },
        901: {
            slidesPerView: 2.165,
            slidesOffsetBefore: 64,
            slidesOffsetAfter: 64
        },
        1201: {
            slidesPerView: 3.3,
            slidesOffsetBefore: 88 + indentLeftContainer(),
            slidesOffsetAfter: 88
        },
    }
};

if (document.querySelector('.section-projects__swiper')) {
    const initSwiperProjects = () => new Swiper('.section-projects__swiper', paramsSwiperSectionProjects);
    let swiperSectionProjects = initSwiperProjects();
    window.addEventListener('resize', function(event) {
        swiperSectionProjects.destroy();
        paramsSwiperSectionProjects.breakpoints["1201"].slidesOffsetBefore = 88 + indentLeftContainer();
        swiperSectionProjects = initSwiperProjects();
    });
}

if (document.querySelector('.section-advantage__swiper')) {

    const initSwiperAdvantage = () => new Swiper('.section-advantage__swiper', paramsSwiperSectionAdvantage);

    let swiperSectionAdvantage = initSwiperAdvantage();

    window.addEventListener('resize', function(event) {
        swiperSectionAdvantage.destroy();

        paramsSwiperSectionAdvantage.breakpoints["1201"].slidesOffsetBefore = 88 + indentLeftContainer();

        swiperSectionAdvantage = initSwiperAdvantage();
    });
}

// Selected

const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.selected-box__options');
const hiddenSelect = document.querySelector('.select-type-system')
const optionsList = document.querySelectorAll('.option');
const selectedBlock = document.querySelector('.section-contacts__field-selected');
const selectedForm = document.querySelector('.form__selected');
const selectedDelete = document.querySelector('.form__selected button');
const selectedDeleteChina = document.querySelector('.form__selected button.china');

selected.addEventListener('click', () => {
    selected.classList.toggle('active');
    optionsContainer.classList.toggle('active');
});


document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(selectedBlock);
 
	if ( ! withinBoundaries ) {
		selected.classList.remove('active');
        optionsContainer.classList.remove('active');
	}
});

document.addEventListener('keydown', function(e) {
	if( e.keyCode == 27 ){ // код клавиши Escape, но можно использовать e.key
		selected.classList.remove('active');
        optionsContainer.classList.remove('active');
	}
});

optionsList.forEach( (o) => {
    o.addEventListener('click', () => {
        const optionValue = o.querySelector('label').innerHTML;

        hiddenSelect.value = optionValue;
        selected.innerHTML = optionValue;
        selected.style.color = '#171717';
        selected.classList.remove('active');
        optionsContainer.classList.remove('active');
        selectedForm.classList.add('btn-del');
    });
});

selectedDelete.addEventListener('click', () => {
    selectedForm.classList.remove('btn-del');
    hiddenSelect.value = '';
    selected.innerHTML = 'Тема сообщения';
    if (pageChina) {
        selected.innerHTML = '消息标题';
    }
    selected.style.color = '#7e8188';
});

// if ($('#light-pagination')) {
//     $(function() {
//         $('#light-pagination').pagination({
//             items: 100,
//             itemsOnPage: 10,
//             cssStyle: 'light-theme'
//         });
//     });
// };

// Валидация формы

const isVladitionEmailField = (field) => {
    let errorMessage = '';
    const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/i;

    const ieEmailValue = emailPattern.test(field.value);
    const isRequeired = field.checkValidity();

    if (pageChina) {
        if (!isRequeired) {
            return errorMessage = '填写此字段';
        } else if(!ieEmailValue) {
            return errorMessage = '请输入有效的电子邮件地址。 邮件';
        }
    }

    if (!isRequeired) {
        return errorMessage = 'Заполните это поле';
    } else if(!ieEmailValue) {
        return errorMessage = 'Введите корректный адрес эл. почты';
    }

    return errorMessage;
}

const isValidationNameField = (field) => {
    const isRequeired = field.checkValidity();
    const namePattern = /^[^1-9]+[^0-9]*$/;
    const testNameValue = namePattern.test(field.value);
    let errorMessage = '';

    if (pageChina) {
        if (!isRequeired) {
            return errorMessage = '填写此字段';
        } else if (!testNameValue) {
            return errorMessage = '数据格式不正确';
        }
    }

    if (!isRequeired) {
        return errorMessage = 'Заполните это поле';
    } else if (!testNameValue) {
        return errorMessage = 'Некорректный формат данных';
    }



    field.setCustomValidity('')

    return errorMessage;
}

const isValidationPhone = (field) => {
    const isRequeired = field.checkValidity();
    const phonePattern = /^[1-9\+\-\,\(\s)]+[0-9\+\-\,\(\s]*$/;
    let errorMessage = '';

    const testPhoneValue = phonePattern.test(field.value);

    if (pageChina) {
        if (!isRequeired) {
            return errorMessage = '填写此字段';
        } else if (!testPhoneValue) {
            return errorMessage = '数据格式不正确';
        }
    }

    if (!isRequeired) {
        return errorMessage = 'Заполните это поле';
    } else if (!testPhoneValue) {
        return errorMessage = 'Некорректный формат данных';
    }

    return errorMessage;
}

const checkFieldFormValidation = (field) => {
    let isValidateField = true;
    let errorMessage = ''

    if(field.name === 'email') {
        isValidateField = !Boolean(isVladitionEmailField(field));
        errorMessage = isValidateField ? '' : isVladitionEmailField(field);
    } else if(field.name === 'phone') {
        isValidateField = !Boolean(isValidationPhone(field));
        errorMessage = isValidateField ? '' : isValidationPhone(field);
    } else if(field.name === 'name') {
        isValidateField = !Boolean(isValidationNameField(field))
        errorMessage = isValidateField ? '' : isValidationNameField(field);
    }

    if(!isValidateField) {
        const parent = field.parentNode;

        parent.classList.add('invalid');
        parent.querySelector('.form-error').innerHTML = errorMessage;
    } else {
        const thereisClass = field.parentNode.classList.contains('invalid');

        if(thereisClass) {
            field.parentNode.classList.remove('invalid')
            field.nextSibling.innerHTML = '';
        }
    }

    return isValidateField
}



const serializeForm = (formNode) => {
    return new FormData(formNode);
}

// const sendData = (url, data) => {
//     return $.ajax({
//         url: url,
//         type: 'POST',
//         data: data,
//         contentType: false,
//         processData: false,
//         error: function (jqXHR, exception) {
//             if (jqXHR.status === 404) {
//                 console.log(jqXHR.status);
//             } else if (jqXHR.status === 0) {
//                 alert('Not connect. Verify Network.');
//             }
//         },
//     }).done(function() {
//
//         sentPopupTemplate.querySelector('.sent-popup__wrap')
//             .classList.add('sent-popup__wrap--active');
//
//         elementRemoveHandler();
//         const {appendElementPopup}  = getSentPopup()
//
//         appendElementPopup();
//
//         console.log('Успешная отправка');
//     });
// }

const formContacts  = document.querySelector('#form-contacts');

const checkValidityForm = () => {
    const fieldsForm = Array.from(formContacts.elements);
    let isValidation = true;

    fieldsForm.forEach(field => {

        if(!checkFieldFormValidation(field)) {
            isValidation = false;
        }
    })

    return isValidation;
};

formContacts.addEventListener('submit', (event) => {
    event.preventDefault();

    const confirmation = checkValidityForm();

    if(confirmation) {
        console.log('отправил');

        const dataForm = serializeForm(formContacts);

        // TODO доделать запрос
        // const results = sendData(urlRequest, dataForm)

        // results.fail((response) => {
        //     console.log(response)
        // })
        // results.done((response) => {
        //     console.log(response)
        // })
    }
})
