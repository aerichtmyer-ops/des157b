(function() {
    'use strict';

    let data;

    const displaydata = document.querySelector('#displaydata');
    displaydata.className = 'hidden';
    //add getData function
    async function getData(){
        try{
            const fetchPromise = await fetch('data.json');
            data = await fetchPromise.json();
        
        } catch(error){
            console.error('oops something went wrong getting data:', error);
        }
    }
   

   //vars for book btns
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");
    const btn4 = document.querySelector("#btn4");
    const btn5 = document.querySelector("#btn5");
    const btn6 = document.querySelector("#btn6");
    const btn7 = document.querySelector("#btn7");
    const btn8 = document.querySelector("#btn8");
    const btn9 = document.querySelector("#btn9");
    const btn10 = document.querySelector("#btn10");
    const btn11  = document.querySelector("#btn11");
    const btn12  = document.querySelector("#btn12");
    


    btn1.addEventListener('click', function(event){
        displaydata.classList.remove('hidden');
        const html = document.querySelector('#displaydata');
        html.innerHTML = `
        <h2>Book ${data.books[0].book_number} - ${data.books[0].date}</h2>
        <p>${data.books[0].title} By ${data.books[0].author}</p>
        <p>${data.books[0].pages_read} pages</p>
        <p>${data.books[0].time_reading.value} ${data.books[0].time_reading.unit}</p>
        <p>Rating: ${data.books[0].enjoyment}/10</p>  
        <button class="closeBtn">Close</button>   
        `;
        document.querySelector('.closeBtn').addEventListener('click', function() {
            displaydata.classList.add('hidden');
      
        });
    });

    btn2.addEventListener('click', function(event){
        displaydata.classList.remove('hidden');
        const html = document.querySelector('#displaydata');
        html.innerHTML = `
        <h2>Book ${data.books[1].book_number} - ${data.books[1].date}</h2>
        <p>${data.books[1].title} By ${data.books[1].author}</p>
        <p>${data.books[1].pages_read} pages</p>
        <p>${data.books[1].time_reading.value} ${data.books[1].time_reading.unit}</p>
        <p>Rating: ${data.books[1].enjoyment}/10</p>  
        <button class="closeBtn">Close</button>   
        `;
        document.querySelector('.closeBtn').addEventListener('click', function() {
            displaydata.classList.add('hidden');
      
        });
    });

    btn3.addEventListener('click', function(event){
        displaydata.classList.remove('hidden');
        const html = document.querySelector('#displaydata');
        html.innerHTML = `
        <h2>Book ${data.books[2].book_number} - ${data.books[2].date}</h2>
        <p>${data.books[2].title} By ${data.books[2].author}</p>
        <p>${data.books[2].pages_read} pages</p>
        <p>${data.books[2].time_reading.value} ${data.books[2].time_reading.unit}</p>
        <p>Rating: ${data.books[2].enjoyment}/10</p>  
        <button class="closeBtn">Close</button>   
        `;
        document.querySelector('.closeBtn').addEventListener('click', function() {
            displaydata.classList.add('hidden');
      
        });
    });

    btn4.addEventListener('click', function(event){
        displaydata.classList.remove('hidden');
        const html = document.querySelector('#displaydata');
        html.innerHTML = `
        <h2>Book ${data.books[3].book_number} - ${data.books[3].date}</h2>
        <p>${data.books[3].title} By ${data.books[3].author}</p>
        <p>${data.books[3].pages_read} pages</p>
        <p>${data.books[3].time_reading.value} ${data.books[3].time_reading.unit}</p>
        <p>Rating: ${data.books[3].enjoyment}/10</p>  
        <button class="closeBtn">Close</button>   
        `;
        document.querySelector('.closeBtn').addEventListener('click', function() {
            displaydata.classList.add('hidden');
      
        });
    });

    btn5.addEventListener('click', function(event){
        displaydata.classList.remove('hidden');
        const html = document.querySelector('#displaydata');
        html.innerHTML = `
        <h2>Book ${data.books[4].book_number} - ${data.books[4].date}</h2>
        <p>${data.books[4].title} By ${data.books[4].author}</p>
        <p>${data.books[4].pages_read} pages</p>
        <p>${data.books[4].time_reading.value} ${data.books[4].time_reading.unit}</p>
        <p>Rating: ${data.books[4].enjoyment}/10</p>  
        <button class="closeBtn">Close</button>   
        `;
        document.querySelector('.closeBtn').addEventListener('click', function() {
            displaydata.classList.add('hidden');
      
        });
    });

    btn6.addEventListener('click', function(event){
        displaydata.classList.remove('hidden');
        const html = document.querySelector('#displaydata');
        html.innerHTML = `
        <h2>Book ${data.books[5].book_number} - ${data.books[5].date}</h2>
        <p>${data.books[5].title} By ${data.books[5].author}</p>
        <p>${data.books[5].pages_read} pages</p>
        <p>${data.books[5].time_reading.value} ${data.books[5].time_reading.unit}</p>
        <p>Rating: ${data.books[5].enjoyment}/10</p>  
        <button class="closeBtn">Close</button>   
        `;
        document.querySelector('.closeBtn').addEventListener('click', function() {
            displaydata.classList.add('hidden');
      
        });
    });

    btn7.addEventListener('click', function(event){
        displaydata.classList.remove('hidden');
        const html = document.querySelector('#displaydata');
        html.innerHTML = `
        <h2>Book ${data.books[6].book_number} - ${data.books[6].date}</h2>
        <p>${data.books[6].title} By ${data.books[6].author}</p>
        <p>${data.books[6].pages_read} pages</p>
        <p>${data.books[6].time_reading.value} ${data.books[6].time_reading.unit}</p>
        <p>Rating: ${data.books[6].enjoyment}/10</p>  
        <button class="closeBtn">Close</button>   
        `;
        document.querySelector('.closeBtn').addEventListener('click', function() {
            displaydata.classList.add('hidden');
      
        });
    });

    btn8.addEventListener('click', function(event){
        displaydata.classList.remove('hidden');
        const html = document.querySelector('#displaydata');
        html.innerHTML = `
        <h2>Book ${data.books[7].book_number} - ${data.books[7].date}</h2>
        <p>${data.books[7].title} By ${data.books[7].author}</p>
        <p>${data.books[7].pages_read} pages</p>
        <p>${data.books[7].time_reading.value} ${data.books[7].time_reading.unit}</p>
        <p>Rating: ${data.books[7].enjoyment}/10</p>  
        <button class="closeBtn">Close</button>   
        `;
        document.querySelector('.closeBtn').addEventListener('click', function() {
            displaydata.classList.add('hidden');
      
        });
    });

    btn9.addEventListener('click', function(event){
        displaydata.classList.remove('hidden');
        const html = document.querySelector('#displaydata');
        html.innerHTML = `
        <h2>Book ${data.books[8].book_number} - ${data.books[8].date}</h2>
        <p>${data.books[8].title} By ${data.books[8].author}</p>
        <p>${data.books[8].pages_read} pages</p>
        <p>${data.books[8].time_reading.value} ${data.books[8].time_reading.unit}</p>
        <p>Rating: ${data.books[8].enjoyment}/10</p>  
        <button class="closeBtn">Close</button>   
        `;
        document.querySelector('.closeBtn').addEventListener('click', function() {
            displaydata.classList.add('hidden');
      
        });
    });

    btn10.addEventListener('click', function(event){
        displaydata.classList.remove('hidden');
        const html = document.querySelector('#displaydata');
        html.innerHTML = `
        <h2>Book ${data.books[9].book_number} - ${data.books[9].date}</h2>
        <p>${data.books[9].title} By ${data.books[9].author}</p>
        <p>${data.books[9].pages_read} pages</p>
        <p>${data.books[9].time_reading.value} ${data.books[9].time_reading.unit}</p>
        <p>Rating: ${data.books[9].enjoyment}/10</p>  
        <button class="closeBtn">Close</button>   
        `;
        document.querySelector('.closeBtn').addEventListener('click', function() {
            displaydata.classList.add('hidden');
      
        });
    });

    btn11.addEventListener('click', function(event){
        displaydata.classList.remove('hidden');
        const html = document.querySelector('#displaydata');
        html.innerHTML = `
        <h2>Book ${data.books[10].book_number} - ${data.books[10].date}</h2>
        <p>${data.books[10].title} By ${data.books[11].author}</p>
        <p>Pages read: ${data.books[10].pages_read} pages</p>
        <p>${data.books[10].time_reading.value} ${data.books[10].time_reading.unit}</p>
        <p>Rating: ${data.books[10].enjoyment}/10</p>  
        <button class="closeBtn">Close</button>   
        `;
        document.querySelector('.closeBtn').addEventListener('click', function() {
            displaydata.classList.add('hidden');
      
        });
    });

    btn12.addEventListener('click', function(event){
        displaydata.classList.remove('hidden');
        const html = document.querySelector('#displaydata');
        html.innerHTML = `
        <h2>Book ${data.books[11].book_number} - ${data.books[11].date}</h2>
        <p>${data.books[11].title} By ${data.books[11].author}</p>
        <p>${data.books[11].pages_read} pages</p>
        <p>${data.books[11].time_reading.value} ${data.books[11].time_reading.unit}</p>
        <p>Rating: ${data.books[11].enjoyment}/10</p>  
        <button class="closeBtn">Close</button>   
        `;
        document.querySelector('.closeBtn').addEventListener('click', function() {
            displaydata.classList.add('hidden');
      
        });
    });



    getData();
})();