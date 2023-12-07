document.addEventListener("DOMContentLoaded", function () {
    const candles = document.querySelectorAll(".candle");
    const hiddenMessage = document.getElementById("hiddenMessage");

    candles.forEach((candle, index) => {
        candle.addEventListener("click", function () {
            if (candle.classList.contains("unlit")) {
                candle.classList.remove("unlit");
                candle.classList.add("lit");
                checkCandlesLit(); 
            }
        });
    });

    function checkCandlesLit() {
        const allCandlesLit = Array.from(candles).every(candle => candle.classList.contains("lit"));
        if (allCandlesLit) {
            hiddenMessage.style.display = "block"; 
        }
    }
});
