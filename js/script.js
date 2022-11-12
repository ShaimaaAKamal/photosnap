const socials=document.querySelectorAll('.socials a svg');
socials.forEach(social=>{
    social.addEventListener('mouseenter',function(){
        social.children[1].style.fill='url(#a)';
    })
    social.addEventListener('mouseleave',function(){
        social.children[1].style.fill='#fff';
    })
})