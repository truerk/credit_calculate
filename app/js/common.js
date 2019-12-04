document.addEventListener('DOMContentLoaded', function(){
 
    function accordion(idAccordion){
        var accordion = document.querySelector(idAccordion);
        var accordionBody = accordion.querySelector('.accordion-body');
        var accordionButton =  accordion.querySelector('.accordion-button');
        var accordionHeight = accordionBody.offsetHeight;
        var timeOut = 500;
        accordionBody.style.transition = 'height 0.'+ timeOut +'s ease-in-out';
        accordionBody.style.height = '0';
        accordionBody.style.overflow = 'hidden';
        

        accordionButton.addEventListener('click', function(){
            var accordionStatus = this.getAttribute('data-status-accordion');
            console.log(accordionHeight);
            if (accordionStatus === 'close') {
                this.setAttribute('data-status-accordion', 'open');
                accordionBody.style.height = accordionHeight + 'px';                
                accordionButton.classList.add('active');
                setTimeout(() => {                    
                    accordionBody.style.overflow = 'visible';
                }, timeOut);
                
            } else if (accordionStatus === 'open'){
                accordionBody.style.height = '0';
                this.setAttribute('data-status-accordion', 'close');
                accordionButton.classList.remove('active');
                accordionBody.style.overflow = 'hidden';
            }
        });
    }

    var accordionCalculate = new accordion('#accordion-calculate');
});