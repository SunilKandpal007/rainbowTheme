// defining const variable for navbar-section-heading

const myNav = document.getElementById("myNav");
const section1 = document.getElementById('mySection');
const subHeading = document.getElementById("heading2");

//function for red-color button
function colorRed(){
    document.body.style.background = "red";
    myNav.style.background = "linear-gradient(90deg, rgba(238,10,10,1) 0%, rgba(199,4,27,1) 35%, rgba(255,59,0,1) 100%)";
    section1.style.color = "white";
    subHeading.style.color = "black";
}

//function for red-color button
function colorOrange(){
    document.body.style.background = "orange";
    myNav.style.background = "linear-gradient(90deg, rgba(252,150,5,1) 0%, rgba(249,182,23,1) 50%, rgba(231,181,106,1) 100%)";
    section1.style.color = "white";
    subHeading.style.color = "red";
}

function colorYellow(){
    document.body.style.background = "yellow";
    myNav.style.background = "linear-gradient(90deg, rgba(251,255,79,1) 0%, rgba(228,252,58,1) 50%, rgba(196,200,23,1) 100%)";
    section1.style.color = "black";
    subHeading.style.color = "blue";
}

function colorGreen(){
    document.body.style.background = "green";
    myNav.style.background = "linear-gradient(90deg, rgba(24,190,4,1) 0%, rgba(121,229,9,1) 50%, rgba(173,255,12,1) 100%)";
    section1.style.color = "white";
    subHeading.style.color = "violet";
}

function colorBlue(){
    document.body.style.background = "blue";
    myNav.style.background = "linear-gradient(90deg, rgba(23,159,225,1) 0%, rgba(79,115,219,1) 35%, rgba(0,181,255,1) 100%)";
    section1.style.color = "white";
    subHeading.style.color = "black";
}

function colorIndigo(){
    document.body.style.backgroundColor = "indigo";
    myNav.style.background = "linear-gradient(90deg, rgba(23,17,125,1) 0%, rgba(9,9,121,1) 35%, rgba(8,170,203,1) 100%)";
    section1.style.color = "white";
    subHeading.style.color = "yellow";
}

function colorViolet(){
    document.body.style.background = "violet";
    myNav.style.background = "linear-gradient(90deg, rgba(215,10,159,1) 0%, rgba(219,79,181,1) 35%, rgba(255,0,186,1) 100%)";
    // myNav.style.background = "";
    section1.style.color = "black";
    subHeading.style.color = "cyan"; 
}