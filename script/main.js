
const btn1 = document.getElementById('dodaj');
const btn2 = document.getElementById('usun');
let tekst = document.getElementById('tekst');

function addTxt() {
    tekst.textContent = 'Przykładowy tekst,Przykładowy tekst,Przykładowy tekst.';
}
function remTxt() {
    tekst.textContent = '';
}

btn1.addEventListener('click', addTxt);
btn2.addEventListener('click', remTxt);

//Wersja numer dwa .
/*
btn1.addEventListener('click', function () {
    tekst.textContent = 'Przykładowy tekst 2,Przykładowy tekst 2,Przykładowy tekst 2.';
    
})
btn2.addEventListener('click', function () {
    tekst.textContent = '';

})*/
//Wersja nr 3
/*
document.getElementById('dodaj').addEventListener('click', function () {
    document.getElementById('tekst').textContent = "Przykładowy tekst nr 3";
})
document.getElementById('usun').addEventListener('click', function () {
    document.getElementById('tekst').textContent = "";
})
*/