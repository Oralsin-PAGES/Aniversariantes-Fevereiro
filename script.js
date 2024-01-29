document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Parabens.png",
        "Parabens2.jpeg",
        "02-02-SMP.jpeg",
        "02-02.jpeg",
        "03-02-L.jpeg",
        "04-02.jpeg",
        "05-02-L.jpeg",
        "06-02.jpeg",
        "10-02.jpeg",
        "11-02-VLM.jpeg",
        "11-02.jpeg",
        "12-02.jpeg",
        "13-02-NRN.jpeg",
        "13-02.jpeg",
        "15-02.jpeg",
        "19-02.jpeg",
        "22-02.jpeg",
        "25-02.jpeg"
        // Adicione mais imagens aqui
    ];

    let currentIndex = 0;
    const centeredImage = document.querySelector(".centered-image");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const imageUrl = images[currentIndex];
        centeredImage.src = imageUrl;
    }

    // Inicializa a troca de imagem a cada 5 segundos
    setInterval(changeImage, 5000);

    // Carrega a primeira imagem
    changeImage();
});
