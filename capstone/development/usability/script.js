
(function() {
    'use strict';
    console.log('Reading JS');

    AOS.init();
    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    //overlay function
    window.addEventListener('load', function(){
        this.document.querySelector('#overlay').className= 'showing';
    })

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').classList.remove('showing');
        document.querySelector('#overlay').classList.add('overlayhidden');
    })

    //Back4APP
    Parse.initialize("yPmh2qhUEnGNFKQrZWHhyT86lSKvBZrQK2gbQb5P", "9Z3MTctaS2P9GSH4QaO77QKIUkZRtuJovpjqZp42"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = "https://parseapi.back4app.com/";


    //form functions
    
    //Q1 Form styling submit function
    const form1 = document.querySelector('#q1form');

    if (form1) {
        form1.addEventListener('submit', function(event){
            event.preventDefault();
            
            form1.className = "hidden";

            const output = document.querySelector('#q1-answer-output');
            if (output){
                output.innerHTML = "<p>Your answer has been logged</p>";
            }
        
        })

    }



    //chart
    //Q2 Data
    const q2Data = [
        { group: "Human doctors", accuracy: 0.74 },
        { group: "AI alone", accuracy: 0.82},
        { group: "Doctors using AI assistance", accuracy: 0.92}
    ]

    //Q2 Form
    const form2 = document.querySelector('#q2form');


    form2.addEventListener('submit', function(event){
        event.preventDefault();
        
        form2.className = "hidden";

        document.querySelector("#q2container").style.minWidth = "600px";

        drawChart();
    })

    //drawChart Function
    function drawChart(){
        const width = 600;
        const height = 300;

        const marginTop = 30;
        const marginRight = 20;
        const marginBottom = 80;
        const marginLeft = 60;

            // SVG
            const svg = d3.select("#chart")
                .append("svg")
                .attr("width", width)
                .attr("height", height);
         

            // X SCALE
            const x = d3.scaleBand()
                .domain(q2Data.map(d => d.group))
                .range([marginLeft, width - marginRight])
                .padding(0.2);

            // Y SCALE
            const y = d3.scaleLinear()
                .domain([0, 1])
                .range([height - marginBottom, marginTop]);

            // BARS
            svg.append("g")
                .selectAll("rect")
                .data(q2Data)
                .join("rect")
                .attr("x", d => x(d.group)) 
                .attr("y", d => y(d.accuracy))
                .attr("width", x.bandwidth())
                .attr("height", d => y(0) - y(d.accuracy))
                .attr("fill", "#00d1ff");



            // X AXIS
            svg.append("g")
                .attr("transform", `translate(0, ${height - marginBottom})`)
                // .call(d3.axisBottom(x))
    
                .selectAll("text")
                .attr("transform", "rotate(0)")
                .style("text-anchor", "end")
                .attr("fill", "white");

                svg.append("g")
                .selectAll("text")
                .data(q2Data)
                .join("text")
                .attr("x", d => x(d.group) + x.bandwidth() / 2)
                .attr("y", height - marginBottom + 25)
                .attr("text-anchor", "middle")
                .attr("fill", "white")
                .attr("font-size", "12px")
                .attr("font-family", "Roboto, sans-serif")
                .attr("font-weight", "500")
                .text(d => d.group);

            // Y AXIS
            svg.append("g")
                .attr("transform", `translate(${marginLeft}, 0)`)
                .call(
                    d3.axisLeft(y)
                        .tickFormat(d => `${d * 100}%`)
                )
                .call(g => g.selectAll("path").attr("stroke", "white"))
                .call(g => g.selectAll("line").attr("stroke", "white"))
                .selectAll("text")
                .attr("fill", "white");
                

            // VALUE LABELS
            svg.append("g")
                .selectAll("text")
                .data(q2Data)
                .join("text")
                .attr("x", d => x(d.group) + x.bandwidth() / 2)
                .attr("y", d => y(d.accuracy) - 10)
                .attr("text-anchor", "middle")
                .text(d => `${Math.round(d.accuracy * 100)}%`)
                .style("fill", "white");
    }

    //add getData function for Q2

    let q3Data;

   /* async function getData(){
        try{
            const fetchPromise = await fetch('data.json');
            q3Data = await fetchPromise.json();
        
        } catch(error){
            console.error('oops something went wrong getting data:', error);
        }
    }*/
   

    //Q3 Form
    const form3 = document.querySelector('#q3form');


    form3.addEventListener('submit', async function(event){
        event.preventDefault();
        

        /*if (!q3Data) {
            await getData();
        }*/

        form3.className = "hidden";

        const output3 = document.querySelector('#q3-answer-output');
            if (output3){
                output3.innerHTML = "<p>Displayment of a world map with current locations/regions implemennting AI in rural areas</p><p>Points/labels will detail current specfic uses</p>";
            }
        
        DrawMap();
    })

  /*  function DrawMap(){

        canvas = {
            // Specify the chart’s dimensions.
            const height = Math.min(width, 720); // Observable sets a responsive *width*

            // Prepare a canvas.
            const dpr = window.devicePixelRatio ?? 1;
            const canvas = d3.create("canvas")
                .attr("width", dpr * width)
                .attr("height", dpr * height)
                .style("width", `${width}px`);
            const context = canvas.node().getContext("2d");
            context.scale(dpr, dpr);

            // Create a projection and a path generator.
            const projection = d3.geoOrthographic().fitExtent([[10, 10], [width - 10, height - 10]], {type: "Sphere"});
            const path = d3.geoPath(projection, context);
            const tilt = 20;

            function render(country, arc) {
                context.clearRect(0, 0, width, height);
                context.beginPath(), path(land), context.fillStyle = "#ccc", context.fill();
                context.beginPath(), path(country), context.fillStyle = "#f00", context.fill();
                context.beginPath(), path(borders), context.strokeStyle = "#fff", context.lineWidth = 0.5, context.stroke();
                context.beginPath(), path({type: "Sphere"}), context.strokeStyle = "#000", context.lineWidth = 1.5, context.stroke();
                context.beginPath(), path(arc), context.stroke();
                return context.canvas;
            }
        }

*/

     //Q4 Form
    const form4 = document.querySelector('#q4form');

    form4.addEventListener('submit', function(event){
        event.preventDefault();
        

        form4.className = "hidden";

        // const output4 = document.querySelector('#q4-answer-output');
        //     if (output4){
        //         output4.innerHTML = "<p>Displayment of a line graph that shows the boom of AI medical devices.</p><p>From one in 1995, 6 in 2015, and to 223 by 2023.</p>";
        //     }
        lineChart();

         document.querySelector("#q4-answer-output").innerHTML += 'The FDA authorized its first AI-enabled medical device in 1995. By 2015, only six such devices had been approved, but the number spiked to 223 by 2023.';
    })


    //Q5 Form
    const form5 = document.querySelector('#q5form');

    form5.addEventListener('submit', function(event){
        event.preventDefault();
        

        form5.className = "hidden";

        const output5 = document.querySelector('#q5-answer-output');
            if (output5){
                output5.innerHTML = "<p>Displayment of a graph that shows the overlap of synthetic and real datasets used to train AI mdodels. Synthetic datasets are proven to be just as reliable, minimizing privacy breaches.</p>";
            }
            
    })













    

   
    // getData();

    //collect user input from submitted questions

    var hiddenInput = document.querySelectorAll( ".hiddeninput" );
    const forms = document.querySelectorAll("form");

    forms.forEach(function(form){
        form.addEventListener('submit', function(event){
            for(var i =0; i< hiddenInput.length; i++ ){
                hiddenInput[i];
            }
            collectInput();
        });

        console.log({form});
    });

    //function for back4app
    async function collectInput(){
        const question1 = {}

        // for(let i = 0; i < hiddenInput.length; i++){
        //     // let key = document.querySelector('#form1').getAttribute();
        //     let value = hiddenInput[i].value;
        //     question1[key] = value.
        // }
    }

})();
