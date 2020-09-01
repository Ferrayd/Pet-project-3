const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Нургуш',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
    },
    {
        name: 'Тулиновка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
    },
    {
        name: 'Остров Желтухина',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
    },
    {
        name: 'Владивосток',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
    }
]

const placesList = document.querySelector('.places-list');
const openForm = document.querySelector('.user-info__button');
const closeForm = document.querySelector('.popup__close');
const addCard = document.querySelector('.popup__button');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');


function deleteCard(event) {
    if (event.target.classList.contains('place-card__delete-icon')) {
        event.currentTarget.remove();
    }
};

function likeCard(event) {
    if (event.target.classList.contains('place-card__like-icon')) {
        event.target.classList.toggle('place-card__like-icon_liked');
    }
};

function createCards(name, url) {

    const placeCard = document.createElement('div');
    placeCard.classList.add('place-card');
    const cardImg = document.createElement('div');
    cardImg.classList.add('place-card__image');
    const cardDel = document.createElement('button');
    cardDel.classList.add('place-card__delete-icon');
    const cardDescription = document.createElement('div');
    cardDescription.classList.add('place-card__description');
    const cardName = document.createElement('h3');
    cardName.classList.add('place-card__name');
    const cardLike = document.createElement('button');
    cardLike.classList.add('place-card__like-icon');

    cardImg.appendChild(cardDel);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(cardLike);
    placeCard.appendChild(cardImg);
    placeCard.appendChild(cardDescription);

    cardImg.style.backgroundImage = `url(${url})`;
    cardName.textContent = name;

    placeCard.addEventListener('click', deleteCard);
    placeCard.addEventListener('click', likeCard);
    return placeCard;
};

function togglePopup() {
    popup.classList.toggle('popup_is-opened');
};

function renderCard(name, link) {
    const card = createCards(name, link);
    placesList.appendChild(card);
};

function standartCard() {
    initialCards.forEach(function(item) {
        renderCard(item.name, item.link);
    });
};

function addNewCard(event) {
    event.preventDefault();
    const cardName = form.elements.name;
    const cardLink = form.elements.link;
    const placedCard = renderCard(cardName.value, cardLink.value);
    form.reset();
    togglePopup();
};

closeForm.addEventListener('click', togglePopup);
openForm.addEventListener('click', togglePopup);
form.addEventListener('submit', addNewCard);

standartCard();