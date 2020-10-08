// main.js

const p = new Password();
let options = document.querySelector('#options');
const size = document.querySelector('#size');
const slider = document.querySelector('#slider');
const displayer = document.querySelector('#displayer');
displayer.style.cursor = "pointer";
displayer.style.background = "#F0F0F0";


size.addEventListener('input',(e) => {
   slider.value = size.value;
   refresh();
});

slider.addEventListener('input', () =>{
    refresh();
    size.value = slider.value;
});

function refresh(){
    displayer.textContent = p.generate(size.value);
    rangaFromList();
}
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
displayer.addEventListener('click', function(e){
    console.log('al');
  
    var tmp_input = document.createElement('input');
    tmp_input.value = this.textContent;
    tmp_input.select();
    tmp_input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    displayer.value = tmp_input.value;
    console.log(tmp_input.value);
});

options.addEventListener('click', (e) => {
    console.log(e.target.type);
    
    if(e.target.type && e.target.type === "checkbox"){
        if(e.target.checked){
            p.include(e.target.value);
        }else{
            p.exclude(e.target.value);
        }
        refresh();
    }
})

refresh();
