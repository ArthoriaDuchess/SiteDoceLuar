function abrirPagina(link) {
    window.location.href = link;
}
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        alert("Você clicou em uma vela!");

    });

});