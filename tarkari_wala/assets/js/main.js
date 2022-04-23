
var all_tarkari_items = [

        { "name" : "Baigan", "price" : 30, "image" : "./assets/images/tarkari_images/baigan.jpg"  },
        { "name" : "Aalu", "price" : 40, "image" : "./assets/images/tarkari_images/aalu.jpg"  },

];

window.onload = function(){
    load_items();
}


function add_product(){
    var image_url = document.getElementById("image_url_input").value 
    var _name = document.getElementById("name_input").value 
    var price = document.getElementById("price_input").value  

    var new_tarkari = { "name" : _name, "price" : price, "image" : image_url }
    
    all_tarkari_items.push(new_tarkari);

    load_items();
}

function load_items(){

    document.getElementById("all_tarkari").innerHTML = "";

    all_tarkari_items.map((tarkari) => {
        
        document.getElementById("all_tarkari").innerHTML += `
            <div class='col-12 col-md-3 col-lg-3  p-2'> 
                <div class="card">
                    <img style='height:300px;object-fit:scale-down' src="${tarkari.image}"> <br><br>
                    <p class='text-center'>${tarkari.name}</p>
                    <p class='text-center'>Rs. ${tarkari.price}</p>
                </div>
            </div>
        `    
    }); 
}



