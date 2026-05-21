(function() {
    'use strict';
    console.log('Reading JS');

    const makeUpperCase = astring => astring.toUpperCase() 
 
    console.log(makeUpperCase("here is a string"));


    // const fullName = (fname, lname) => `${fname} ${lname}`;
    // console.log(fullName('Jose', 'Gonzalez'));

    //no parameters & more than one line in the function or not returing a variable
    const fullName = () => {
        const fname = "Maria";
        const lname = "Sanchez";
        return `${fname} ${lname}`;
    }
    console.log(fullName());

    const fruit = ["banana", "apple", "lemon", "kiwi"];
    const upperFruit = [];

    fruit.forEach(thisFruit => {
        upperFruit.push(thisFruit.toUpperCase());
    });

    console.log(upperFruit);

    const employee = ( fname, lname, jobTitle ) => {
        this.fname = fname;
        this.lname = lname;
        this.position = jobTitle;
        this.fullName = () => `${fname} ${lname}`;
    }

    const id1234 = new employee('Bob', 'Smith', 'Mechanic');

    console.log( id1234.fname );
    console.log( id1234.fullName() );






})();