 class Producto {
     constructor(name, price, year, serial) {
         this.productName = name;
         this.productPrice = price;
         this.productYear = year;
         this.productSerial = serial;
     }

 }

 class ProductService {
     addProduct(product) {
         const productList = document.getElementById('product-list')
         const element = document.createElement('div');
         element.innerHTML = `
         <div class="card text-center mb-4 ">
         <div class="card-body">
             <div class="row">
                 <div class="col-lg-3 my-auto">
                     <strong>${product.productName}</strong>
                 </div>
                 <div class="col-lg-2 my-auto">
                     <strong>${product.productPrice}</strong>
                 </div>
                 <div class="col-lg-2 my-auto">
                     <strong>${product.productYear}</strong>
                 </div>
                 <div class="col-lg-2 my-auto">
                     <strong>${product.productSerial}</strong>
                 </div>
                 <div class="col-lg-2 my-auto">
                     <button type="submit" class="btn btn-danger" name="deletProduct" (click)="hola()" id="deletProduct">Eliminar</button>
                 </div>
             </div>
         </div>
     </div>
 </div>
         `
         productList.appendChild(element);
         const alert_succes = document.getElementById("alerta").classList.add('alert-success')
         document.getElementById("showTextAlert").innerHTML = "Agregaste el producto " + product.productName;
         setTimeout(function () {
             document.getElementById("alerta").classList.remove('alert-success');
         }, 4000);


     }

     deletProduct(element, product) {
         document.getElementById("product-list").addEventListener('click', function (e) {
             if (e.target.name == 'deletProduct') {
                 const parent = e.target.parentElement.parentElement.parentElement.remove();
                 const alert_danger = document.getElementById("alerta").classList.add('alert-danger')
                 document.getElementById("showTextAlert").innerHTML = "Borraste un Producto ";
                 setTimeout(function () {
                     const alert_danger = document.getElementById("alerta").classList.add('hide')
                 }, 4000);

             }

         });
     }

     resetForm() {
         document.getElementById('product-form').reset();
     }

 }

 document.getElementById('product-form')
     .addEventListener('submit', function (e) {
         e.preventDefault();
         document.getElementById("alerta").classList.remove('alert-danger');
         document.getElementById("alerta").classList.remove('alert-success');
         document.getElementById("showTextAlert").innerHTML = "";
         const name = document.getElementById('name').value;
         const price = document.getElementById('price').value;
         const year = document.getElementById('year').value;
         const serial = document.getElementById('serial').value;

         const product = new Producto(name, price, year, serial);
         console.log(product);
         const productService = new ProductService();
         productService.addProduct(product);
         productService.resetForm();
         productService.deletProduct(e.target, product);
     });


 //DOM Events