class Footer {
    currentYear() {
         return new Date().getFullYear();
    }
    render() {
        const html = `
       <div class="footer-container">
           <div class="footer-container-text">&#169; ООО "Пицца - шмицца "</div>
           <div class="footer-container-text">${this.currentYear()}</div>
           
       </div>
       `;
    ROOT_FOOTER.innerHTML = html;


    }
}
const footer = new Footer();
footer.render();