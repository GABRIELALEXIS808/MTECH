
// Name: [Gabe]
// Title: The Shaking Color Square
// Concept: Using mouse position to increase visual chaos/uncertainty.
// Instructions: Move mouse to change shake; press SPACE for new color; click for size.

let boxSize = 50;
let shake = 2; // Declared variable for movement
let rectColor = 255; // Declared variable for color

function setup() {
createCanvas(1000, 1000);
}

function draw() {
background(220);

// --- REQUIREMENT: if, else if, AND else ---
// This changes how much the box shakes based on mouse height (mouseY)
if (mouseY < 100) {
shake = 2; // Calm/Steady
} else if (mouseY < 300) {
shake = 10; // Shaky
} else {
shake = 30; // Extreme Chaos!
}

// --- REQUIREMENT: Use of random() ---
// We use the 'shake' variable from the IF statement above
let x = mouseX + random(-shake, shake);
let y = mouseY + random(-shake, shake);

fill(rectColor);
rectMode(CENTER); // Draws the square from the middle of the mouse
rect(x, y, boxSize, boxSize);
}

// --- REQUIREMENT: Keyboard Input (Space bar) ---
function keyPressed() {
if (key === ' ') {
rectColor = color(random(255), random(255), random(255));
}
}

// --- REQUIREMENT: Mouse Input ---
function mousePressed() {
boxSize = random(20, 100);
}



