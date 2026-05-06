
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


    // const runtime = new Runtime();
    // runtime.module(define, name => {
    // if (name === "chart") {
    //     return new Inspector(document.querySelector("#chart"));
    // }
    // });

    //d3 library map - wrapped to create multiple on the page
    function createMap(container, geoData, points){
        const width = 400;
        const height = 600;

        const svg = d3.select(container)
        .append("svg")
        .attr("width", width)
        .attr("height", height);
        svg.style("background", "#FFED4B");
        svg.style("border-radius", "19px");
        svg.style("padding", "15px");

        // projection 
        const projection = d3.geoMercator()
        projection.fitSize([width, height], geoData);

        const path = d3.geoPath(projection);
        
        // IMPORTANT: fit projection to data
        // projection.fitSize([width, height], data);

        //fill in map
        svg.selectAll("path")
        .data(geoData.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#018c40ff")
        .attr("stroke", "#fff")
        .attr("stroke-width", 0.5);

        //drawing circles for coords
        svg.selectAll("circle")
        .data(points)
        .enter()
        .append("circle")
        .attr("cx", d => projection(d.coords)[0])
        .attr("cy", d => projection(d.coords)[1])
        .attr("r", 5)
        .attr("fill", "#fb01b0")
        .attr("opacity", 0.8)


        .on("mouseover", function(event, d) {
            tooltip
            .style("opacity", 1)
            .html(d.name);
        })

        // move tooltip with mouse
        .on("mousemove", function(event) {
            tooltip
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY + 10) + "px");
        })

        //  hide on leave
        .on("mouseout", function() {
            tooltip.style("opacity", 0);
        });

    }
    
    //tooltip div
    const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("background", "rgba(0,0,0,0.8)")
    .style("color", "white")
    .style("padding", "6px 10px")
    .style("border-radius", "5px")
    .style("font-size", "12px")
    .style("pointer-events", "none")
    .style("opacity", 0);

    //load California counties & input data to selected map
    d3.json("https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/california-counties.geojson")
    .then(geoData => {



        //coords where flowers are found for chart 1
        const point1 = [
        { name: "Southern California Foothills", coords: [-117.74075102222841, 34.16678625599626] },
        { name: "Davis", coords: [-121.74987042497035, 38.53482925344174] },
        { name: "Orange County", coords: [-117.81244090941743, 33.713201054660075] },
        { name: "Riverside County", coords: [-115.98332506656875, 33.72258359018113] }
        ];

        const point2 = [
        { name: "San Francisco", coords: [-122.4194, 37.7749] },
        { name: "Modesto", coords: [-120.9153684515729, 37.67821566773345] },
        { name: "Carlsbad", coords: [-117.31757481747118, 33.12322232269355] },
        { name: "La Canada Flintridge", coords: [ -118.2097343327649, 34.2013799775156367] }
        ];

        const point3 = [
        { name: "Napa", coords: [-122.28564197996063, 38.2985875992858] },
        { name: "Carmel", coords: [-121.90747537476764, 36.46816406029773] },
        { name: "Mendocino", coords: [-123.79911482709724, 39.307592527403564] },
        { name: "San Francisco", coords: [-122.4194, 37.7749] }
        ];

        createMap("#chart1", geoData, point1);
        createMap("#chart2", geoData, point2);
        createMap("#chart3", geoData, point3);


    });

})();