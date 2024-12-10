// Prendi gli elementi dal HTML e CSS
const lampOn = document.getElementById("lamp-on");  
const lampOff = document.getElementById("lamp-off");
const accendi = document.getElementById("accendi");
const spegni = document.getElementById("spegni");

// Funzione per accendere la lampadina nascondendo quella spenta
function lampadinaOn() {
    lampOn.style.display = "block"; 
    lampOff.style.display = "none";  
}

// Funzione per spegnere la lampadina nascondendo quella accesa
function lampadinaOff() {
    lampOff.style.display = "block"; 
    lampOn.style.display = "none";  
}

// Aggiungi gli eventi ai bottoni
accendi.addEventListener("click", lampadinaOn);
spegni.addEventListener("click", lampadinaOff);
