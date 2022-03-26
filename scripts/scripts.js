'use strict';


//variables
let sumClassic=0;
let sumCheddar=0;
let sumDouble=0;
let sumCrispy=0;
let sumTotal=0;

let salesClassic=0.00;
let salesCheddar=0.00;
let salesDouble=0.00;
let salesCrispy=0.00;
let salesTotal=0.00;

let classicPrice=13.90;
let cheddarPrice=15.90;
let doublePrice=18.90;
let crispyPrice=17.90;

let btnSell = document.getElementById('sell');
let btnReturn = document.getElementById('undo');
let btnExport = document.getElementById('spreadsheet');
let btnClean = document.getElementById('clean');


//events
btnSell.addEventListener('click', sell, false);
btnReturn.addEventListener('click', undo, false);
btnExport.addEventListener('click', spreadsheet, false);
btnClean.addEventListener('click', clean,false);

//functions
    function sell(e){
        if(document.getElementById('classic').checked){

            sumClassic++;
            salesClassic += classicPrice;
            document.getElementById('resultCountClassic').innerHTML = sumClassic;
            document.getElementById('priceClassic').innerHTML = salesClassic.toFixed(2);
            Total(1);
        } else if(document.getElementById('cheddar').checked){
            sumCheddar++;
            salesCheddar += cheddarPrice;
            document.getElementById('resultCountCheddar').innerHTML = sumCheddar;
            document.getElementById('priceCheddar').innerHTML = salesCheddar.toFixed(2);
            Total(1);

        } else if(document.getElementById('double').checked){
            sumDouble++;
            salesDouble += doublePrice;
            document.getElementById('resultCountDouble').innerHTML = sumDouble;
            document.getElementById('priceDouble').innerHTML = salesDouble.toFixed(2);
            Total(1);

        } else if(document.getElementById('crispy').checked){
            sumCrispy++;
            salesCrispy += crispyPrice;
            document.getElementById('resultCountCrispy').innerHTML = sumCrispy;
            document.getElementById('priceCrispy').innerHTML = salesCrispy.toFixed(2);
            Total(1);
        }
    }
    // undo sales
    
    function undo(e){
        if(document.getElementById('classic').checked){
            sumClassic--;
            salesClassic -= classicPrice;
            if(sumClassic<0){
                sumClassic=0;
                salesClassic=0.00;
            }else{
                document.getElementById('resultCountClassic').innerHTML = sumClassic;
                document.getElementById('priceClassic').innerHTML = salesClassic.toFixed(2);
                Total(-1);
            }
        } else if(document.getElementById('cheddar').checked){
            sumCheddar--;
            salesCheddar -= cheddarPrice;
            if(sumCheddar<0){
                sumCheddar=0;
                salesCheddar=0.00;
            }else{
            document.getElementById('resultCountCheddar').innerHTML = sumCheddar;
            document.getElementById('priceCheddar').innerHTML = salesCheddar.toFixed(2);
            Total(-1);
            }
        } else if(document.getElementById('double').checked){
            sumDouble--;
            salesDouble -= doublePrice;
            if(sumDouble<0){
                sumDouble=0;
                salesDouble=0.00;
            }else{
            document.getElementById('resultCountDouble').innerHTML = sumDouble;
            document.getElementById('priceDouble').innerHTML = salesDouble.toFixed(2);
            Total(-1);
            }
        } else if(document.getElementById('crispy').checked){
            sumCrispy--;
            salesCrispy -= crispyPrice;
            if(sumCrispy<0){
                sumCrispy=0;
                salesCrispy=0.00;
            }else{
            document.getElementById('resultCountCrispy').innerHTML = sumCrispy;
            document.getElementById('priceCrispy').innerHTML = salesCrispy.toFixed(2);
            Total(-1);
            }
        }   
    }


    function Total(value){
        sumTotal += value;
        salesTotal = salesClassic + salesCheddar + salesDouble + salesCrispy;

        document.getElementById('resultCountTotal').innerHTML = sumTotal;
        document.getElementById('priceTotal').innerHTML = salesTotal.toFixed(2);
    }

    function clean(e){
    sumClassic=0;
    sumCheddar=0;
    sumDouble=0;
    sumCrispy=0;
    sumTotal=0;
    salesClassic=0.00;
    salesCheddar=0.00;
    salesDouble=0.00;
    salesCrispy=0.00;
    salesTotal=0.00;
    document.getElementById('resultCountClassic').innerHTML = sumClassic;
    document.getElementById('priceClassic').innerHTML = salesClassic.toFixed(2);
    document.getElementById('resultCountCheddar').innerHTML = sumCheddar;
    document.getElementById('priceCheddar').innerHTML = salesCheddar.toFixed(2);
    document.getElementById('resultCountDouble').innerHTML = sumDouble;
    document.getElementById('priceDouble').innerHTML = salesDouble.toFixed(2);
    document.getElementById('resultCountCrispy').innerHTML = sumCrispy;
    document.getElementById('priceCrispy').innerHTML = salesCrispy.toFixed(2);
    document.getElementById('resultCountTotal').innerHTML = sumTotal;
    document.getElementById('priceTotal').innerHTML = salesTotal.toFixed(2);
    }
    function spreadsheet(e){
        TableToExcel.convert(document.getElementById('table'));
    }