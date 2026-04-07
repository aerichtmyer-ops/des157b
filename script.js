(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    const background = document.querySelector('#container')
    const header = document.querySelector('#title1');
    const header2 = document.querySelector('#title2');
    const navs = document.querySelectorAll('nav');
    const header3 = document.querySelectorAll('h3');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    let mode = 'dark';

    //sound variables
    const oceanSound = new Audio('audio/ocean.mp3');
    const desertSound = new Audio('audio/desert.mp3');

    button.addEventListener('click', function() {

       
        if (mode === 'dark') {

            //stop ocean
            oceanSound.pause();
            oceanSound.currentTime = 0;

            
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            background.className = 'switch';
            header.className = 'switch';
            header2.className = 'switch';
            main.className = 'switch';
            footer.className = 'switch';
            
           
            for (const section of sections) {
                section.className = 'switch';
            }
            for (const nav of navs) {
                nav.className = 'switch';
            }
            for (const h3 of header3){
                h3.className = 'switch'
            }

            mode = 'light';

            //play desert
            desertSound.currentTime = 0;
            desertSound.play();
            
        } else {

            //stop desert
            desertSound.pause();
            desertSound.currentTime = 0;

            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            background.removeAttribute('class');
            header.removeAttribute('class');
            header2.removeAttribute('class');
            main.removeAttribute('class');
            footer.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            for (const nav of navs) {
                nav.removeAttribute('class');
            }
             for (const h3 of header3){
                h3.removeAttribute('class');
            }

            mode = 'dark'

            //play ocean
            oceanSound.currentTime = 0;
            oceanSound.play();
        }
    });
})();