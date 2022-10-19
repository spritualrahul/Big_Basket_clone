import navbar from "../component/navbar.js"
import {footer} from "../component/footer.js"
document.getElementById("footer").innerHTML = footer();
document.getElementById("navContainer").innerHTML = navbar();
document.getElementById("cancel").addEventListener("click",back_to);
function back_to(){
    location.href = "checkoutpage.html"
}
let arr6 = JSON.parse(localStorage.getItem("address"))||[];
document.getElementById("add").addEventListener("click",add_to);
function add_to(){
    let f_name = document.getElementById("f_name");
    let l_name = document.getElementById("l_name");
    let number = document.getElementById("number");
    let house_number = document.getElementById("house_number");
    let house_name = document.getElementById("house_name");
    let street = document.getElementById("street");
    let landmark = document.getElementById("land_mark");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let pincode = document.getElementById("pincode");
    arr6.push({
        name:f_name.value+l_name.value,
    phone:number.value,
    street:house_number.value+house_name.value+street.value,
    landmark:landmark.value,
    city:city.value,
    state:state.value,
    country:'india',
    pincode:pincode.value,
    })
    localStorage.setItem("address",JSON.stringify(arr6));
    location.href = "checkoutpage.html"
}