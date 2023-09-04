class Header {

    handlerOpenCardPage() {
        cardPage.render();
    }
    mod = document.querySelector('.modal-overlay');
    addClass() {
        console.log('hello')
        this.mod.classList.remove('inactive');
    }
    render(count) {
        const html = `
        <div class="header-container">
            <div class="header-counter" onclick="headerPage.handlerOpenCardPage()">🔥 ${count}</div>
        </div>
        `;
        ROOT_HEADER.innerHTML = html;

    }
}

const headerPage = new Header();
const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);