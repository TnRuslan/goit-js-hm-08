import { galleryItems } from './gallery-items';

export const galleryItemsEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
          <img
              class="gallery__image"
              src="${preview}"
              alt="${description}" />
        </a>`
  )
  .join('');
