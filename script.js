const myBtn = document.querySelector('#myBtn');
const container = document.querySelector('#container');
const phone = document.querySelector('.phone');

myBtn.addEventListener('click', function () {
    container.style.color = 'red';
})

container.addEventListener('click', function () {
    this.style.color = 'green';
    myBtn.textContent = 'ok';
})

phone.addEventListener('keydown', function(event) {
    //console.log(event.key)
    let isDisign=false;
    let isDash = false;
    let isDas = false;
    console.log(event.key);
    if (event.key>=0 &&/*это и*/event.key<=9) {
        isDisign=true;
    }
    if (event.key=='-') {
        isDash=true;
    }
    if (event.key=='Backspace'||event.key=='ArrowLeft'||/*это или*/event.key=='ArrowRight') {
        isDas=true;
    }
    if (!isDisign && !isDash && !isDas) {
        event.preventDefault() //отмена действия по умолчанию
    }
})