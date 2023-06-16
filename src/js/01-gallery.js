
import { galleryItems } from './gallery-items';

//  import "simplelightbox/dist/simple-lightbox.min.js";
 import 'simplelightbox/dist/simple-lightbox.min.css';
 import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
const galleryList = document.querySelector(".gallery");

// for (let item of galleryItems) {
//   const itemEl = document.createElement("li");
//   const linkEl = document.createElement("a");
//   const imgEl = document.createElement("img");
//   imgEl.setAttribute("class", "gallery__image");
//   imgEl.setAttribute("data-src", item.preview);
//   imgEl.setAttribute("src", item.preview);
//   imgEl.setAttribute("data-source", item.original);
//   imgEl.setAttribute("alt", item.description);
//   linkEl.setAttribute("href", item.original);
//   itemEl.classList.add("gallery__item");
//   linkEl.classList.add("gallery__link");
//   imgEl.classList.add("gallery__image");
//   imgEl.classList.add("lazyload");
//   // itemEl.style.listStyle = "none";
//   linkEl.appendChild(imgEl);
//   itemEl.appendChild(linkEl);
//   gallery.appendChild(itemEl);
// }

function createGalery(galleryItems){
  const makeLiItem = galleryItems.map(({preview, original, description})=>
  `<li class="gallery__item" style="list-style none">
    <a class="gallery_link" href="${original}">
      <img class="gallery_image lazyload" data-src="${preview}" src="${prewiew}" 
      data-sours="${original}" alt="${description}"/>
    </a>
  </li>
  `)
  join("");
  galleryList.insertAdjacentHTML("afterbegin", makeLiItem);
}
createGalery(galleryItems);


 const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });;

