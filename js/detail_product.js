const quantityBoxes = document.querySelectorAll(".quantity-box");

quantityBoxes.forEach((quantityBox) => {
    const quantityInput = quantityBox.querySelector(".quantity-input");
    const quantityMinus = quantityBox.querySelector(".quantity-minus");
    const quantityPlus = quantityBox.querySelector(".quantity-plus");

    quantityMinus.addEventListener("click", () => {
        if (quantityInput.value > 1) {
            quantityInput.value--;
        } else {
            quantityInput.value = 1;
        }
    });

    quantityPlus.addEventListener("click", () => {
        quantityInput.value++;
    });
});

// See more
var shortText = document.getElementsByClassName("short_ingredient")[0];
var longText = document.getElementsByClassName("ingredient")[0];
var readMoreBtn = document.getElementById("btn_seemore");
var readLessBtn = document.getElementById("btn_seeless");

readMoreBtn.addEventListener("click", function() {
  shortText.style.display = "none";
  longText.style.display = "block";
});

readLessBtn.addEventListener("click", function() {
  shortText.style.display = "block";
  longText.style.display = "none";
});