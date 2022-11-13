const monthly=document.querySelector('#monthly');
const yearly=document.querySelector('#yearly');
const toggleOff=document.querySelector('#toggleOff');
const toggleOn=document.querySelector('#toggleOn');

toggleOff.addEventListener('click',function(e){
    toggleOn.classList.remove('d-none');
    toggleOff.classList.add('d-none');
    monthly.classList.remove('text-black');
    monthly.classList.add('text-secondary');
    yearly.classList.add('text-black');
    yearly.classList.remove('text-secondary');
})

toggleOn.addEventListener('click',function(e){
    toggleOn.classList.add('d-none');
    toggleOff.classList.remove('d-none');
    monthly.classList.add('text-black');
    monthly.classList.remove('text-secondary');
    yearly.classList.remove('text-black');
    yearly.classList.add('text-secondary');
})