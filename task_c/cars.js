let carData = [
  ["Shelby", "Sedan", "Blue", 1963, "$902,000"], 
  ["Ford", "Sports Car", "White", 2017, "$453,750"], 
  ["McLaren", "Sports Car", "Black", 2019, "$1,150,000"],
  ["McLaren", "Sports Car", "Yellow", 2013, "$397,000"], 
  ["Pagani", "Sports Car", "White", 2009, "$1,800,000"]
]; 

for (var i = 0; i < carData.length; i++){
  var object = carData[i]; 
  if (i == 0){
    document.getElementById('car1make').innerHTML = object[0]; 
    document.getElementById('car1model').innerHTML = object[1]; 
    document.getElementById('car1color').innerHTML = object[2]; 
    document.getElementById('car1year').innerHTML = object[3]; 
    document.getElementById('car1price').innerHTML = object[4]; 
  } else if (i == 1) {
    document.getElementById('car2make').innerHTML = object[0]; 
    document.getElementById('car2model').innerHTML = object[1]; 
    document.getElementById('car2color').innerHTML = object[2]; 
    document.getElementById('car2year').innerHTML = object[3]; 
    document.getElementById('car2price').innerHTML = object[4]; 
  } else if (i == 2) {
    document.getElementById('car3make').innerHTML = object[0]; 
    document.getElementById('car3model').innerHTML = object[1]; 
    document.getElementById('car3color').innerHTML = object[2]; 
    document.getElementById('car3year').innerHTML = object[3]; 
    document.getElementById('car3price').innerHTML = object[4]; 
  } else if (i == 3) {
    document.getElementById('car4make').innerHTML = object[0]; 
    document.getElementById('car4model').innerHTML = object[1]; 
    document.getElementById('car4color').innerHTML = object[2]; 
    document.getElementById('car4year').innerHTML = object[3]; 
    document.getElementById('car4price').innerHTML = object[4]; 
  } else if (i == 4) {
    document.getElementById('car5make').innerHTML = object[0]; 
    document.getElementById('car5model').innerHTML = object[1]; 
    document.getElementById('car5color').innerHTML = object[2]; 
    document.getElementById('car5year').innerHTML = object[3]; 
    document.getElementById('car5price').innerHTML = object[4]; 
  }
}