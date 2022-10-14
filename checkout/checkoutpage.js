let arr = [{
    name:'nagendra',
    phone:9880099565,
    street:'btm layout,banasenkari,banglore,560076',
    landmark:'near that tree',
    city:'banglore',
    state:'karnataka',
    country:'india',
    pincode:560076
},{  name:'nagendra',
phone:9880099565,
street:'btm layout,banasenkari,banglore,560076',
landmark:'near that tree',
city:'banglore',
state:'karnataka',
country:'india',
pincode:560076
}]
window.addEventListener("load",display);
function display(){
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
    })
}
document.getElementById("add_address").addEventListener("click",add);
function add(){
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=600,height=300,left=100,top=100`;
    
   window.open('https://javascript.info', 'name', params);
}
