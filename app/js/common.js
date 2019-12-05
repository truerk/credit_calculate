document.addEventListener('DOMContentLoaded', function(){
 
    function accordion(idAccordion){
        var accordion = document.querySelector(idAccordion);
        var accordionBody = accordion.querySelector('.accordion-body');
        accordionBody.style.minHeight = '0'; 
        var accordionButton =  accordion.querySelector('.accordion-button');        
        var accordionHeight = accordionBody.offsetHeight;
        var timeOut = 1;
        accordionBody.style.transition = 'max-height '+ timeOut +'s ease';
        accordionBody.style.maxHeight = '0';        
        accordionBody.style.overflow = 'hidden';  

        accordionButton.addEventListener('click', function(){
            var accordionStatus = this.getAttribute('data-status-accordion');
            
            if (accordionStatus === 'close') {
                accordionBody.style.transition = 'max-height '+ timeOut +'s ease';
                this.setAttribute('data-status-accordion', 'open');             
                accordionButton.classList.add('active');
                accordionBody.classList.add('active');
                accordionBody.style.maxHeight = (accordionHeight*2) + 'px'; 
               
            } else if (accordionStatus === 'open'){
                accordionBody.style.transition = 'max-height '+ (timeOut/2.5) +'s ease-in-out';
                this.setAttribute('data-status-accordion', 'close');                                
                accordionButton.classList.remove('active');
                accordionBody.classList.remove('active');                
                accordionBody.style.maxHeight = '0';                
            }
        });
    }

    var accordionCalculate = new accordion('#accordion-calculate');
});