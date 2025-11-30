document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('alphabet-container');

    aslAlphabet.forEach(item => {
        // Создаем HTML-карточку для каждого элемента
        const cardHtml = `
            <div class="col">
                <div class="card h-100 shadow-sm text-center">
                    <img src="${item.image}" class="card-img-top p-3" alt="Жест для буквы ${item.letter}" style="height: 200px; object-fit: contain;">
                    <div class="card-body">
                        <h5 class="card-title display-4">${item.letter}</h5>
                        <p class="card-text text-muted">${item.description}</p>
                    </div>
                </div>
            </div>
        `;
        // Добавляем карточку в контейнер
        container.innerHTML += cardHtml;
    });
});