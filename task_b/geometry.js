function calcCircleGeometries(radius){
    var array = [calculateArea(radius), calculateCircumference(radius), calculateDiameter(radius)]; 
    document.write("Radius: " + radius + ", " + "Area: " + array[0] + ", " + "Circumference: " + array[1] + ", " + "Diameter: " + array[2]);  
}

function calculateArea(radius){
    var area = (Math.PI * (radius * radius)).toFixed(1); 
    return area; 
}


function calculateCircumference(radius){
    var circumference = (2 * Math.PI * radius).toFixed(1); 
    return circumference; 
}

function calculateDiameter(radius){
    var diameter = (2 * radius).toFixed(1); 
    return diameter; 
}

function printValues(){
document.write("Test 1: "); 
calcCircleGeometries(120); 
document.write("<br>");  
document.write("<br>"); 
document.write("Test 2: ")
calcCircleGeometries(110);
document.write("<br>"); 
document.write("<br>"); 
document.write("Test 3: "); 
calcCircleGeometries(350);
document.write("<br>");  
document.write("<br>"); 
}
printValues(); 