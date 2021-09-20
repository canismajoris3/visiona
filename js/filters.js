const formFilters = document.querySelector('#formFilters');

formFilters.addEventListener('submit', function(e){

    e.preventDefault();

    const inputSatelite = e.target.querySelector('#select-satelite');
    const inputPeriodo = e.target.querySelector('#select-periodo');
    const inputNuvens = e.target.querySelector('#select-nuvens');
    const inputArea = e.target.querySelector('#select-area');


    const satelite = String(inputSatelite.value);
    const periodo = String(inputPeriodo.value);
    const nuves = String(inputNuvens.value);
    const area = String(inputArea.value);

    console.log(`Satlite: ${satelite}, periodo: ${periodo}, nuvens: ${nuves}, area: ${area}`)


    if(satelite == 'LANDSAT8'){
        setimg(1);
    }else if(satelite == 'SENTINEL2'){
        setimg(2);
    }else if(satelite == 'CBERS4'){
        setimg(3);
    }else if(satelite == 'CBERS4A'){
        setimg(4);
    }

    

});

function criaImagem(){
    const img = document.createElement('img');

    img.classList.add('imagem');
    return img;
}

function setimg(satelite){
    const resultado = document.querySelector('#container-resultados');

    resultado.innerHTML = '';

    const img = criaImagem();


    if(satelite == 1){
        img.src = '../img/img1.png';
    }else if(satelite == 2){
        img.src = '../img/img2.png';
    }else if(satelite == 3){
        img.src = '../img/img3.png';
    }else if(satelite == 4){
        img.src = '../img/img4.png';
    }
    resultado.appendChild(img);
}