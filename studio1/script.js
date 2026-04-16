(function (){
    'use strict';
    console.log('reading JS');

    //full screen var and function
    const fs = document.querySelector('.fa-solid');

    fs.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    //display text function
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const myVideo = document.querySelector('#myVideo')

    function displayText(){
        setTimeout( function (){
            line1.className = 'showing';
            setTimeout(function(){
                line2.className = 'showing';
                setTimeout(function(){
                    myVideo.style.filter = "grayscale(0%)"
                    displayText();
                }, 1000);
            }, 2000);
        }, 2000);
    }

    displayText();

    //loop for when video restarts
    // myVideo.addEventListener('ended', function(){
    //     myVideo.style.filter = 'grayscale(80%)';
    //     displayText();
    // });

    //click for bark function
    const barkSound = new Audio('audio/meow.mp3');

    window.addEventListener('click', function(){
        barkSound.play();
    });

    //loading function
    window.addEventListener('load', function(){
        const load = this.document.querySelector('#loading');
        load.style.opacity = '0';
    })

})();