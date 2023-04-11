const itemSliderbar = document.querySelectorAll(".cartegory-left-li")
itemSliderbar.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("block")
  })
})

//LeftList
// Lấy danh sách các phần tử cần thay đổi background-image
var myElements = document.getElementsByClassName("icon");

// Thêm sự kiện click cho từng phần tử
for (var i = 0; i < myElements.length; i++) {
  // Khởi tạo biến isClicked cho mỗi phần tử là false
  myElements[i].isClicked = false;

  myElements[i].addEventListener("click", function() {
    // Nếu phần tử chưa được click, thay đổi background-image thành new background-image
    if (!this.isClicked) {
      this.style.backgroundImage = "url('./img/angle-small-top.png')";
      this.isClicked = true;
    } 
    // Nếu phần tử đã được click, thay đổi background-image thành old background-image
    else {
      this.style.backgroundImage = "url('./img/angle-small-down.png')";
      this.isClicked = false;
    }
  });
}