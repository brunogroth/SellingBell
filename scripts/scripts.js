'use strict';

//variables
let sumClassic=0;
let sumCheddar=0;
let sumDouble=0;
let sumCrispy=0;

let salesClassic=0.00;
let salesCheddar=0.00;
let salesDouble=0.00;
let salesCrispy=0.00;

let btnSell = document.getElementById('sell');
let btnReturn = document.getElementById('return');
let btnExport = document.getElementById('export');

//events
btnSell.addEventListener('click', sell, false);
// btnReturn.addEventListener('click', undo, false);
// btnExport.addEventListener('click', export, false);

//functions
function sell(e){
    if(document.getElementById('classic').checked){
        sumClassic++;
        salesClassic += 12.90;
        document.getElementById('resultCountClassic').innerHTML = sumClassic;
        document.getElementById('priceClassic').innerHTML = salesClassic.toFixed(2);

    } else if(document.getElementById('cheddar').checked){
        sumCheddar++;
        salesCheddar += 15.90;
        document.getElementById('resultCountCheddar').innerHTML = sumCheddar;
        document.getElementById('priceCheddar').innerHTML = salesCheddar.toFixed(2);

    } else if(document.getElementById('double').checked){
        sumDouble++;
        salesDouble += 18.90;
        document.getElementById('resultCountDouble').innerHTML = sumDouble;
        document.getElementById('priceDouble').innerHTML = salesDouble.toFixed(2);

    } else if(document.getElementById('crispy').checked){
        sumCrispy++;
        salesCrispy += 17.90;
        document.getElementById('resultCountCrispy').innerHTML = sumCrispy;
        document.getElementById('priceCrispy').innerHTML = salesCrispy.toFixed(2);
    }

}