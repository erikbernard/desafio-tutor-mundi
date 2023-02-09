import { customAlert } from './modal.js';

const buttonPular = document.getElementById("pular");
const buttonConfirmar = document.getElementById("confirmar");
const listStar = document.querySelectorAll("ul li img");
let rating = 0;

listStar.forEach((star, index1) => {
    star.addEventListener("click", () => {
        listStar.forEach((star, index2) => {
            if (index1 >= index2) {
                star.classList.remove("not_selected");
                buttonConfirmar.removeAttribute("disabled");
                if(index1 == index2) rating = index2;
            }
            else {
                star.classList.add("not_selected");
            }
        })
    })
});
buttonPular.addEventListener('click', (e) => {
    console.log(form);

});
buttonConfirmar.addEventListener('click', (e) => {
    customAlert.alert();
    setTimeout(() => {
        customAlert.ok();
        document.location.reload(true);
    }, 2000);
});

