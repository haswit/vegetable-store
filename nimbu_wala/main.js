var inputElement = document.getElementById("nimbu_price_input");
let nimbu_price = "10 ke 4";
const _name = "Nimbu"

window.onload = function(){
    
    // show fruit name
    document.getElementById("fruit_name").innerHTML = "<b>"+ _name +"</b>";
    document.getElementById("fruit_price").innerHTML = "<b>"+ nimbu_price +"</b>";

    //change value of input         
    inputElement.value = nimbu_price;
}



function say_name(){
    alert(_name);   
}


function say_price(){
 alert(nimbu_price);   
}

function say_negotiated_price(){
    alert("chalo 10 k 5 lelo")
}

function change_nimbu_price(){

    // access what user has entered as a new value
    var new_nimbu_price = inputElement.value;

    nimbu_price = new_nimbu_price;

    document.getElementById("fruit_price").innerHTML = "<b>"+ nimbu_price +"</b>";


}

