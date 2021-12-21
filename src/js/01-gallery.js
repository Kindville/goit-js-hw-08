// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';


const galleryEl = document.querySelector('.gallery')
const galleryMarkUp =createGallery(galleryItems)
    galleryEl.insertAdjacentHTML('beforeend', galleryMarkUp)

function createGallery(images) {
    return images
        .map(({ preview, original, description }) => {
            return `<div class= 'gallery__item'>
             <a class="gallery__item"
                   href="${original}">
                   <img class="gallery__image"
                    src="${preview}"
                    alt="${description}" />
                  </a>
                  </div>`
        })
        .join('');
}

let gallery = new SimpleLightbox('.gallery a', {captionPosition: 'bottom', captionsData: 'alt', captionDelay: 250});
gallery.on('show.simplelightbox', function  (e) {
     e.preventDefault()
});
console.log(galleryItems);
