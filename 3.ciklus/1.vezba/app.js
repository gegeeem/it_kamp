// getElementById
//getElemntsByClassName
// document.querySelector()
// getElementsByTagName
// querySelectorAll
//const glavniDiv = document.getElementById('pocetak');
const getquery = document.querySelector('#pocetak');
//console.log(getquery);
const paragraf = document.createElement('p');
const paragraf2 = document.createElement('p');
paragraf2.textContent = 'Ovo je <p2> dodat iz JS-a';
paragraf.textContent = 'Ovo je <p> dodat iz JS-a';

getquery.classList.add('kocka');//dodavanje klase
paragraf2.classList.add('para2');
getquery.appendChild(paragraf);
getquery.appendChild(paragraf2);


const dugme = document.createElement('button');
dugme.textContent ='dugme';
getquery.appendChild(dugme);
const onButtonClick = ()=>{
    paragraf.classList.toggle('para2');
    paragraf2.classList.toggle('nevidljivo');// classList dodaje novu klasu na postojecu, dok className menja  celu klasu koju ima element  i dodaje novu
};
dugme.addEventListener('click', onButtonClick)//onButtonClick samo bez () tj. onButtonClick(), jer je onda odmah poziva



const dodajNaslov =`<h1> Naslov </h1>`;
// getquery.innerHTML += dodajNaslov; // ne radi nakon ovoga addEventListener a kad se stavi na pocetku kad je kreiranelement hoce

const opetIstiParagraf = document.createElement()