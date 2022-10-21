function navbar(){
    return(
        `<div class="nav">
        <div class="one">
            <div class="logo"><a href="../index.html"><img src="https://www.bbassets.com/static/staticContent/bb_logo.png" alt=""></a></div>
            <div class="menu"><p>SHOP BY CATEGORY<i class="fas fa-angle-down"></i></p>
            <div class="dropdown">
               <ul type = "none">
                   <li><a href="./pr.html">Fruits and vegetables</a></li>
                   <li><a href="#">Food grains, Oil & Masala</a></li>
                   <li><a href="#">Bakery, Cakes & Dairy</a></li> 
                   <li><a href="#">Beverages</a></li> 
                   <li><a href="#">Snacks & Branded Foods</a></li> 
                   <li><a href="#">Beauty & Hygiene</a></li> 
                   <li><a href="#">Cleaning & Household</a></li> 
                   <li><a href="#">Kitchen, Garden & Pets</a></li> 
                   <li><a href="#">Eggs, Meat & Fish</a></li> 
                   <li><a href="#">Gourmet & World Food</a></li> 
                   <li><a href="#">Baby Care</a></li> 
                   <li><a href="#">View All</a></li> 
               </ul>
            </div>
            </div>
        </div>
        <div class="two">
            <div class="num"><span><i class="fas fa-phone-alt"></i></span><span id="contact"> 1860 123 1000 560004</span><span></span></span></span></div>
            <div class="search"><input type="text" id="searchbar" placeholder="Search for Products..."><button id="btn"><i class="fas fa-search"></i></button></div>
            <div class="offers"><span class="ofr"><i class="fas fa-tag"></i> OFFERS</span> <span class="spcl"></span></div>
        </div>
        <div class="three">
            <div class="location"><i class="fas fa-map-marker-alt">831002,Delhi,India</i> <span> <i class="fas fa-angle-down"></i></span> <i class="far fa-user"></i><a href="./loginSignup/signupdetails.html" id ="loginbutton">${user1}</a></div>
            <button class="btn1"><a href="./cart/Cart.html"><i class="fas fa-shopping-basket fa-3x"></i> <span><p id="mybasket">My Basket</p></span><p id="itemCountNav">${cartdata.length} item</p></a></button>
        </div>
    </div>`
    )
}
let cartdata=JSON.parse(localStorage.getItem("bigbasket")) || []
//let user=JSON.parse(localStorage.getItem("currentuser")) || []
let user=JSON.parse(localStorage.getItem("currentUser")) || []
let user1="";
if(user.length==0){
    user1="Login/Signup"
}else{
    user1=`${user[user.length-1].fname} ${user[user.length-1].lname}`;
}
export default navbar;


 //  <script src="https://kit.fontawesome.com/683b4b40e3.js" crossorigin="anonymous"></script>
 //<link rel="icon" href="https://www.bbassets.com/static/v2514/images/favicon.ico?v=2514" type="image/x-icon">


// ID of Div should be "navContainer";

