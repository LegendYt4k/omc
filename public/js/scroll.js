// Scroll to top button
const scrollToTopButton = document.getElementById("scrollToTop");
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll to bottom button
const scrollToBottomButton = document.getElementById("scrollToBottom");
scrollToBottomButton.addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});
