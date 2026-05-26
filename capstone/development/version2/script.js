
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


    //chart
    //Q1 Data
    const data = [
        { group: "Human doctors", accuracy: 0.74 },
        { group: "AI alone", accuracy: 0.82},
        { group: "Doctors using AI assistance", accuracy: 0.92}
    ]

    //Q1 Form
    const form = document.querySelector('#q1form');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        form.className = "hidden";

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
                .domain(data.map(d => d.group))
                .range([marginLeft, width - marginRight])
                .padding(0.2);

            // Y SCALE
            const y = d3.scaleLinear()
                .domain([0, 1])
                .range([height - marginBottom, marginTop]);

            // BARS
            svg.append("g")
                .selectAll("rect")
                .data(data)
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
                .data(data)
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
                .data(data)
                .join("text")
                .attr("x", d => x(d.group) + x.bandwidth() / 2)
                .attr("y", d => y(d.accuracy) - 10)
                .attr("text-anchor", "middle")
                .text(d => `${Math.round(d.accuracy * 100)}%`)
                .style("fill", "white");

             


    }

})();
