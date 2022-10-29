import navbar from "../component/navbar.js"
import {footer} from "../component/footer.js"
document.getElementById("footer").innerHTML = footer();
document.getElementById("navContainer").innerHTML = navbar();
let arr = JSON.parse(localStorage.getItem("bigbasket"));
for(let i=0;i<arr.length;i++){
    if(arr[i].quantity===undefined){
        arr[i].quantity = 1;
    }
    
}
localStorage.setItem("bigbasket",JSON.stringify(arr));
let total_sav = 0;
let total_sub = 0;
let delivery_ch = 0;
window.addEventListener("load",function(){
    if(arr.length<=0){
        document.getElementById("cart_items").style.display = "none";
        document.getElementById("Cart_empty").style.display = "block";
    }else{
        document.getElementById("Cart_empty").style.display = "none";
        document.getElementById("cart_items").style.display = "block";
        display();
    }
});


function display(){
    if(arr.length<=0){
        document.getElementById("cart_items").style.display = "none";
        document.getElementById("Cart_empty").style.display = "block";
    }else{
        document.getElementById("Cart_empty").style.display = "none";
        document.getElementById("cart_items").style.display = "block";
    }
    document.querySelector("tbody").innerHTML = "";
    arr.map(function(e,ind){
        let tr = document.createElement('tr');
        let imged = document.createElement('td')
        let image = document.createElement('img');
        image.src = e.img;
        imged.append(image);
        let name = document.createElement("td");
        name.innerText = e.name;
        let div_price = document.createElement('td');
        let price = document.createElement('p');
        price.innerText = '₹'+e.price;
        price.setAttribute("class","green")
        let or_price = document.createElement("p");
        or_price.innerText = '₹'+e.mrp2;
        or_price.setAttribute("class","or_price");
        div_price.append(price,or_price);
        div_price.setAttribute("class","price_div");
        let div_qu = document.createElement('td');
        let input = document.createElement('input');
        input.value = e.quantity;
        input.setAttribute("class","input");
        let minus = document.createElement('button');
        minus.innerText = '-';
        minus.setAttribute("class","red_b")
        minus.addEventListener("click",function(){
            if(input.value>1)
            {
                input.value = +input.value - 1;
                e.quantity = +input.value;
                arr[ind].quantity = +input.value;
            }else{
                alert("Are you sure, you want to delete this item from your Basket ?")
                arr.splice(e,1);
            }
            total_sub = 0;
            total_sav = 0;
            delivery_ch = 0;
            items.innerText=0;
            localStorage.setItem("bigbasket",JSON.stringify(arr));
            display();
        })
        let plus = document.createElement('button');
        plus.innerText = '+';
        plus.setAttribute("class","green_b")
        plus.addEventListener("click",function(){
         input.value = +input.value+1;
         e.quantity = +input.value;
         arr[ind].quantity = +input.value;
         total_sub = 0;
         total_sav = 0;
         delivery_ch = 0;
         items.innerText=0;
         localStorage.setItem("bigbasket",JSON.stringify(arr));
            display();
        })
        div_qu.append(minus,input,plus);
        let subtotal = document.createElement('td');
        let total_price = document.createElement('p');
        total_price.innerText = '₹'+e.quantity*e.price;
        let remove = document.createElement('span');
        remove.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        remove.setAttribute("class","hover");
        remove.addEventListener("click",function(){
            arr.splice(e,1);
            alert("Are you sure, you want to delete this item from your Basket ?")
            localStorage.setItem("bigbasket",JSON.stringify(arr));
            display();
        })
        subtotal.setAttribute("class","subtotal");
        subtotal.append(total_price,remove);
        let saving = document.createElement('td');
        saving.innerText = '₹'+((e.mrp2-e.price)*e.quantity).toPrecision(3);
        saving.setAttribute("class","green")
        tr.append(imged,name,div_price,div_qu,subtotal,saving);
        document.querySelector('tbody').append(tr);
        document.querySelector('tbody').setAttribute("class","all");
        let hr = document.createElement("hr");
        document.querySelector('tbody').append(hr);
        let money = document.getElementById('total');
        total_sub += e.price*e.quantity;
        money.innerText = total_sub;
        let savings = document.getElementById('saved');
        total_sav += (e.mrp2-e.price)*e.quantity;
        savings.setAttribute("class","green");
        savings.innerText = "₹"+total_sav.toPrecision(5);
        let delivery_charge = document.getElementById("delivery_charges");
        delivery_ch += 0;
        delivery_charge.innerText = delivery_ch;
        let items = document.getElementById("items_number");
        items.innerText = +items.innerText + 1;
    })
    let total_amount = document.getElementById("total_amount");
    total_amount.innerText = total_sub+delivery_ch;
    let total_amount1 = document.getElementById("total_amount1");
    total_amount1.innerText = total_sub+delivery_ch;
}
document.getElementById("checkout").addEventListener("click",function(){
    window.location.href = "../checkout/checkoutpage.html";
})
document.getElementById("empty").addEventListener("click",function(){
    alert("Are you sure, you want to Empty you Basket")
    arr.splice(0,arr.length);
    localStorage.setItem("bigbasket",JSON.stringify(arr));
    let items = document.getElementById("items_number");
    items.innerText = 0;
    display()
})
document.getElementById("continue_shop").addEventListener("click",function(){
    window.location.href = "../index.html"
})
document.getElementById("continue_shop1").addEventListener("click",function(){
    window.location.href = "../index.html"
})