
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
    // Parse.initialize("WTc91DlFAdHqyxrm72vH2aPUEmQbSzVUgoUbZOmG", "OBlMr84PwI7pUnqtHwCuHLVZanCM6rC3KCBasYNp"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    // Parse.serverURL = "https://parseapi.back4app.com/";


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
        
            console.log('you are dummy dumb');
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
            
            
        
        // treeChart();
    })

    //draw tree function
    function treeChart(){

        //specify chart dimensions
        const width = 900;
        const height = 300;

        const marginTop = 30;
        const marginRight = 20;
        const marginBottom = 80;
        const marginLeft = 60;

        //rows are seperated by dx pixels, columns by dy pixels, names can be counter intuitive
        // dx is height and dy is width
        //bottom in the data domain. the width of a column is based on the tree's height
        console.log(q3Data);
        const root = d3.hierarchy(q3Data);
        const dx = 30;
        const dy = (width - marginRight - marginLeft) / (1 + root.height);

        //define tree layout and shape for links
        const tree = d3.tree().nodeSize([dx, dy]);
        const diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x);

        //create SVG container, a layer for the links and a layer for the nodes
        d3.select("#treechart").html("")
       
        const svg = d3.select("#treechart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-marginLeft, -marginTop, width, height])
        .attr("style", "max-width: 100%; height: auto; font: 10px Roboto sans-serif; user-select: none;");

        const gLink = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#fffcfcff")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5);

        const gNode = svg.append("g")
        .attr("cursor", "pointer")
        .attr("pointer-events", "all");

        function update(event, source){
            const duration = event?.altKey ? 2500 : 250; //hold down alt key to slow down transition
            
            //compute layout first
            tree(root);

            //then get positioned nodes/links
            const nodes = root.descendants().reverse();
            const links = root.links();

            let left = root;
            let right = root;
            root.eachBefore(node => {
                if(node.x < left.x) left = node;
                if(node.x > right.x) right = node;
            });

            const treeheight = right.x - left.x + marginTop + marginBottom;

            const transition = svg.transition()
            .duration(duration)
            .attr("height", treeheight)
            .attr("viewBox", [-marginLeft, left.x - marginTop, width, treeheight])
            .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));

            //update the nodes
            const node = gNode.selectAll("g")
            .data(nodes, d => d.id);

            //enter new nodes at the parent's previous position
            const nodeEnter = node.enter().append("g")
                .attr("transform", d => `translate(${source.y0},${source.x0})`)
                .attr("fill-opacity", 0)
                .attr("stroke-opacity", 0)
                .on("click", (event, d) => {
                d.children = d.children ? null : d._children;
                update(event, d);
            });

            nodeEnter.append("circle")
                .attr("r", 2.5)
                .attr("fill", d => d._children ? "#555" : "#999")
                .attr("stroke-width", 10);

            nodeEnter.append("text")
                .attr("dy", "0.31em")
                .attr("x", d => d._children ? -6 : 6)
                .attr("text-anchor", d => d._children ? "end" : "start")
                .text(d => d.data.value ? `${d.data.name}: ${d.data.value}` : d.data.name)
                .attr("stroke-linejoin", "round")
                .attr("stroke-width", 3)
                .attr("stroke", "white")
                .attr("paint-order", "stroke");

            // Transition nodes to their new position.
            const nodeUpdate = node.merge(nodeEnter).transition(transition)
                .attr("transform", d => `translate(${d.y},${d.x})`)
                .attr("fill-opacity", 1)
                .attr("stroke-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            const nodeExit = node.exit().transition(transition).remove()
                .attr("transform", d => `translate(${source.y},${source.x})`)
                .attr("fill-opacity", 0)
                .attr("stroke-opacity", 0);

            // Update the links…
            const link = gLink.selectAll("path")
            .data(links, d => d.target.id);

            // Enter any new links at the parent's previous position.
            const linkEnter = link.enter().append("path")
                .attr("d", d => {
                const o = {x: source.x0, y: source.y0};
                return diagonal({source: o, target: o});
                });

            // Transition links to their new position.
            link.merge(linkEnter).transition(transition)
                .attr("d", diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition(transition).remove()
                .attr("d", d => {
                const o = {x: source.x, y: source.y};
                return diagonal({source: o, target: o});
                });

            // Stash the old positions for transition.
            root.eachBefore(d => {
            d.x0 = d.x;
            d.y0 = d.y;
            });
        }

        // Do the first update to the initial configuration of the tree — where a number of nodes
        // are open (arbitrarily selected as the root, plus nodes with 7 letters).
        root.x0 = dy / 2;
        root.y0 = 0;
        /*root.descendants().forEach((d, i) => {
            d.id = i;
            d._children = d.children;
            if (d.depth && d.data.name.length !== 7) d.children = null;
        });*/
        root.descendants().forEach((d, i) => {
            d.id = i;
            d._children = d.children;
        });

        update(null, root);

    }

    //Q4 Form
    const form4 = document.querySelector('#q4form');

    form4.addEventListener('submit', function(event){
        event.preventDefault();
        

        form4.className = "hidden";

        const output4 = document.querySelector('#q4-answer-output');
            if (output4){
                output4.innerHTML = "<p>Displayment of a line graph that shows the boom of AI medical devices.</p><p>From one in 1995, 6 in 2015, and to 223 by 2023.</p>";
            }
            
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

    getData();
})();
