
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
  return galleryItems.map(({preview, original, description}) =>
  `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`
  )
  .join("");
  // galleryList.insertAdjacentHTML("afterbegin", makeLiItem);
}

const galleryMarkup = createGalery(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup)


 let modalImg = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });;

