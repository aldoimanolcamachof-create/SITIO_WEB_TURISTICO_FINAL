// SCROLL SUAVE
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});

// MOSTRAR TEXTO
function mostrar() {
    let texto = document.getElementById("texto").value;
    document.getElementById("resultado").innerText = texto;
}
