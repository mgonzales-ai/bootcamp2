//Functions & Geometry
//1.-Create a named function (with the basic syntax) to calculate the area of a circle 
// based on its radius as a parameter.
//2.-Create an anonymous (non-arrow) function to calculate the perimeter of a rectangle based 
//on its length and height as parameters. Assign this anonymous function to a variable.
//3.-Define an arrow function to calculate the volume of a cube based on the length of its sides as a parameter. Assign this arrow function to a variable.
//4.-Print the result of a call to each of these functions.
function circleArea(r: number): number {
    return Math.PI * r * r;
}

const rectanglePerimeter = function(length: number, height: number): number {
    return (2 * length) + (2 * height);
}

const cubeVolume = (length: number): number => length * length * length;

console.log(`El área del círculo con radio 3 = ${circleArea(3)}`);
console.log(`El perímetro del rectángulo con lado 4 y altura 5 = ${rectanglePerimeter(4, 5)}`);
console.log(`El volúmen de un cubo de lado 5 es ${cubeVolume(5)}`);
