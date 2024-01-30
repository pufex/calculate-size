const diagonal = document.querySelector('#diagonal');        
const submit = document.querySelector('#submit');        
const result = document.querySelector('#result');        
const radioButtons = document.querySelectorAll('input[name="ratio"]');

const calcSize = (h, w, d) =>{
    let C = d/Math.sqrt(Math.pow(h,2) + Math.pow(w,2));
    return [(w*C).toFixed(2), (h*C).toFixed(2)];
}

submit.addEventListener("click", () => {
    let selectedSize, size = ["", ""];
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            console.log(selectedSize);
            break;
        }
    }
    if(selectedSize == "16-9"){
        size = calcSize(16, 9, diagonal.value);
    }   
    if(selectedSize == "4-3"){
        size = calcSize(4, 3, diagonal.value);
    }
    result.innerHTML = `Wys: ${size[0]}, Szer: ${size[1]}`;
})


