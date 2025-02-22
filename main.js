document.addEventListener('DOMContentLoaded', function () {
    // Данные о составе команды
    const teamData = [
        { name: "Максим Сивков", position: "Вратарь", photo: "https://avatars.mds.yandex.net/i?id=be9c4520269df72af5198e19832589e1291fe945-7065781-images-thumbs&n=13" },
        { name: "Егор Талипов", position: "Защитник", photo: "https://avatars.mds.yandex.net/i?id=0f6366220f80b828a35e8bc036c02b82a248ea1d-12472731-images-thumbs&n=13" },
        { name: "Шлёнский Виталий", position: "Нападающий", photo: "https://avatars.mds.yandex.net/i?id=06c83f017019935157f229ede1afb9e6df4a744f-9828183-images-thumbs&n=13" },
        { name: "Станислав Жигалов", position: "Нападающий", photo: "https://avatars.mds.yandex.net/i?id=2accad07363a98c4b31b5b66bb10cf2ef783aba9-10393597-images-thumbs&n=13" },
        { name: "Рычин Илья", position: "Нападающий", photo: "https://avatars.mds.yandex.net/i?id=6d67e06a5ee6ba484e69c63c6b2fe548b9bdc649b294e803-10896978-images-thumbs&n=13" }
    ];

    // Данные о новостях
    const newsData = [
        { title: "Мы жестоко отлетели от СКУФа!", date: "никогда такого не было", content: "Наша команда проебала со счетом 93:7" },
        { title: "Новый долбаёб в команде", date: "постоянно какие то дауны приходят", content: "Мы рады представить новую шестёрку в команде" }
    ];

    const hystoryData = [
        { title: "Недавно клубу исполнилось 25 или 35 лет. Я хз честно)", date: "", content: "" },
    ]
    // Загрузка состава команды
    const teamGrid = document.getElementById('team-grid');
    teamData.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'team-member';
        playerCard.innerHTML = `
            <img src="${player.photo}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p>${player.position}</p>
        `;
        teamGrid.appendChild(playerCard);
    });

    // Загрузка новостей
    const newsGrid = document.getElementById('news-grid');
    newsData.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-item';
        newsCard.innerHTML = `
            <h3>${news.title}</h3>
            <p><em>${news.date}</em></p>
            <p>${news.content}</p>
        `;
        newsGrid.appendChild(newsCard);
    });

    const hystoryGrid = document.getElementById('hystory-grid');
    newsData.forEach(history => {
        const hystoryCard = document.createElement('div');
        hystoryCard.className = 'hystory-item';
        hystoryCard.innerHTML = `
            <h3>${hystory.title}</h3>
            <p><em>${hystory.date}</em></p>
            <p>${hystory.content}</p>
        `;
        hystoryGrid.appendChild(hystoryCard);
    });
});
