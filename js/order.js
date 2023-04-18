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

// Đổi màu radion location
// Lấy tất cả các radio button và label
var radioButtons = document.querySelectorAll('input[type="radio"]');
var labels = document.querySelectorAll('.radio-select label');

// Tìm radio button được chọn ban đầu và đặt lớp 'selected' cho label tương ứng
var checkedRadioButton = document.querySelector('input[name="options"]:checked');
checkedRadioButton.parentNode.classList.add('selected');

// Xác định radio button được chọn và đặt lớp .selected cho label tương ứng
for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('click', function () {
    // Xóa lớp 'selected' khỏi tất cả các label trước đó
    for (var j = 0; j < labels.length; j++) {
      labels[j].classList.remove('selected');
    }
    // Đặt lớp 'selected' cho label tương ứng với radio button được chọn
    var checkedRadioButton = document.querySelector('input[name="options"]:checked');
    checkedRadioButton.parentNode.classList.add('selected');
  });
}

// Đổi màu payment
// Lấy tất cả các radio button và label
var radiobtns = document.querySelectorAll('input[type="radio"]');
var label = document.querySelectorAll('.payment label');

// Tìm radio button được chọn ban đầu và đặt lớp 'selected' cho label tương ứng
var checkedRadiobtn = document.querySelector('input[name="payment-options"]:checked');
checkedRadiobtn.parentNode.classList.add('selected-label');

// Xác định radio button được chọn và đặt lớp .selected cho label tương ứng
for (var i = 0; i < radiobtns.length; i++) {
    radiobtns[i].addEventListener('click', function () {
    // Xóa lớp 'selected' khỏi tất cả các label trước đó
    for (var j = 0; j < label.length; j++) {
      label[j].classList.remove('selected-label');
    }
    // Đặt lớp 'selected' cho label tương ứng với radio button được chọn
    var checkedRadiobtn = document.querySelector('input[name="payment-options"]:checked');
    checkedRadiobtn.parentNode.classList.add('selected-label');
  });
}


// Đặt hàng thành công
// Lấy nút đặt hàng
var orderButton = document.querySelector('.order');

// Thêm sự kiện click cho nút đặt hàng
orderButton.addEventListener('click', function () {
  // Hiển thị thông báo đặt hàng thành công
  var orderSuccess = document.querySelector('.order-success');
  orderSuccess.style.display = 'block';
});