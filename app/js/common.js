document.addEventListener('DOMContentLoaded', function(){
 
    function accordion(idAccordion){
        var accordion = document.querySelectorAll(idAccordion);
        
        accordion.forEach((accordion)=>{
            var accordionBody = accordion.querySelector('.accordion-body');
            var accordionButton =  accordion.querySelector('.accordion-button');              
            var timeOut = 0.5;
            accordionBody.style.minHeight = '0';
            accordionBody.style.transition = 'max-height '+ timeOut +'s ease';
            accordionBody.style.maxHeight = '0';        
            accordionBody.style.overflow = 'hidden';  
            accordionButton.setAttribute('data-status-accordion', 'close');
    
            accordionButton.addEventListener('click', function(){          
                if (this.getAttribute('data-status-accordion') === 'close') {
                    this.setAttribute('data-status-accordion', 'open');             
                    accordionButton.classList.add('active');
                    accordionBody.classList.add('active');
                    accordionBody.style.maxHeight = (accordionBody.scrollHeight) + 'px'; 
                   
                } else if (this.getAttribute('data-status-accordion') === 'open'){
                    this.setAttribute('data-status-accordion', 'close');                                
                    accordionButton.classList.remove('active');
                    accordionBody.classList.remove('active');                
                    accordionBody.style.maxHeight = '0';                
                }
            });
        });
        
    }

    /*function accordion(idAccordion){
        var accordion = document.querySelectorA(idAccordion);
        var accordionBody = accordion.querySelector('.accordion-body');
        accordionBody.style.minHeight = '0'; 
        var accordionButton =  accordion.querySelector('.accordion-button');  
        var timeOut = 0.5;
        accordionBody.style.transition = 'max-height '+ timeOut +'s ease';
        accordionBody.style.maxHeight = '0';        
        accordionBody.style.overflow = 'hidden';  
        accordionButton.setAttribute('data-status-accordion', 'close');

        accordionButton.addEventListener('click', function(){          
            if (this.getAttribute('data-status-accordion') === 'close') {
                this.setAttribute('data-status-accordion', 'open');             
                accordionButton.classList.add('active');
                accordionBody.classList.add('active');
                accordionBody.style.maxHeight = (accordionBody.scrollHeight) + 'px'; 
               
            } else if (this.getAttribute('data-status-accordion') === 'open'){
                this.setAttribute('data-status-accordion', 'close');                                
                accordionButton.classList.remove('active');
                accordionBody.classList.remove('active');                
                accordionBody.style.maxHeight = '0';                
            }
        });
    }*/

    function touchBar (idScroll){
        var scroll = document.querySelector(idScroll);
        var scrollFill = document.querySelector('.scroll-fill');
        var scrollTouch = document.querySelector('.scroll-touch'); 
        var paramsTouch = 
        {
            left: scrollTouch.getBoundingClientRect().left - scroll.getBoundingClientRect().left,
            right: scroll.getBoundingClientRect().right - scrollTouch.getBoundingClientRect().right,
        };

        // function updateCoord(){
        //     paramsTouch.left=;
        //     paramsTouch.right=;
        //     return paramsTouch;
        // }
        
        
        scrollTouch.addEventListener('mousedown', (e) => {   
            (function dragTouch(){
                document.addEventListener('mousemove', (e) => {                
                    scrollTouch.style.left = (e.pageX - (scrollTouch.getBoundingClientRect().left/2))  + 'px';
                });
            })();
        });

        scrollTouch.addEventListener('mouseup', (e) => {
            console.log(1);
            dragTouch = null;
        });
    }

    var accordionCalculate = new accordion('.accordion');
    var scrollDeposit = new touchBar('#depositBar');
});