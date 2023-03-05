/*

Create 5 flight objects: 
Airline 
Number 
Origin
Destination 
Departure Time 
Arrival Time 
Arrival Gate 

Method to return the flight duration (gate to gate)
*/

let flight1 = {
    'number': "ASA1077", 
    'aircraft': "A319",
    'origin': "Washington Dulles Intl (KIAD)", 
    'destination': "San Francisco Intl (KSFO)", 
    'departure time': new Date('March 20, 2023 07:32:00'),  
    'arrival time': new Date('March 20, 2023 10:10:00'),
    'arrival gate': "F",
    'flight_duration': function() {
        return this["arrival time"].getTime() - this["departure time"].getTime(); 
    }
}; 

let flight2 = { 
    'number': "ASA1088", 
    'aircraft': "A320",
    'origin': "San Francisco Intl (KSF)", 
    'destination': "Washington Dulles Intl (KIAD)", 
    'departure time': new Date('March 20, 2023 03:58:00'),  
    'arrival time': new Date('March 20, 2023 11:28:00'),
    'arrival gate': "F",
    'flight_duration': function() {
        return this["arrival time"].getTime() - this["departure time"].getTime(); 
}
}; 

let flight3 = {
    'number': "ASA1097", 
    'aircraft': "A320",
    'origin': "Washington Dulles Intl (KIAD)", 
    'destination': "Los Angeles Intl (KLAX)", 
    'departure time': new Date('March 20, 2023 05:06:00'),  
    'arrival time': new Date('March 20, 2023 07:24:00'),
    'arrival gate': "F",
    'flight_duration': function() {
        return this["arrival time"].getTime() - this["departure time"].getTime(); 
}
}; 

let flight4 = {
    'number': "ASA11", 
    'aircraft': "B739",
    'origin': "Newark Liberty Intl (KEWR)", 
    'destination': "Seattle-Tacoma Intl (KSEA)", 
    'departure time': new Date('March 20, 2023 05:00:00'),  
    'arrival time': new Date('March 20, 2023 07:27:00'),
    'arrival gate': "F",
    'flight_duration': function() {
        return this["arrival time"].getTime() - this["departure time"].getTime(); 
}
}; 

let flight5 = {
    'number': "ASA1113", 
    'aircraft': "A320",
    'origin': "Will Rogers World (KOKC)", 
    'destination': "Seattle-Tacoma Intl (KSEA)", 
    'departure time': new Date('March 20, 2023 05:40:00'),  
    'arrival time': new Date('March 20, 2023 07:11:00'),
    'arrival gate': "F",
    'flight_duration': function() {
        return this["arrival time"].getTime() - this["departure time"].getTime(); 
}
}; 

let list = [
    flight1, flight2, flight3, flight4, flight5
]; 

for (var i = 0; i < list.length; i++){
    var flight = list[i]; 
    if (i == 0){
        document.getElementById("flight1_number").innerHTML = flight.number; 
        document.getElementById("flight1_airline").innerHTML = flight.aircraft; 
        document.getElementById("flight1_origin").innerHTML = flight.origin; 
        document.getElementById("flight1_destination").innerHTML = flight.destination; 
        document.getElementById("flight1_departure_time").innerHTML = flight["departure time"]; 
        document.getElementById("flight1_arrival_time").innerHTML = flight["arrival time"]; 
        document.getElementById("flight1_arrival_gate").innerHTML = flight["arrival gate"]; 
        document.getElementById("flight1_duration").innerHTML = flight.flight_duration() + " milliseconds"; 
    } else if (i == 1){
        document.getElementById("flight2_number").innerHTML = flight.number; 
        document.getElementById("flight2_airline").innerHTML = flight.aircraft; 
        document.getElementById("flight2_origin").innerHTML = flight.origin; 
        document.getElementById("flight2_destination").innerHTML = flight.destination; 
        document.getElementById("flight2_departure_time").innerHTML = flight["departure time"]; 
        document.getElementById("flight2_arrival_time").innerHTML = flight["arrival time"]; 
        document.getElementById("flight2_arrival_gate").innerHTML = flight["arrival gate"]; 
        document.getElementById("flight2_duration").innerHTML = flight.flight_duration() + " milliseconds"; 
    } else if (i == 2){
        document.getElementById("flight3_number").innerHTML = flight.number; 
        document.getElementById("flight3_airline").innerHTML = flight.aircraft; 
        document.getElementById("flight3_origin").innerHTML = flight.origin; 
        document.getElementById("flight3_destination").innerHTML = flight.destination; 
        document.getElementById("flight3_departure_time").innerHTML = flight["departure time"]; 
        document.getElementById("flight3_arrival_time").innerHTML = flight["arrival time"]; 
        document.getElementById("flight3_arrival_gate").innerHTML = flight["arrival gate"]; 
        document.getElementById("flight3_duration").innerHTML = flight.flight_duration() + " milliseconds"; 
    } else if (i == 3){
        document.getElementById("flight4_number").innerHTML = flight.number; 
        document.getElementById("flight4_airline").innerHTML = flight.aircraft; 
        document.getElementById("flight4_origin").innerHTML = flight.origin; 
        document.getElementById("flight4_destination").innerHTML = flight.destination; 
        document.getElementById("flight4_departure_time").innerHTML = flight["departure time"]; 
        document.getElementById("flight4_arrival_time").innerHTML = flight["arrival time"]; 
        document.getElementById("flight4_arrival_gate").innerHTML = flight["arrival gate"]; 
        document.getElementById("flight4_duration").innerHTML = flight.flight_duration() + " milliseconds"; 
    } else if (i == 4){
        document.getElementById("flight5_number").innerHTML = flight.number; 
        document.getElementById("flight5_airline").innerHTML = flight.aircraft; 
        document.getElementById("flight5_origin").innerHTML = flight.origin; 
        document.getElementById("flight5_destination").innerHTML = flight.destination; 
        document.getElementById("flight5_departure_time").innerHTML = flight["departure time"]; 
        document.getElementById("flight5_arrival_time").innerHTML = flight["arrival time"]; 
        document.getElementById("flight5_arrival_gate").innerHTML = flight["arrival gate"]; 
        document.getElementById("flight5_duration").innerHTML = flight.flight_duration() + " milliseconds"; 
    }
}