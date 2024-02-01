const diagonal = document.querySelector('#diagonal');        
const submit = document.querySelector('#submit');        
const result = document.querySelector('#result');        
const screenRatios = document.querySelectorAll('input[name="ratio"]');
const units = document.querySelectorAll('input[name="unit"]');

const activate = document.querySelector('.activate');  
const sheet = document.querySelector('.piece-of-paper');
const checkUp = document.querySelector('#check-up');


const calcSize = (h, w, d, unit) =>{
    let C = d/Math.sqrt(Math.pow(h,2) + Math.pow(w,2));
    return [(w*C*unit).toFixed(2), (h*C*unit).toFixed(2)];
}

submit.addEventListener("click", () => {
    let selectedSize, unit, size = ["", ""];
    for (const radioButton of screenRatios) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            console.log(selectedSize);
            break;
        }
    }
    for (const chosenUnit of units) {
        if (chosenUnit.checked) {
            console.log(chosenUnit.value)
            if(chosenUnit.value == "cm"){
                unit = 2.5
            }else{
                unit = 1;
            }
            break;
        }
    }
    if(selectedSize == "16-9"){
        size = calcSize(16, 9, diagonal.value, unit);
    }   
    if(selectedSize == "4-3"){
        size = calcSize(4, 3, diagonal.value, unit);
    }
    result.innerHTML = `Wys: ${size[0]}, Szer: ${size[1]}`;
})

activate.addEventListener('click', () => {
    checkUp.classList.toggle('hidden');
    sheet.classList.toggle('hidden');
})

