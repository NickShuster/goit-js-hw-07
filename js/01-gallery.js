import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.setAttribute('data-source', item.original);
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

function openModal(url) {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
  `);

  instance.show();
}

galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  galleryItem.addEventListener('click', (e) => {
    e.preventDefault();
    const imageUrl = item.original;
    openModal(imageUrl);
  });
  gallery.appendChild(galleryItem);
});