function caro_1(){
    return `<div id="carouselExampleCaptions"  class="carousel slide carousel-fade" data-bs-ride="false">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./carousel_images/fresho-fnv-Bangalore-1600x460-11thOCT22.webp" class="d-block w-100" alt="...">

      </div>
      <div class="carousel-item">
        <img src="./carousel_images/hp_m_Dry_FishBanner_1600x460_070922.webp" class="d-block w-100" alt="...">
    
      </div>
      <div class="carousel-item">
        <img src="./carousel_images/YXHP144_hp_fom_m_bbpl-staples_460_101022_Bangalore.webp" class="d-block w-100" alt="...">
        
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>` ;
}

function caro_2(){
  return `<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
      <div class="carousel-item active">
          <img src="./carousel_images/big-diwali.webp" class="d-block w-100" alt="big-diwali">
      </div>
      <div class="carousel-item">
          <img src="./carousel_images/chocolate-gifting.webp" class="d-block w-100" alt="chocolate-gifting">
      </div>
      <div class="carousel-item">
          <img src="./carousel_images/festive-diwali.webp" class="d-block w-100" alt="festive-diwali">
      </div>
      <div class="carousel-item active">
          <img src="./carousel_images/pre-diwali.webp" class="d-block w-100" alt="pre-diwali">
      </div>
      <div class="carousel-item">
          <img src="./carousel_images/glassware.webp" class="d-block w-100" alt="glassware">
      </div>
      <div class="carousel-item">
          <img src="./carousel_images/sparkle-your-home.webp" class="d-block w-100" alt="sparkle-your-home">
      </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </button>
</div>` ;
}
function mcaro(page){
  
 return fetch(`http://localhost:3000/products?_page=${page}&_limit=5`).then((res)=>res.json())
    

 
}

export {caro_1,caro_2,mcaro} ;