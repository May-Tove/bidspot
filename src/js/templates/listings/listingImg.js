export const listingImg = (img, index) => {
  let activeClass;

  if (index === 0) {
    activeClass = "active";
  }

  return ` 
  <div class="carousel-item ${activeClass}">
  <img src="${img}" data-index="${index}" class="d-block w-100 rounded listing-img" alt="Image of listing" >
</div>`;
};
