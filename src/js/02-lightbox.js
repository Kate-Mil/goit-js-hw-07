import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const markupGallery = galleryItems.map(({preview,original,description}) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`).join('');

galleryContainer.innerHTML = markupGallery;


const lightbox = new SimpleLightbox('.gallery__item', {
    captions: true, // увімкнути підписи
    captionDelay: 250, // затримка відображення підпису (мс)
    captionsData: 'alt', // використовувати дані з атрибута alt для підпису
    captionPosition: 'bottom' // розташування підпису
});

