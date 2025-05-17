let buttons = document.querySelectorAll(".filter-buttons button");
let cards = document.querySelectorAll(".card");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let category = button.getAttribute("data-category");
        cards.forEach(card => {
            if (category == "all" || card.getAttribute("data-category") == category) {
                card.classList.remove("card-hidden");
            } else {
                card.classList.add("card-hidden");
            }
        })
    })
})