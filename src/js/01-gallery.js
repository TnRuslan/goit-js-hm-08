// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
import { galleryItemsEl } from './create-gallery';
// Change code below this line

console.log(galleryItems);

const galleryBoxEl = document.querySelector('.gallery');

galleryBoxEl.insertAdjacentHTML('afterbegin', galleryItemsEl);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
