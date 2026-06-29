const buttons = document.querySelectorAll(".favorite-icon");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("filled");

        btn.innerHTML = btn.classList.contains("filled")
            ? "&#10084;"
            : "&#9825;";
    });
});