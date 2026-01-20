const dataContainer = document.getElementById('data');

cardData.forEach(card => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card_container', 'col-md-6', 'mb-2');

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const imgElement = document.createElement('img');
    imgElement.src = card.imgSrc;
    imgElement.alt = card.title;
    imgElement.classList.add('card_img');
    imgElement.style.width = '100%';

    const cardCenter = document.createElement('div');
    cardCenter.classList.add('card_center');

    const cardText = document.createElement('div');
    cardText.classList.add('card_text');
    cardText.innerHTML = `${card.description} <br><a href="${card.link}" target="_blank">Click here to view</a>`;

    cardCenter.appendChild(cardText);

    cardElement.appendChild(imgElement);
    cardElement.appendChild(cardCenter);

    cardContainer.appendChild(cardElement);

    dataContainer.appendChild(cardContainer);
});