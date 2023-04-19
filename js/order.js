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
const orderBtn = document.getElementById("order");
const successMessage = document.getElementById("order-success");

orderBtn.addEventListener("click", function () {
  // Hiển thị thông báo thành công
  successMessage.style.display = "block";

  // Tự động ẩn thông báo sau 3 giây
  setTimeout(function () {
    successMessage.style.display = "none";
  }, 3000);
});

//Confirm delete
const btnDelete = document.getElementById("btn-delete");
const confirmDelete = document.getElementById("confirm-delete");
const btnClose = confirmDelete.querySelector(".btn.close");

btnDelete.addEventListener("click", function () {
  // Hiển thị div confirm-delete
  confirmDelete.style.display = "block";
});

btnClose.addEventListener("click", function () {
  // Đóng div confirm-delete
  confirmDelete.style.display = "none";
});

//delete success
const delsuccess = document.getElementById("btn-delete-success");
const Delete = document.getElementById("delete-success");

delsuccess.addEventListener("click", function () {
  // Hiển thị thông báo thành công
  Delete.style.display = "block";

  // Tự động ẩn thông báo sau 3 giây
  setTimeout(function () {
    Delete.style.display = "none";
    confirmDelete.style.display = "none";
  }, 1000);
});

// Location delivery
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const atHome = document.getElementById("at-home");
const atThePharmacy = document.getElementById("at-the-pharmacy");

option1.addEventListener("click", function () {
  atHome.style.display = "flex";
  atThePharmacy.style.display = "none";
});

option2.addEventListener("click", function () {
  atHome.style.display = "none";
  atThePharmacy.style.display = "flex";
});

// Mở receive
const addPharmacyBtn = document.getElementById("btn-add-pharmacy");
const receiverInfos = document.getElementById("receiver-infor");

addPharmacyBtn.addEventListener("click", function() {
  receiverInfos.style.display = "block";
});

// Xác nhận khi đã nhập thông tin
const confirmBtn = document.getElementById("confirm-add-btn");
const receiverInfo = document.getElementById("receiver-infor");

confirmBtn.addEventListener("click", function() {
  receiverInfo.style.display = "none";
});