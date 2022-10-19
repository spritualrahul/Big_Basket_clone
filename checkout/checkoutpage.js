import navbar from "../component/navbar.js"
import {footer} from "../component/footer.js"
document.getElementById("footer").innerHTML = footer();
document.getElementById("navContainer").innerHTML = navbar();
let arr1 = [{
    name:'nagendra',
    phone:9880099565,
    street:'btm layout,banasenkari,banglore,560076',
    landmark:'near that tree',
    city:'banglore',
    state:'karnataka',
    country:'india',
    pincode:560076
},]
localStorage.setItem("address",JSON.stringify(arr1));

let arr = JSON.parse(localStorage.getItem("address"))||[];
window.addEventListener("load",display);
function display(){
    document.getElementById("done").style.display = "none";
    arr.forEach(function(e){
        let div = document.createElement('div');
        div.setAttribute("class","div");
        let div90 = document.createElement('div');
        
        let div10 = document.createElement('div');
        // div10.setAttribute("class","div10");
        let button = document.createElement('button');
        button.innerText = "Delivery here";
        button.setAttribute("class","deliver");
        button.addEventListener("click",function(){

        })
        div10.append(button);
        let name = document.createElement('p');
        name.innerText = e.name;
        name.setAttribute("class","p");
        let number= document.createElement('p');
        number.setAttribute("class","p");
        number.innerText = e.phone;
        let landmark = document.createElement('p');
        landmark.setAttribute("class","p");
        landmark.innerText = e.landmark;
        let street = document.createElement('p');
        street.setAttribute("class","p");
        street.innerText = e.street;
        let city = document.createElement('p');
        city.setAttribute("class","p");
        city.innerText = e.city;
        let state = document.createElement('p');
        state.setAttribute("class","p");
        state.innerText = e.state;
        let country = document.createElement('p');
        country.setAttribute("class","p");
        country.innerText = e.country;
        let pincode = document.createElement('p');
        pincode.innerText = e.pincode;
        pincode.setAttribute("class","p");
        div90.append(name,number,landmark,street,city,state,country,pincode);
        div.append(div90,div10);
        document.getElementById("address").append(div);
        div.addEventListener("click",function(){
            document.getElementById("main_box").style.display = "none";
            document.getElementById("done").style.display = "block";
            document.getElementById("short_cut").innerHTML = e.name+" "+e.landmark+" "+e.street+e.city+e.state+e.pincode;
            document.getElementById("shipment_outer").style.display = "block";
            document.getElementById("four_days").style.display = "block";
            document.getElementById("two_days").style.display = "none";
            document.getElementById("twelve_hours").style.display = "none";
            document.getElementById("instant_maggy").style.display = "none";
            document.getElementById("temp_shipment").style.display = "none";
        })
    })
}
document.getElementById("payment").style.display = "none";
document.getElementById("Card").style.display = "none";
document.getElementById("cash_on").style.display = "none";
document.getElementById("box_in_upi").style.display = "block";
document.getElementById("temp_shipment").innerHTML = `<p>Delivery options</p> <p id="info"></p><button id="sh_but"></button>`;
document.getElementById("temp_shipment").style.display = "block"
document.getElementById("shipment_outer").style.display = "none";
document.getElementById("add_address").addEventListener("click",add);
function add(){
    location.href = "add_address.html"
}
document.getElementById("change_address").addEventListener("click",function(){
    document.getElementById("main_box").style.display = "block";
    document.getElementById("d_add").setAttribute("id","d_add");

    document.getElementById("done").style.display = "none";
    document.getElementById("temp_shipment").style.display = "block"
    document.getElementById("shipment_outer").style.display = "none";
    document.getElementById("temp_shipment").innerText = "";
    document.getElementById("temp_shipment").innerHTML = `<p>Delivery options</p> <p id="info"></p><button id="sh_but"></button>`;
})
let arr2 = JSON.parse(localStorage.getItem("bigbasket"));
display_list();
function display_list(){
    arr2.forEach(function(e){
        let ls = document.createElement("img");
        ls.src = e.img;
        document.getElementById("list").append(ls);
    })
}
document.getElementById("4_days").addEventListener("click",function(){
    document.getElementById("list").innerText = ""
    arr2.forEach(function(e){
        let ls = document.createElement("img");
        ls.src = e.img;
        document.getElementById("list").append(ls);
    })
    document.getElementById("four_days").style.display = "block";
    document.getElementById("two_days").style.display = "none";
    document.getElementById("twelve_hours").style.display = "none";
    document.getElementById("instant_maggy").style.display = "none";
    document.getElementById("continue").addEventListener("click",function(){
        document.getElementById("shipment_outer").style.display = "none";
        document.getElementById("temp_shipment").style.display = "block";
       let p = document.getElementById("info");
       p.innerText = "Standard delivery"+" "+"Delivery charges : Rs 0";
       let b = document.getElementById("sh_but");
       b.innerText = "Change";
       document.getElementById("temp_shipment").style.display = "flex";
       document.getElementById("temp_shipment").style.justifyContent = "space-between";
       document.getElementById("sh_but").style.border = "2px solid rgb(203, 203, 203)";
       document.getElementById("pay_outer").style.display = "block";
       document.getElementById("pay1_outer").style.display = "none";
       document.getElementById("pay_outer").style.justifyContent = "center";
    })
})
document.getElementById("2_days").addEventListener("click",function(){
    document.getElementById("list1").innerText = ""
    arr2.forEach(function(e){
        let ls = document.createElement("img");
        ls.src = e.img;
        document.getElementById("list1").append(ls);
    })
    document.getElementById("four_days").style.display = "none";
    document.getElementById("two_days").style.display = "block";
    document.getElementById("twelve_hours").style.display = "none";
    document.getElementById("instant_maggy").style.display = "none";
    document.getElementById("continue").addEventListener("click",function(){
        document.getElementById("shipment_outer").style.display = "none";
        document.getElementById("temp_shipment").style.display = "block";
       let p = document.getElementById("info");
       p.innerText = "Standard delivery"+" "+"Delivery charges : Rs 40";
       let b = document.getElementById("sh_but");
       b.innerText = "Change";
       document.getElementById("temp_shipment").style.display = "flex";
       document.getElementById("temp_shipment").style.justifyContent = "space-between";
       document.getElementById("sh_but").style.border = "2px solid rgb(203, 203, 203)";
       document.getElementById("payment").style.display = "block";
       document.getElementById("pay1_outer").style.display = "none";
       document.getElementById("payment").style.justifyContent = "center";
    })
})
document.getElementById("12_hours").addEventListener("click",function(){
    document.getElementById("list2").innerText = ""
    arr2.forEach(function(e){
        let ls = document.createElement("img");
        ls.src = e.img;
        document.getElementById("list2").append(ls);
    })
    document.getElementById("four_days").style.display = "none";
    document.getElementById("two_days").style.display = "none";
    document.getElementById("twelve_hours").style.display = "block";
    document.getElementById("instant_maggy").style.display = "none";
    document.getElementById("continue").addEventListener("click",function(){
        document.getElementById("shipment_outer").style.display = "none";
        document.getElementById("temp_shipment").style.display = "block";
       let p = document.getElementById("info");
       p.innerText = "Standard delivery"+" "+"Delivery charges : Rs 80";
       let b = document.getElementById("sh_but");
       b.innerText = "Change";
       document.getElementById("temp_shipment").style.display = "flex";
       document.getElementById("temp_shipment").style.justifyContent = "space-between";
       document.getElementById("sh_but").style.border = "2px solid rgb(203, 203, 203)";
       document.getElementById("payment").style.display = "block";
       document.getElementById("pay1_outer").style.display = "none";
       document.getElementById("payment").style.justifyContent = "center";
    })
})
document.getElementById("instant").addEventListener("click",function(){
    document.getElementById("list3").innerText = ""
    arr2.forEach(function(e){
        let ls = document.createElement("img");
        ls.src = e.img;
        document.getElementById("list3").append(ls);
    })
    document.getElementById("four_days").style.display = "none";
    document.getElementById("two_days").style.display = "none";
    document.getElementById("twelve_hours").style.display = "none";
    document.getElementById("instant_maggy").style.display = "block";
    document.getElementById("continue").addEventListener("click",function(){
        document.getElementById("shipment_outer").style.display = "none";
        document.getElementById("temp_shipment").style.display = "block";
       let p = document.getElementById("info");
       p.innerText = "Standard delivery"+" "+"Delivery charges : Rs 0";
       let b = document.getElementById("sh_but");
       b.innerText = "Change";
       document.getElementById("temp_shipment").style.display = "flex";
       document.getElementById("temp_shipment").style.justifyContent = "space-between";
       document.getElementById("sh_but").style.border = "2px solid rgb(203, 203, 203)";
       document.getElementById("payment").style.display = "block";
       document.getElementById("pay1_outer").style.display = "none";
       document.getElementById("payment").style.justifyContent = "center";
    })
})
document.getElementById("sh_but").addEventListener("click",function(){
    document.getElementById("shipment_outer").style.display = "block";
    document.getElementById("temp_shipment").style.display = "none";
    document.getElementById("payment").style.display = "none";
    document.getElementById("pay1_outer").style.display = "block";
})
document.getElementById("Credit").addEventListener("click",function(){
    document.getElementById("Card").style.display = "block";
document.getElementById("cash_on").style.display = "none";
document.getElementById("box_in_upi").style.display = "none";
})
document.getElementById("Case_on").addEventListener("click",function(){
    document.getElementById("Card").style.display = "none";
document.getElementById("cash_on").style.display = "block";
document.getElementById("box_in_upi").style.display = "none";
})
document.getElementById("upi").addEventListener("click",function(){
    document.getElementById("Card").style.display = "none";
document.getElementById("cash_on").style.display = "none";
document.getElementById("box_in_upi").style.display = "block";
})
document.getElementById("place_order_cash").addEventListener("click",function(){
    alert(" Ooray.! Your Order is Placed via Case on Delivery")
    arr2.splice(0,arr2.length);
    location.href = "../index.html"
    localStorage.setItem("bigbasket",JSON.stringify(arr2));
})
document.getElementById("verify").addEventListener("click",function(){
    alert(" Ooray.! Your Order is Placed via Upi")
    arr2.splice(0,arr2.length);
    location.href = "../index.html"
    localStorage.setItem("bigbasket",JSON.stringify(arr2));
})
document.getElementById("place_order_card").addEventListener("click",function(){
    alert(" Ooray.! Your Order is Placed via Card")
    location.href = "../index.html"
    arr2.splice(0,arr2.length);
    localStorage.setItem("bigbasket",JSON.stringify(arr2));
})