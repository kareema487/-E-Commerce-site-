var men = document.getElementById("men");
var woman = document.getElementById("woman");
var Accessory = document.getElementById("Accessory");
var rootProduct = document.getElementById("product");
var count=document.getElementById("count");
var Product=[]
var counter=0;
function Purchase(){
    counter++;
    count.textContent=counter;
}

function load_data(id){
    Category=[];
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "category.json");
    xhr.send("");
    var product = ""
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var response = xhr.response;
                var data = JSON.parse(response);
               
                for (let index = 0; index < data.length; index++) {
                  
                    if (data[index].categoryId == id) {
                       
                        var infoProduct=data[index].title +","+data[index].CategoryId+','+data[index].price;
                        product += `
                        <div class="col-12 col-md-4 mb-4">
                            <div class="card h-100">
                                
                                    <img src="${data[index].src}" class="card-img-top" alt="...">
                               
                                <div class="card-body">
                                    <ul class="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                        </li>
                                        <li class="text-muted text-right">${data[index].price}</li>
                                    </ul>
                                    <a href="shop-single.html" class="h2 text-decoration-none text-dark">${data[index].title}</a>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                                    </p>
                                    <button onclick="Purchase()" class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></button>
                                </div>
                            </div>
                        </div>
                    `;
                }
            }
            rootProduct.innerHTML = product;
        }
}
}
}
load_data(1);
men.addEventListener('click', function () {
     return load_data(1);
 })

woman.addEventListener('click', function () {
    return load_data(2);
 })

 Accessory.addEventListener('click', function () {
    return load_data(3);
 })


