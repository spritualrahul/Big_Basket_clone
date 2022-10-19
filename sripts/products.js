import navbar from "../component/navbar.js"
import {footer} from "../component/footer.js"
import {sidebar} from "../component/sidebar.js"
document.getElementById("sidebar").innerHTML=sidebar();
let foot=footer();
document.getElementById("footer").innerHTML=foot;
let nav=navbar();
document.getElementById("navContainer").innerHTML=nav;
let product=JSON.parse(localStorage.getItem("productId"))||[]
var mainDiv=document.createElement("div");
mainDiv.setAttribute("id","mainDiv")

let imagediv=document.createElement("div")
var image=document.createElement("img");
image.src=product.image_url
image.setAttribute("id","imgid")

var offdiv=document.createElement("div")
offdiv.innerText=`Diwali Sale ${product.off}*`;
offdiv.setAttribute("id","offdiv")
var idiv=document.createElement("div")

var name=document.createElement("h7");
name.style.fontSize="30px"
var fresh=document.createElement("div")
fresh.setAttribute("id","fresh")
fresh.textContent="Fresho"
name.textContent=product.name;
name.style.backgroundColor="white";
var veg=document.createElement("img")
veg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh71sfIQVPk_TuhnuWB0Q1E6FlciHqRH-wRA&usqp=CAU"
veg.setAttribute("id","logo")

imagediv.append(offdiv,image,veg)

var price=document.createElement("h7");
var price2=document.createElement("h7");
price2.textContent=product.mrp2;
price2.setAttribute("id","price2")
price.textContent=`₹ ${product.mrp}`;
price.style.fontSize="18px"

var truck=document.createElement("img")
truck.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzs53TfNnjTRqFDU7kRfOsoh3LE14bJe5Qg&usqp=CAU"
var mdiv=document.createElement("div")
mdiv.setAttribute("id","mdiv")
var divOne=document.createElement("div")
divOne.append(truck)
var divTwo=document.createElement("div")
divTwo.setAttribute("id","divTwo")

var div3=document.createElement("div")
div3.setAttribute("id","div3")
div3.textContent="Standard Delivery: 20 oct, 7:00AM - 9:00AM "
divTwo.append(price2,price,div3);
mdiv.append(divOne,divTwo)

var coldiv=document.createElement("div")
coldiv.setAttribute("id","coldiv")


var btn = document.createElement("button");
btn.textContent="Add To Cart";
btn.setAttribute("id","cartbtn");
var count=2;
// adding click event to add items in the cart
btn.addEventListener("click",function(){
   
    addtocart(product.name,product.mrp);
     alert(`${product.name} is added successfully`)
     window.location.reload();
  })


var btndiv=document.createElement("div")
btndiv.setAttribute("id","btndiv");



var cartbtn=document.createElement("div")
cartbtn.append(btn)
idiv.append(fresh,name)

btndiv.append(cartbtn)
coldiv.append(idiv,mdiv,btndiv)



mainDiv.append(imagediv,coldiv);
document.getElementById("product").append(mainDiv)
function addtocart(name,price,mrp2,img,id){
   
  // creating local storage
let cartdata=JSON.parse(localStorage.getItem("bigbasket")) || [];
// creating object to store cart data
let obj={
  id:id,
  name:name,
  price:price,
 
  mrp2:mrp2,
  img:img,
}
cartdata.push(obj);
// settig the total cart items
//document.getElementById("itemCountNav").textContent=`${cartdata.length} item`;
// setting local storage
localStorage.setItem("bigbasket",JSON.stringify(cartdata)); 

}