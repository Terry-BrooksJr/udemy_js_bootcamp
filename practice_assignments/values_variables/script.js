const continent = 'North America';
const country = 'United States of America';
const population = 329000000;
// const element = $(this).attr('id');
// trigger = $(this).attr('id');

function showAndHideContinent() {
    var element = document.getElementById('continent');
    if (elemen.value != continent || null) {
        element.innerHTML(continent);
        console.log('Continent has been Updated');
    }
    else {
        element.remove();
        console.log("Continent has been removed");
    }
}
// ///
// function change_html(trigger) {
//     var element;
//     var value;
//     switch (trigger) {
//         case 'continent_trigger':
//             element = document.getElementById('continent'); z
//             value = continent;
//             return element, value;
//         case 'country_trigger':
//             element = document.getElementById('country');
//             value = country;
//             return element, value;
//         case 'population_trigger':
//             element = document.getElementById('population');
//             value = population;
//             return element, value;

//     }
//     // scoped_const element = document.getElementById($(this));
//     // scoped_const element.innerText(value);
// }
