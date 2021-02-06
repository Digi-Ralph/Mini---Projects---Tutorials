const faqtoggle = document.querySelectorAll('.faq');


faqtoggle.forEach( (faq) => {
    faq.addEventListener('click' , () => {
        faq.classList.toggle('active');
    })
})