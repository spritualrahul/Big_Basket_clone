import navbar from "../component/navbar.js"
//import {caro_1,caro_2} from "../component/carousel.js" ;
//document.getElementById("carousel-1").innerHTML = caro_1() ;
//document.getElementById("carousel-2").innerHTML = caro_2() ;

let nav=navbar();

import {footer} from "../component/footer.js" ;
console.log(footer) ;
document.getElementById("footer").innerHTML = footer() ;

document.getElementById("navContainer").innerHTML=nav;

var Data;
async function getdata(){
    try{
        let req=await fetch("http://localhost:3000/data");
        let data=await req.json();
        console.log(data);
        Data=data.products;
    
        display(data.products);
    }
    catch(err){
        console.log(err);
    }
}

function display(data){
    // getting the parent div to append the products
let prd=document.getElementById("products")
prd.innerHTML="";
// mapping the created products data
data.forEach(function(elem,index){
var mainDiv=document.createElement("div");
mainDiv.setAttribute("id","mainDiv")
var image=document.createElement("img");
image.src=elem.image_url
image.setAttribute("id","imgid")
var offdiv=document.createElement("div")
offdiv.innerText=`Diwali Sale ${elem.off}`;
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
var qtybox=document.createElement("div")
qtybox.setAttribute("id","qtybox")
qtybox.innerText="1"

var btn = document.createElement("button");
btn.textContent="Add";
btn.setAttribute("id","cartbtn");
var count=2;
// adding click event to add items in the cart
btn.addEventListener("click",function(){
    qtybox.textContent=count++;
    addtocart(elem.name,elem.mrp);
     alert(`${elem.name} is added successfully`)

  })


var btndiv=document.createElement("div")
btndiv.setAttribute("id","btndiv");
var qtydiv=document.createElement("div")
qtydiv.setAttribute("id","qtydiv")
var qty=document.createElement("id","qty")
qty.textContent="Qty"


var cartbtn=document.createElement("div")
cartbtn.append(btn)

qtydiv.append(qty,qtybox)
btndiv.append(qtydiv,cartbtn)
coldiv.append(mdiv,btndiv)


idiv.append(offdiv,image)
mainDiv.append(idiv,veg,fresh,name,coldiv);
prd.append(mainDiv);
});
}
getdata();
