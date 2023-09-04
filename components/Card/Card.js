class Card {
    closeCard() {
        document.querySelector('.modal-overlay').classList.add('inactive');
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, description,  price}) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr>
                    <td class="card-element__name">⚡️ ${name}</td>
                    <td class="card-element__price">${price} &#8381</td>
                </tr>
                `;
                sumCatalog =sumCatalog + price;

            }
        });
        const html = `
            <div class="modal-overlay">
                <div class="card-container">
                    <div class="card__close" onclick="cardPage.closeCard()"></div>
                    <table>
                        ${htmlCatalog}
                        <tr>
                            <td class="card-element__name">💥 Сумма:</td>
                            <td class="card-element__price">${sumCatalog.toLocaleString()} &#8381</td>
                        </tr>
                    </table>
                </div>
            </div>
        `;
        ROOT_CARD.innerHTML = html;

    }
}

const cardPage = new Card();
