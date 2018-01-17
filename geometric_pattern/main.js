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
    var isShifted = false;
    
    var y = height;
    while (y >= 0) {
        
    var x;
    
    if (isShifted) {
        x = circleRadius
    } else {
        x = 0
    }
    
    while (x <= width) {
        eclipse(x, y, circleDiameter, circleDiameter);
        x = x + circleDiameter;
    }
    
    y = y - circleDiameter;
    isShifted = !isShifted;        
    }
}

function createCanvas() {
}

function eclipse() {
}
