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

    //this function is for selling products. 
    //it's responsable for add +1 in sells counter and add the price of the product in the table, showing amount.
    //it will also add the value in Total just sinalyzing +1 in Total Function and updating variable values.
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

    //this function is for undo selled products. 
    //it's responsable for remove '-1' in sells counter of the product and remove the price of the product in the table, updating amount.
    //if its already 0, its just sinalizing that sum product and sales product are 0.
    //it will also subtract the value in Total just sinalyzing -1 in Total Function and updating variable values.
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

    //this function is resposable for update total amount and value of products. 
    //the 'value' received is only +1 or -1, depending on what function has been called it (sell or undo)
    function Total(value){
        sumTotal += value;
        salesTotal = salesClassic + salesCheddar + salesDouble + salesCrispy;

        document.getElementById('resultCountTotal').innerHTML = sumTotal;
        document.getElementById('priceTotal').innerHTML = salesTotal.toFixed(2);
    }

    //the unique function of this function is clean all data from table.
    //this action is irreversible.
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

    //this action is from TableToExcel library and it makes a export on xlsx with the table's content.
    function spreadsheet(e){
        TableToExcel.convert(document.getElementById('table'));
    }