function sidebar(){

    return(`
    <div id="container">
    <div id="first">
        <span id="spanCategory">Category</span>
        <hr />
        <h3>Fruits and Vegetables</h3>
        <a href="">Beans Brinjals & okra</a><br><br />
        <a href="">Cabbage and Cauliflower</a><br><br />
        <a href="">Leafy Vegetables</a><br><br />
        <a href="" style="color: green; font-weight: 600">Potato onion & tomato</a><br><br />
      
        <a href="">Root vegetables</a><br><br>
        <a href="">Specialty</a><br><br>
        <span id="spanCategory">Brands</span>
        <hr/>
        <a href="">Fresho</a><br><br />
        <a href="">Fresho potato, onion & Tomato</a><br><br />

    </div>
    <div style="
        height: 400px;
        width: 0.1px;
        
        margin-top: 10px;
        margin-left: -20px;
      "></div>
    </div>
    `)
}

export { sidebar};

// don't forget to link  <link rel="stylesheet" href="./style/sidebar.css">  //