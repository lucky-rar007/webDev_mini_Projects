const thumbnails = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        const fullImage = thumbnail.src.replace("-thumbnail", "");

        lightboxImage.src = fullImage;
        lightbox.style.display = "flex";
    });
});

function closeLightbox() {
    lightbox.style.display = "none";
    lightboxImage.src = "";
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});