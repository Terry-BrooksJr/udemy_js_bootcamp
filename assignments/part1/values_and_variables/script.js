var country = 'United State of America';
var continent = 'North America';
var population = 329500000;

console.log(`The Country is: ${country}`);
console.log(`The Continent is: ${continent}`);
console.log(`The Population is: ${population}`);


function updateCountry(country){
    var element = document.getElementById('country');
    element.replace('TEST',country);
}
function updateContinent(continent) {
    var element = document.getElementById('continent');
    element.innerHTML(continent);
}
function updatePopulation(population) {
    var element = document.getElementById('population');
    element.innerHTML(population);
}