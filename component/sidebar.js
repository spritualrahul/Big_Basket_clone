function sidebar(){

    return(`
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./product.css">
</head>
<body>
    <div id="brand"><h4 id="color">Brand</h4>
        <input id="inp" type="text" placeholder="Search by Brand"><br>
        <input  type="checkbox" > <span id="hov"> bb Combo </span><br>
        <input type="checkbox"><span id="hov"> Fresh</span> <br>
    </div>
    <div id="seasonal"><h4 id="color">Seasonal</h4>
        <input type="checkbox"><span id="hov"> Summer Fruits </span><br>
        <input type="checkbox"><span id="hov"> Summer Veggies</span> <br>
        <input type="checkbox"><span id="hov"> Winter Fruits </span><br>
        <input type="checkbox"><span id="hov"> Winter Veggies</span> <br>
    </div>
    <div id="origin">
        <h4 id="color">Country Of Origin</h4>
        <input type="checkbox"><span id="hov"> Australia</span> <br>
        <input type="checkbox"><span id="hov"> Greece</span> <br>
        <input type="checkbox"><span id="hov"> India </span><br>
        <input type="checkbox"><span id="hov"> Italy </span><br>
        <input type="checkbox"><span id="hov"> South Africa </span><br>
        <input type="checkbox"><span id="hov"> Thailand </span><br>
        <input type="checkbox"><span id="hov"> Iran </span><br>
        <input type="checkbox"><span id="hov"> USA  </span><br>
        <input type="checkbox"><span id="hov"> Egypt </span><br>
        <input type="checkbox"><span id="hov"> Peru </span><br>
        <input type="checkbox"><span id="hov"> New Zealand </span><br>
        <input type="checkbox"><span id="hov"> Turkey </span><br>
        <input type="checkbox"><span id="hov"> Chile </span><br>       
    </div>
    <div id="price">
        <h4 id="color">Price</h4> 
        <input type="checkbox"><span id="hov"> Less than Rs 20 (89) </span><br>
        <input type="checkbox"><span id="hov"> Rs 21 to Rs 50 (168) </span><br>
        <input type="checkbox"><span id="hov"> Rs 51 to Rs 100 (60) </span><br>
        <input type="checkbox"><span id="hov"> Rs 101 to Rs 200 (33)</span> <br>
        <input type="checkbox"><span id="hov"> Rs 201 to Rs 500 (11)</span> <br>
        <input type="checkbox"><span id="hov"> More than Rs 501 (1) </span><br>   
    </div>
    <div id="pack">
        <h4 id="color">Pack Size</h4>
        <input id="inp" type="text" placeholder="Search BY Pack Size"><br>
        <input type="checkbox"><span id="hov"> 100 to 150 gm </span><br>
        <input type="checkbox"><span id="hov"> 70 to 100 gm (Bunch)</span> <br>
        <input type="checkbox"><span id="hov"> 1 Pc (Approx. 500 g-1 Kg)</span> <br>
        <input type="checkbox"><span id="hov"> 1 pack (Approx .180g - 200 g)</span><br>
        <input type="checkbox"><span id="hov"> 1 pc 300 -550 g </span><br>
        <input type="checkbox"><span id="hov"> 1 pc 400 - 800g </span><br>

    </div>
</body>
</html>
    
    `)
}

export default sidebar;

// don't forget to link  <link rel="stylesheet" href="./style/sidebar.css">  //