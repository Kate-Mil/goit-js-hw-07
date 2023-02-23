import { galleryItems } from './gallery-items.js';

// Change code below this line


const galleryContainer = document.querySelector('.gallery');


const markupGallery = galleryItems.map(({preview, original, description}) => 
`<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`).join('');
galleryContainer.insertAdjacentHTML("afterbegin", markupGallery);


galleryContainer.addEventListener('click', onClickOpenOriginalImage);

function onClickOpenOriginalImage (event){
    preventDefaultActionOfLinks(event);

        if (event.target.nodeName !== "IMG"){
            return;
        };

const instance = basicLightbox.create(`<img src="${event.target.dataset.source}"
width="1280" height="960">`);
instance.show();

galleryContainer.addEventListener('keydown', (event) => {
    if (event.code === "Escape") {
        instance.close();
    };
});
};

function preventDefaultActionOfLinks (event){
    event.preventDefault();
};

