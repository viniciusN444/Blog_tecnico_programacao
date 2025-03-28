document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", function () {
        const faqItem = this.parentNode;
        faqItem.classList.toggle("active");
    });
});