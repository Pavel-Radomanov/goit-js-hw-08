
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const containerElementsGallery = document.querySelector(".gallery");
const imageMarkup = createItemOfGallery(galleryItems);

containerElementsGallery.insertAdjacentHTML("beforeend",imageMarkup);

function createItemOfGallery(){
return galleryItems.map(({preview,original,description}) => {
return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}).join('');}


let lightboxGallery = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});





// const containerElementsGallery = document.querySelector(".gallery");
// const imageMarkup = createItemOfGallery(galleryItems);

// containerElementsGallery.insertAdjacentHTML("beforeend",imageMarkup);


// function createItemOfGallery(){
//     return galleryItems.map(({preview,original,description}) =>  {
//         return `<a class="gallery__item" href="${original}">
//         <img class="gallery__image" src="${preview}" alt="${description}" />
//       </a>`;
// }).join('');
    
// }
// // console.log(createItemOfGallery());

// document.querySelector(".gallery");

// containerElementsGallery.addEventListener("click", onGalleryContainerClick,{ passive: false });

// function onGalleryContainerClick(event){
//     event.preventDefault();
// const isItemGallery = event.target.classList.contains("gallery__image");
// if (!isItemGallery){
//     return;
// }

// let lightboxGallery = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});
// };





// console.log(galleryItems);