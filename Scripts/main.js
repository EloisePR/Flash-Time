function menushow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }
    else {
        menuMobile.classList.add('open');
    }
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}

/* parte fotos*/

let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.container .container-image .image');

searchBox.oninput = () => {
    images.forEach(hide => hide.style.display = 'none');
    let value = searchBox.value;

    images.forEach(filter => {
        let title = filter.getAttribute('data-title');

        if(value == title){
            filter.style.display = "block";
        }

        if(searchBox.value == ''){
        filter.style.display = "block"
        }
    })
}
