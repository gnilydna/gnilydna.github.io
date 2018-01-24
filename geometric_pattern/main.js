var NUM_CIRCLE = 12;

var circleDiameter;
var circleRadius;

var width = 480;
var height = 600;

function setup() {
    createCanvas(480, 600);
    
    circleDiameter = width/NUM_CIRCLE;
    circleRadius = circleDiameter/2;
}

function draw() {
    var y = 0;
    while (y <= 0) {
    
    var x = 0;
    while (x <= width) {
        ellipse(x, y, circleDiameter, circleDiameter);
        x = x +circleDiameter;
        }
        y = y + circleDiameter;
    }
}

function createCanvas() {
}

function eclipse() {
    
}
