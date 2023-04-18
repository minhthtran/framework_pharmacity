document.getElementById("order").addEventListener("click", function () {
  // Hiển thị hiệu ứng đợi
  document.getElementById("loading").style.display = "block";

  // Đợi 5 giây
  setTimeout(function () {
    // Ẩn hiệu ứng đợi
    document.getElementById("loading").style.display = "none";

    // Tiếp tục thực hiện hành động khi người dùng nhấp vào nút "Đặt hàng"
    // Ví dụ: chuyển hướng đến trang thanh toán hoặc gửi yêu cầu đến máy chủ
  }, 2000); // 5000ms = 5 giây
});

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