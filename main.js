// main.js

const p = new Password();
p.exclude(Password.symbols);
let options = document.querySelector('#options');
const size = document.querySelector('#size');
const slider = document.querySelector('#slider');

size.addEventListener('input',(e) => {
   slider.value = size.value;
});
slider.addEventListener('input', () => size.value = slider.value);
function rangaFromList(){
    options.innerHTML = '';
    p.data.forEach(obj => {
        
        var check = (obj.range & p.range) ? "checked" : "";
        options.innerHTML += `
            <li class="list-group-item">
                ${obj.name}
                (${obj.chars})
                <input type="checkbox" value="${obj.range}" ${check}>
            </li>
        `;
    });
}
rangaFromList();

