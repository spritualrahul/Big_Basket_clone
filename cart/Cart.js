import navbar from "../component/navbar.js"
import {footer} from "../component/footer.js"
document.getElementById("footer").innerHTML = footer();
document.getElementById("navContainer").innerHTML = navbar();
let arr = [{name:"onion",
original_price:36,
price:30,
quantity:1,
},{name:"Tomato",
original_price:33,
price:29,
quantity:1,
},{name:"Potato",
original_price:42,
price:35,
quantity:1,
},{name:"onion",
original_price:36,
price:30,
quantity:1,
},{name:"Tomato",
original_price:33,
price:29,
quantity:1,
},{name:"Tomato",
original_price:33,
price:29,
quantity:1,
},{name:"Tomato",
original_price:33,
price:29,
quantity:1,
}]

let total_sav = 0;
let total_sub = 0;
let delivery_ch = 0;
window.addEventListener("load",display);


function display(){
    document.querySelector("tbody").innerHTML = "";
    arr.map(function(e,ind){
        let tr = document.createElement('tr');
        let name = document.createElement("td");
        name.innerText = e.name;
        let div_price = document.createElement('td');
        let price = document.createElement('p');
        price.innerText = '₹'+e.price;
        let or_price = document.createElement("p");
        or_price.innerText = '₹'+e.original_price;
        or_price.setAttribute("class","or_price");
        div_price.append(price,or_price);
        div_price.setAttribute("class","price_div");
        let div_qu = document.createElement('td');
        let input = document.createElement('input');
        input.value = e.quantity;
        input.setAttribute("class","input");
        let minus = document.createElement('button');
        minus.innerText = '-';
        minus.addEventListener("click",function(){
            if(input.value>1)
            {
                input.value = +input.value - 1;
                e.quantity = +input.value;
                arr[ind].quantity = +input.value;
            }else{
                arr.splice(e,1);
            }
            total_sub = 0;
            total_sav = 0;
            delivery_ch = 0;
            items.innerText=0;
            display();
        })
        let plus = document.createElement('button');
        plus.innerText = '+';
        plus.addEventListener("click",function(){
         input.value = +input.value+1;
         e.quantity = +input.value;
         arr[ind].quantity = +input.value;
         total_sub = 0;
         total_sav = 0;
         delivery_ch = 0;
         items.innerText=0;
            display();
        })
        div_qu.append(minus,input,plus);
        let subtotal = document.createElement('td');
        let total_price = document.createElement('p');
        total_price.innerText = '₹'+e.quantity*e.price;
        let remove = document.createElement('span');
        remove.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        remove.addEventListener("click",function(){
            arr.splice(e,1);
            display();
        })
        subtotal.setAttribute("class","subtotal");
        subtotal.append(total_price,remove);
        let saving = document.createElement('td');
        saving.innerText = '₹'+(e.original_price-e.price)*e.quantity;
        tr.append(name,div_price,div_qu,subtotal,saving);
        document.querySelector('tbody').append(tr);
        document.querySelector('tbody').setAttribute("class","all");
        let hr = document.createElement("hr");
        document.querySelector('tbody').append(hr);
        let money = document.getElementById('total');
        total_sub += e.price*e.quantity;
        money.innerText = total_sub;
        let savings = document.getElementById('saved');
        total_sav += (e.original_price-e.price)*e.quantity;
        savings.innerText = total_sav;
        let delivery_charge = document.getElementById("delivery_charges");
        delivery_ch += 40;
        delivery_charge.innerText = delivery_ch;
        let items = document.getElementById("items_number");
        items.innerText = +items.innerText + 1;
    })
    let total_amount = document.getElementById("total_amount");
    total_amount.innerText = total_sub+delivery_ch;
    let total_amount1 = document.getElementById("total_amount1");
    total_amount1.innerText = total_sub+delivery_ch;
}