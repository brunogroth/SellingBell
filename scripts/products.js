// variables

    //default values
let classicValue=13.90;
let cheddarValue=15.90;
let doubleValue=18.90;
let crispyValue=17.90;

    //default quantitys
let quantityClassic=95;
let quantityCheddar=43;
let quantityDouble=15;
let quantityCrispy=50;

//declaration of button for table products export  
let btnExport = document.getElementById('spreadsheet');
//functions

function data(){

    //default values
    document.getElementById('classicValue').innerHTML = classicValue.toFixed(2);
    document.getElementById('cheddarValue').innerHTML = cheddarValue.toFixed(2);
    document.getElementById('doubleValue').innerHTML = doubleValue.toFixed(2);
    document.getElementById('crispyValue').innerHTML = crispyValue.toFixed(2);

    //default quantity
    document.getElementById('quantityClassic').innerHTML = quantityClassic;
    document.getElementById('quantityCheddar').innerHTML = quantityCheddar;
    document.getElementById('quantityDouble').innerHTML = quantityDouble;
    document.getElementById('quantityCrispy').innerHTML = quantityCrispy;
}
    ///////////////////////////////////////////////////////////////////////////

    const formEl = document.querySelector('form');
    const tbodyEl = document.querySelector('tbody');
    const tableEl = document.getElementById('table')
    function createProduct(e){
        e.preventDefault();
        const product = document.getElementById('productName').value;
        const quantity= document.getElementById('avaliableQuantity').value;
        const value = document.getElementById('value').value;
        tbodyEl.innerHTML += `
        <tr>
            <td>
                ${product}
            </td>
            <td>
                ${quantity}
            </td>
            <td>
                ${value}
            </td>
            <td>
                <button class="btn btn-danger delete">Delete</button>
            </td>
        </tr>
        `;

        alert("Product sucessfully created!");
    }

    function deleteProduct(e){
    if(e.target.classList.contains('delete')){
        alert("Are you shure you wish delete this product?");
    
    const btn = e.target;
    btn.closest("tr").remove();
    }

    }
    //events
    formEl.addEventListener('submit', createProduct);
    tableEl.addEventListener('click', deleteProduct);
    btnExport.addEventListener('click', spreadsheet, false);

    function spreadsheet(e){
        TableToExcel.convert(
            document.getElementById('table')
        );
    }
    
