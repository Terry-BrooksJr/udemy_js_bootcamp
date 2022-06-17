const continent = 'North America';
const country = 'United States of America';
const population = 329000000;
id = $(this).attr('id');

function change_html() {

    console.log(id);
    console.log(value);
    element.innerText(value);
}
document.getElementById(id).addEventListener("click", change_html());