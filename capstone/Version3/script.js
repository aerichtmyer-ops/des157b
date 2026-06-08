

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

    const music = new Audio('audio/music.mp3');

    const musicBtn = document.querySelector(".music");

    music.loop = true; //loop music

    musicBtn.addEventListener('click', function(event){

        const icon = document.querySelector(".fa-music")
        if (music.paused) {
            music.play();
            musicBtn.style.borderColor = "#6bfc43";
            icon.style.color = "#6bfc43"
        }
        else{
            music.pause();
            music.currentTime = 0;
            musicBtn.style.borderColor = "#ebfce6";
            icon.style.color = "#ebfce6";
        }
    })

    music.addEventListener('ended',() => {
        music.currentTime = 0;
        music.play();
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

        document.querySelector("#title2").innerHTML += 'Current data shows <strong>doctors using AI assistance</strong> promises highest accuracy results.';
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
                .attr("fill", "#a264ff");



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
        document.querySelector("#title").innerHTML += 'Hold to drag + click on highlighted nations for info';
        DrawMap();
    })

    

    async function DrawMap() {
    
        const world = await d3.json(
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
        );
        //List of coutnries using AI in healthcare access
        const countryData = {
            "India": {
                title: "India",
                description: "AI-assisted cardiac risk prediction allows cardiologists to see patients based on risk level cases, enabling for faster diagnoses."
            },
            "China": {
                title: "China",
                description: "National initiaves have brought AI-assisted diagnoses to village health centers. These initiaves emphasize in aiding the work of doctors, not replacing them"
            },
            "Rwanda": {
                title: "Rwanda",
                description: "Gates Foundation and OpenAI are partnering to bring AI tools to rural clinics in several African countries, starting with Rwanda, where healthcare workers are scarce."
            },
            "Nepal":{
                title: "Nepal",
                description: "WHO and Nepal's AI researcch institute (NAMII) are partnering to deliver AI supported healthcare to mountainous and geographically isolated regions, where quality access to heathcare is scarce."
            },
            "Colombia":{
                title: "Colombia",
                description:"Developing generative AI to assist pediatricians in triaging reports of fever cases in rural areas, helping parents assess symptoms and decide if it is manageable or requires travel to emergency care."
            },
            "Bangladesh":{
                title: "Bangladesh",
                description: "Currently using AI powered assessments to offer accessible and affordable services for children and young adults."
            },
            "Tanzania":{
                title:"Tanzania",
                description: "Uses AI to provide clinical decision support, symptom assessment and disease outbreak prediction and tracking."
            }
        }

        //set up map dimensions
        const width = 400;
        const height = 350;

        const svg = d3.select("#map")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        //projection of orthographic globe
        const projection = d3.geoOrthographic()
            .scale(175)
            .translate([width/2, height/2])
            .rotate([0, -20]);

        //declare path
        const path = d3.geoPath(projection);
        
        //load TopoJSON data
        const countries = topojson.feature(
            world,
            world.objects.countries
        ).features;

        //draw countries
        svg.selectAll("path.country")
            .data(countries)
            .enter()
            .append("path")
            .attr("class", "country")
            .attr("d", path)
            .attr("fill", "#ffff")
            .attr("stroke", "#333")
            .attr("stroke-width", 0.5)
            //highlight interactive countries
            .attr("fill", d => {
                return countryData[d.properties.name]
                    ? "#0cdb3c" : "#d0d0d0";
            })
            //hover interaction of identified countries
            .on("mouseover", function(event,d){
            if(!countryData[d.properties.name]) return;

                d3.select(this)
                .attr("fill","#a264ff");
            })
            .on("mouseout", function(event,d){
                if(!countryData[d.properties.name]) return;

                d3.select(this)
                    .attr("fill","#0cdb3c");
            })

            //click interaction
            .on("click", function(event,d){
                const info = countryData[d.properties.name];
                
                if(!info) return;

                updatePanel(info);
            })

        //info text for country function
        function updatePanel(info){
            document.querySelector("#title").textContent = info.title;

            document.querySelector("#countryDescription").textContent = info.description;
        }

    
        //Drag function
        //call to the draggable d3 globe example
        svg.call(
            d3.drag()
            .on("drag", dragged)
        );

        function dragged(event){
            const rotate = projection.rotate();

            const k = 1 / projection.scale();

            projection.rotate([
                rotate[0] + event.dx * 0.5,
                rotate[1] - event.dy * 0.5
            ]);

            svg.selectAll("path")
                .attr("d", path);
            
            //update the projection and redraw every frame of globe
        }

    }

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

         document.querySelector("#title4").innerHTML += 'The FDA authorized its first AI-enabled medical device in 1995. By 2015, only six such devices had been approved, but the number spiked to 223 by 2023.';
    })


    function lineChart() {
        console.log("draw chart");
        //linechart data
        const lineChartData = [
            {
                date: 1995,
                close: 1
            },
            {
                date: 2015,
                close: 6
            },
            {
                date: 2023,
                close: 223
            }
        ]


        // Declare the chart dimensions and margins.
        const width = 500;
        const height = 300;
        const marginTop = 30;
        const marginRight = 30;
        const marginBottom = 30;
        const marginLeft = 40;

        //declare the x horizontal position scle
        const x = d3.scaleLinear()
            .domain(d3.extent(lineChartData, d => d.date))
            .range([marginLeft, width - marginRight]);

        //declrare the y vertical position  scale
        const y = d3.scaleLinear()
            .domain([0, d3.max(lineChartData, d => d.close)])
            .range([height - marginBottom, marginTop]);

        //declare line generator
        const line = d3.line()
            .x(d => x(d.date))
            .y(d => y(d.close));

        //create the SVG container
        const svg = d3.select("#lineChart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0,0,width,height])
            .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

        //add the x-axis
        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(
                d3.axisBottom(x)
                    .ticks(width / 80)
                    .tickFormat(d3.format("d"))
                    .tickSizeOuter(0)
            )

            .call(g => g.selectAll("text").attr("fill", "#a264ff"))
            .call(g => g.selectAll("text").attr("font-size", "14px"))
            .call(g => g.selectAll("text").attr("font-weight", "500"))
             
            .call(g => g.selectAll("line").attr("stroke", "#a264ff"))
            .call(g => g.selectAll("line").attr("stroke-width", 2))
            .call(g => g.selectAll("path").attr("stroke", "#a264ff"));
        
        //ade the y-axis, remove domain line, add grid lines and a label
        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y).ticks(height / 40))
            .call(g => g.selectAll("text").attr("fill", "#a264ff"))
            .call(g => g.selectAll("text").attr("font-size", "14px"))
            .call(g => g.selectAll("text").attr("font-weight", "500"))
            .call(g => g.selectAll("line").attr("stroke", "#a264ff"))
            .call(g => g.selectAll("path").attr("stroke", "#a264ff"))
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").clone()
                .attr("x2", width - marginLeft - marginRight)
                .attr("stroke-opacity", 0.1))
        
            .call(g => g.append("text")
                .attr("x", -marginLeft)
                .attr("y", 15)
                .attr("fill", "#a264ff")
                .attr("text-anchor", "start")
                .attr("font-size", "16px")
                .text("Number of Aproved AI Medical Devices"));
            
            //append a path for the line
            svg.append("path")
                .attr("fill", "none")
                .attr("stroke", "#0cdb3c")
                .attr("stroke-width", 1.5)
                .attr("d", line(lineChartData));

            return svg.node();

    }


    //Q5 Form
    const form5 = document.querySelector('#q5form');

    form5.addEventListener('submit', function(event){
        event.preventDefault();
        

        form5.className = "hidden";

        // const output5 = document.querySelector('#q5-answer-output');
        //     if (output5){
        //         output5.innerHTML = "<p>Displayment of a graph that shows the overlap of synthetic and real datasets used to train AI mdodels. Synthetic datasets are proven to be just as reliable, minimizing privacy breaches.</p>";
        //     }
          
        barChartRace();

        document.querySelector("#title5").innerHTML += 'Since 2021, the number of entries in major public protein science databases has grown significantly, including UniProt (31%), PDB (23%), and AlphaFold (585%). This expansion, within just a few years, has important implications for scientific discovery and saved hundreds of millions of research hours globally.';
    })

    function barChartRace(){
      
        console.log("reading function");

        const data = [
            { year: 2021, name: "AlphaFold", value: 100 },
            { year: 2021, name: "UniProt", value: 100 },
            { year: 2021, name: "PDB", value: 100 },

            { year: 2022, name: "AlphaFold", value: 54800 },
            { year: 2022, name: "UniProt", value: 110 },
            { year: 2022, name: "PDB", value: 108 },

            { year: 2023, name: "AlphaFold", value: 58600 },
            { year: 2023, name: "UniProt", value: 120 },
            { year: 2023, name: "PDB", value: 116 },

            { year: 2024, name: "AlphaFold", value: 60300 },
            { year: 2024, name: "UniProt", value: 127 },
            { year: 2024, name: "PDB", value: 124 },

            { year: 2025, name: "AlphaFold", value: 61100 },
            { year: 2025, name: "UniProt", value: 131 },
            { year: 2025, name: "PDB", value: 133 }
        ];

            const width = 700;
            const height = 350;
            const margin = { top: 40, right: -10, bottom: 200, left: 100 };

            const svg = d3.select("#barChartrace")
                .append("svg")
                .attr("viewBox", [0, 0, width, height])
                .attr("width", width)
                .attr("height", height)
                .attr("style", "max-width: 100%; height: auto;");
            
            const years = [...new Set(data.map(d => d.year))];

            const x = d3.scaleLog()
                .range([margin.left, width - margin.right - 75]);

            const y = d3.scaleBand()
                .range([margin.top, width - margin.bottom - 150])
                .padding(0.15);

            const yearLabel = svg.append("text")
                .attr("x", width - 70)
                .attr("y", 50)
                .attr("text-anchor", "end")
                .attr("font-size", "24px")
                .attr("fill", "#0cdb3c")
                .attr("font-family", "Roboto, sans-serif")
                .attr("font-weight", "bold");

            function update(year) {

                const yearData = data
                    .filter(d => d.year === year)
                    .sort((a,b) => b.value - a.value);
                
                x.domain([1, d3.max(yearData, d => d.value)]);
                y.domain(yearData.map(d => d.name));

                yearLabel.text(year);
                
                //Bars
                const bars = svg.selectAll(".bar")
                    .data(yearData, d => d.name);

                bars.join("rect")
                    .attr("class", "bar")
                    .attr("x", margin.left)
                    .attr("height", 80)
                    .transition()
                    .duration(1000)
                    .attr("y", d => y(d.name))
                    .attr("width", d => x(d.value) - margin.left)
                    .attr("fill", "#a264ff");

                //labels
                const labels = svg.selectAll(".name")
                    .data(yearData, d => d.name);

                labels.join("text")
                    .attr("class", "name")
                    .attr("x", margin.left - 10)
                    .attr("dy", "0.35em")
                    .attr("text-anchor", "end")
                    .attr("fill", "#0cdb3c")
                    .attr("font-size", "12px")
                    .attr("font-family", "Roboto, sans-serif")
                    .attr("font-weight", "400")
                    .transition()
                    .duration(1000)
                    .attr("y", d => y(d.name) + y.bandwidth() / 2)
                    .text(d => d.name);

                // VALUES
                const values = svg.selectAll(".value")
                    .data(yearData, d => d.name);

                values.join("text")
                    .attr("class", "value")
                    .attr("fill", "#0cdb3c")
                    .attr("font-size", "12px")
                    .attr("font-family", "Roboto, sans-serif")
                    .attr("font-weight", "400")
                    .attr("dy", "0.35em")
                    .transition()
                    .duration(1000)
                    .attr("x", d => x(d.value) + 8)
                    .attr("y", d => y(d.name) + y.bandwidth() / 2)
                    .text(d => d.value.toLocaleString());
            }
            
        let index = 0;

        update(years[index]);

        setInterval(() => {
        index = (index + 1) % years.length;
        update(years[index]);
        }, 2000);
    }   

    // getData();

    //collect user input from submitted questions


    const forms = document.querySelectorAll("form");

   forms.forEach(function(form){
        form.addEventListener('submit', async function(event){
            event.preventDefault();

            //select radio button
            const selectedInput = form.querySelector('input[type="radio"]:checked');

            //value is a,b,d, or d
            const answer = selectedInput.value;

            if(!selectedInput){
                alert("Please select an answer");
                return;
            }

            //turn form id to question id
            const question = form.id;

            console.log(question);
            console.log(answer);


            //save to back4app
            const formResponse = Parse.Object.extend("formResponse");

            const response = new formResponse();

            response.set("question", question);
            response.set("answer", answer);

            try {
                await response.save();

                console.log("saved to back4app");

                
            } catch(error){
                console.error(error);
            }

        });
    });

        //Q6 Form styling submit function
    const form6 = document.querySelector('#q6form');

    if (form6) {
        form6.addEventListener('submit', async function(event){
            event.preventDefault();
            
            form6.className = "hidden";

            const output = document.querySelector('#q6-answer-output');
            if (output){
                output.innerHTML = "<p>Your answer has been logged</p>";
            }
            
            q1Results();
            const body = document.querySelector("body");
            body.className = "response";

        })
        
    }

    //calculate percetnages
    async function q1Results(){

        const formResponse = Parse.Object.extend("formResponse");

        //q1 query
        const q1query = new Parse.Query(formResponse);
        q1query.equalTo("question", "q1form");

        //q6 query
        const q6query = new Parse.Query(formResponse);
        q6query.equalTo("question", "q6form");



        try {
            const results1 = await q1query.find();
            const results2 = await q6query.find();

            console.log(results1, results2);
            console.log("Number of results:", results1.length);

            const counts1 = {
                answer1a: 0,
                answer1b: 0,
                answer1c: 0
            };

            const counts2 = {
                answer6a: 0,
                answer6b: 0,
                answer6c: 0,
                answer6d: 0
            }

            results1.forEach(item => {
                const answer = item.get("answer");
                if (counts1[answer] !== undefined){
                    counts1[answer]++;
                }

                console.log(item.get("answer"));
            });

            results2.forEach(item => {
                const answer = item.get("answer");
                if(counts2[answer] !== undefined){
                    counts2[answer]++;
                }
            })

            const total1 = results1.length;
            const total2 = results2.length;

            const percentA = ((counts1.answer1a / total1) * 100 || 0).toFixed(1);
            const percentB = ((counts1.answer1b / total1) * 100 || 0).toFixed(1);
            const percentC = ((counts1.answer1c / total1) * 100 || 0).toFixed(1);

            const percent2A = ((counts2.answer6a / total2) * 100 || 0).toFixed(1);
            const percent2B = ((counts2.answer6b / total2) * 100 || 0).toFixed(1);
            const percent2C = ((counts2.answer6c / total2) * 100 || 0).toFixed(1);
            const percent2D = ((counts2.answer6d / total2) * 100 || 0).toFixed(1);



            const resultsDiv = document.querySelector("#results");
            console.log(resultsDiv);

            document.querySelector("#results").innerHTML = `<h4>In the beginning of the questionare, <span style = "color:#0cdb3c">${percentA}%</span> of users felt most <span style = "font-weight: 600">confident with a diganosis from a doctor</span>, <span style = "color:#0cdb3c">${percentB}%</span> chose a <span style = "font-weight: 600">doctor assisted with AI</span>, and <span style = "color:#0cdb3c">${percentC}%</span> chose a <span style = "font-weight: 600">diagnosis made by AI alone</span>.</h4>`;

            document.querySelector("#results2").innerHTML = `<h4>After the questionare, <span style = "color:#0cdb3c">${percent2A}%</span> of users felt that their <span style = "font-weight: 600">perspective became more optimistic</span>, <span style = "color:#0cdb3c">${percent2B}%</span> felt that perspective became <span style = "font-weight: 600">more negative</span>, <span style = "color:#0cdb3c">${percent2C}%</span> felt that their opinion <span style = "font-weight: 600">did not change</span>, and <span style = "color:#0cdb3c">${percent2D}%</span> were <span style = "font-weight: 600">still unsure</span>.</h4>`;
            
            document.querySelector("#restart").innerHTML = `<button id = "restartBtn">RESTART</button>`

            document.querySelector("#restartBtn").addEventListener("click", function(){
                window.scrollTo(0,0);
                location.reload();
            });

        } catch(error){
            console.error(error);
        }
    } 

})();
