document.getElementById("order").addEventListener("click", function() {
    // Hiển thị hiệu ứng đợi
    document.getElementById("loading").style.display = "block";
  
    // Đợi 5 giây
    setTimeout(function() {
      // Ẩn hiệu ứng đợi
      document.getElementById("loading").style.display = "none";
  
      // Tiếp tục thực hiện hành động khi người dùng nhấp vào nút "Đặt hàng"
      // Ví dụ: chuyển hướng đến trang thanh toán hoặc gửi yêu cầu đến máy chủ
    }, 2000); // 5000ms = 5 giây
  });
  