

const myForm = document.querySelector('#myForm');

const clr = document.querySelector('#clr');

clr.addEventListener('click', ()=> {
    myForm.reset();
})