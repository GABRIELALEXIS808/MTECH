
/*
Name: [Your Name]
Title: Entropy Swarm
Concept: Exploring Digital Entropy. This sketch uses randomness and distance
to simulate "unstable" life. The closer the cursor gets, the more
chaotic the particles become, representing the uncertainty of observation.
Instructions: Move the mouse to attract the swarm. Click to "reset" the entropy.
*/

let posX, posY;
let r, g, b;
let particleSize;
let chaosFactor = 5;

function setup() {
createCanvas(windowWidth, windowHeight);
// Initialize variables
posX = width / 2;
posY = height / 2;
noStroke();
}

function draw() {
// Use a low alpha background to create "trails" (uncertain paths)
background(10, 10, 25, 20);

// Calculate distance between mouse and the particle center
let d = dist(mouseX, mouseY, posX, posY);

// --- CONDITIONAL LOGIC ---
if (d < 50) {
// If very close: High Chaos (Agitation)
r = random(200, 255);
g = random(50, 100);
b = random(50);
particleSize = random(30, 60);
chaosFactor = 15;
}
else if (d >= 50 && d < 200) {
// If mid-range: Transition (Uncertainty)
r = random(100, 200);
g = random(100, 200);
b = 255;
particleSize = random(10, 30);
chaosFactor = 5;
}
else {
// If far away: Decay (Entropy)
r = 100;
g = 100;
b = 100;
particleSize = random(2, 8);
chaosFactor = 1;
}

// --- RANDOMNESS & INPUT ---
// The particles "ease" toward the mouse but with random jitter
posX = lerp(posX, mouseX, 0.05) + random(-chaosFactor, chaosFactor);
posY = lerp(posY, mouseY, 0.05) + random(-chaosFactor, chaosFactor);

// Draw the central "nucleus"
fill(r, g, b);
ellipse(posX, posY, particleSize);

// Draw satellite particles to increase the sense of a "swarm"
for (let i = 0; i < 5; i++) {
fill(r, g, b, 150);
ellipse(posX + random(-50, 50), posY + random(-50, 50), particleSize / 2);
}
}

function mousePressed() {
// Resetting the canvas with a random background flash
background(random(255), 0, 0);
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}




