export const carouselImg = (img, index) => {
  // Add active class to first image in carousel to make it work
  let activeClass = "";
  if (index === 0) {
    activeClass = "active";
  }

  // Image placeholder if original value has any errors or do not exist
  let media = "";
  if (img.length === 0 || img === null || img === "") {
    media = "/images/img-placeholder.jpeg";
  } else {
    media = img;
  }

  return `<div class="carousel-item ${activeClass}">
            <img src="${media}" data-index="${index}" class="d-block w-100 rounded listing-img" alt="Image of listing" >
          </div>`;
};
