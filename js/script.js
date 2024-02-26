/*
    JavaScript
    Pratica W3D4
    Author: Gianluca Chiaravalloti
    data: 22.02.2024
    rev.: 1.0.0
*/

// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
const title = document.querySelector('h1')
console.log(title.innerText);
title.innerText = 'G&J Store Smartphones'


// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
const body = document.querySelector('body');
body.style.backgroundColor = '#10101010';


// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
const address_1 = document.getElementById('address_1');
const address_2 = document.getElementById('address_2');
console.log(address_1.textContent);
console.log(address_2.textContent);
address_1.textContent = 'Via Nuova Gallassia n. 201';
address_2.textContent = 'Sole (SS)';

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// funzione aggiunge una classe al tag link cambiandone il colore del testo a rosso
function toggleClass_1() {
    document.getElementById('addClass_1').classList.toggle('acceso');
}



// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// Funzione nascondi/visualizza img 1
function toggleImg_1() {
    const img = document.getElementById('toggleImg_1');
    const btn_toggle_1 = document.getElementById('btn_toggle_1');
    if (img.style.display === 'none') {
        btn_toggle_1.textContent = 'Nascondi Img';
        img.style.display = 'block';
    } else {
        btn_toggle_1.textContent = "Visualizza Img";
        img.style.display = 'none';
    }
};

// Funzione nascondi/visualizza img 2
function toggleImg_2() {
    const img = document.getElementById('toggleImg_2');
    const btn_toggle_2 = document.getElementById('btn_toggle_2');
    if (img.style.display === 'none') {
        btn_toggle_2.textContent = 'Nascondi Img';
        img.style.display = 'block';
    } else {
        btn_toggle_2.textContent = "Visualizza Img";
        img.style.display = 'none';
    }
};

// Funzione nascondi/visualizza img 3
function toggleImg_3() {
    const img = document.getElementById('toggleImg_3');
    const btn_toggle_3 = document.getElementById('btn_toggle_3');
    if (img.style.display === 'none') {
        btn_toggle_3.textContent = 'Nascondi Img';
        img.style.display = 'block';
    } else {
        btn_toggle_3.textContent = "Visualizza Img";
        img.style.display = 'none';
    }
};

// Funzione nascondivisualizza img 4
function toggleImg_4() {
    const img = document.getElementById('toggleImg_4');
    const btn_toggle_4 = document.getElementById('btn_toggle_4');
    if (img.style.display === 'none') {
        btn_toggle_4.textContent = 'Nascondi Img';
        img.style.display = 'block';
    } else {
        btn_toggle_4.textContent = "Visualizza Img";
        img.style.display = 'none';
    }
};

// Funzione nascondi/visualizza img 5
function toggleImg_5() {
    const img = document.getElementById('toggleImg_5');
    const btn_toggle_5 = document.getElementById('btn_toggle_5');
    if (img.style.display === 'none') {
        btn_toggle_5.textContent = 'Nascondi Img';
        img.style.display = 'block';
    } else {
        btn_toggle_5.textContent = "Visualizza Img";
        img.style.display = 'none';
    }
};




// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
// elenco puntatori
const pulsantePrice_1 = document.getElementById('btn_1');
const pulsantePrice_2 = document.getElementById('btn_2');
const pulsantePrice_3 = document.getElementById('btn_3');
const pulsantePrice_4 = document.getElementById('btn_4');
const pulsantePrice_5 = document.getElementById('btn_5');
const price_1 = document.getElementById('price_1');
const price_2 = document.getElementById('price_2');
const price_3 = document.getElementById('price_3');
const price_4 = document.getElementById('price_4');
const price_5 = document.getElementById('price_5');

// event listeners

// pulsante price 1
pulsantePrice_1.addEventListener("click", function() {
    cambiaColorePrice('rosso');
});

// pulsante price 2
pulsantePrice_2.addEventListener("click", function() {
    cambiaColorePrice('verde');
});

// pulsante price 3
pulsantePrice_3.addEventListener("click", function() {
    cambiaColorePrice('blu');
});

// pulsante price 4
pulsantePrice_4.addEventListener("click", function() {
    cambiaColorePrice('magenta');
});

// pulsante price 5
pulsantePrice_5.addEventListener("click", function() {
    cambiaColorePrice('arancione');
});

// funzione cambia colore del prezzo
function cambiaColorePrice(colore) {
    switch (colore) {
        case "rosso":
            price_1.style.color = 'red';
            break;
        case "verde":
            price_2.style.color = 'green';
            break;
        case "blu":
            price_3.style.color = 'blue';
            break;
        case "magenta":
            price_4.style.color = 'magenta';
            break;
        case "arancione":
            price_5.style.color = 'orange';
            break;         
        default:
            price_1.style.color = '#000';
            price_2.style.color = '#000';
            price_3.style.color = '#000';
            price_4.style.color = '#000';
            price_5.style.color = '#000';
            break;
    }
};









