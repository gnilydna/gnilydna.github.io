var NUM_CIRCLE = 12;
var circleDiameter;
var width = 480;
var height = 600;

function setup() {
    createCanvas(480,600);
    circleDiameter = width/*global NUM_CIRCLE*/;
}

function draw() {
    eclipse(0 ,height/2 ,circleDiameter ,circleDiameter);
    eclipse(circleDiameter, height/2, circleDiameter, circleDiameter);
    eclipse(2*circleDiameter, height/2, circleDiameter, circleDiameter);
    eclipse(3*circleDiameter, height/2, circleDiameter, circleDiameter);
    eclipse(4*circleDiameter, height/2, circleDiameter, circleDiameter);
    eclipse(5*circleDiameter, height/2, circleDiameter, circleDiameter);
    eclipse(6*circleDiameter, height/2, circleDiameter, circleDiameter);
    eclipse(7*circleDiameter, height/2, circleDiameter, circleDiameter);
    eclipse(8*circleDiameter, height/2, circleDiameter, circleDiameter);
    eclipse(9*circleDiameter, height/2, circleDiameter, circleDiameter);
    eclipse(10*circleDiameter, height/2, circleDiameter, circleDiameter);
    eclipse(11*circleDiameter, height/2, circleDiameter, circleDiameter);
    eclipse(12*circleDiameter, height/2, circleDiameter, circleDiameter);
}

function createCanvas() {
}

function eclipse() {
}

function draw() {
    var x = 0;
    while (x <= width) {
        eclipse(x, 0, circleDiameter, circleDiameter);
        x = x + circleDiameter;
    }
}