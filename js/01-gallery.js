import { galleryItems } from './gallery-items.js';

// Change code below this line
//console.log(galleryItems);

//Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
const galleryEl = document.querySelector('.gallery');
const imgMarkup = createImgMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imgMarkup);
galleryEl.addEventListener("click", onGalleryClick);


function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a
        class="gallery__link"
        href = '${original}';>
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}
//console.log(createImgMarkup)


function onGalleryClick(event) {
    const ImgEl = event.target;

//изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.
    event.preventDefault();
    if (!ImgEl.classList.contains("gallery__image")) {
        return;
    }

//Открытие модального окна по клику на элементе галереи.    
    const modal = basicLightbox.create(
    `<img src="${
        ImgEl.closest("img").dataset.source}" 
        width="800" height="600">`
  );
   modal.show();
}

//Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для программного закрытия модального окна.
document.addEventListener("keydown", (evt) => {
  const pushEsc = evt.code === "Escape";
  const onModal = document.querySelector(".basicLightbox");
  if (!onModal) {
    return;
  }
  if (pushEsc) {
    onModal.remove();
  }
});