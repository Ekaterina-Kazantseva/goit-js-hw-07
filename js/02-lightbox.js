import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const imgMarkup = createImgMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imgMarkup);
galleryEl.addEventListener("click", onGalleryClick);


function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a
        class="gallery__item"
        href = '${original}';>
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          title="${description}"
        />
      </a>`;
    })
    .join('');
}
//console.log(createImgMarkup)


function onGalleryClick(event) {
    const ImgEl = event.target;

//изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.
    event.preventDefault();
    if (!ImgEl.classList.contains('gallery__image')) {
        return;
    }

//Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
//Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.
 let gallery = new SimpleLightbox('.gallery a');

  gallery.on('show.simplelightbox', function () {
    gallery.defaultOptions.captionDelay = 250;
  });
}
