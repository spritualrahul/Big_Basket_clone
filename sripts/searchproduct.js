import navbar from "../component/navbar.js"
import {footer} from "../component/footer.js"
//import {sidebar} from "../component/sidebar.js"
//document.getElementById("sidebar").innerHTML=sidebar();
let foot=footer();
document.getElementById("footer").innerHTML=foot;
let nav=navbar();
document.getElementById("navContainer").innerHTML=nav;
let url="http://localhost:3000/data"
async function getdata(){
  
    let url=`http://localhost:3000/products/`
    let res=await fetch(url);
    let data=await res.json();
    display(data)
}
function display(data){
    // getting the parent div to append the products
let prd=document.getElementById("products")
prd.innerHTML="";
// mapping the created products data
data.forEach(function(elem,index){
   let searchting=localStorage.getItem("searchpro")
    if(elem.category===searchting||elem.category1===searchting){
var mainDiv=document.createElement("div");
mainDiv.setAttribute("id","mainDiv")


var image=document.createElement("img");
image.src=elem.image_url
image.setAttribute("id","imgid")
image.addEventListener("click",()=>{

    localStorage.setItem("productId",JSON.stringify(elem))
    window.location.href="./product.html"
})
var offdiv=document.createElement("div")
offdiv.innerText=`Diwali Sale ${elem.off}*`;
offdiv.setAttribute("id","offdiv")
var idiv=document.createElement("div")

var name=document.createElement("h7");
name.style.fontSize="20px"
var fresh=document.createElement("div")
fresh.setAttribute("id","fresh")
fresh.textContent="Fresho"
name.textContent=elem.name;
name.style.backgroundColor="white";
var veg=document.createElement("img")
veg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh71sfIQVPk_TuhnuWB0Q1E6FlciHqRH-wRA&usqp=CAU"
veg.setAttribute("id","logo")


var price=document.createElement("h7");
var price2=document.createElement("h7");
price2.textContent=elem.mrp2;
price2.setAttribute("id","price2")
price.textContent=`₹ ${elem.mrp}`;
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

//button 


var btn = document.createElement("button");
btn.textContent="Add";
btn.setAttribute("id","cartbtn");
var count=2;
// adding click event to add items in the cart
btn.addEventListener("click",function(){

    addtocart(elem.name,elem.mrp,elem.mrp2,elem.image_url,elem._id);
     alert(`${elem.name} is added successfully`)
     window.location.reload();
  })
    

var btndiv=document.createElement("div")
btndiv.setAttribute("id","btndiv");
var qtydiv=document.createElement("div")
qtydiv.setAttribute("id","qtydiv")
var qty=document.createElement("id","qty")
qty.textContent="Qty"


var cartbtn=document.createElement("div")
cartbtn.append(btn)

//qtydiv.append(qty,qtybox)
btndiv.append(cartbtn)
coldiv.append(mdiv,btndiv)


idiv.append(offdiv,image)
mainDiv.append(idiv,veg,fresh,name,coldiv);
prd.append(mainDiv);
    }
});
}
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
function removefromcart(id){
    let cartdata=JSON.parse(localStorage.getItem("bigbasket")) || [];
    console.log(cartdata[0].id);
   
}
getdata()
let searchbutton=document.getElementById("btn")
searchbutton.addEventListener('click',()=>{
    let searchproduct=document.getElementById("searchbar").value;
    localStorage.setItem("searchpro",searchproduct)
    location.href="./searchproduct.html"
})