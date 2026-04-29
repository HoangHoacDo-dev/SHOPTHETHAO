const scrollBtn = document.getElementById("scroll-btn");
const scrollIcon = document.getElementById("scroll-icon");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // 1. Hiện nút khi cuộn xuống quá 300px
  if (scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }

  // 2. Logic đổi chiều mũi tên
  if (scrollTop > lastScrollTop) {
    // Đang cuộn xuống -> Mũi tên nghoảnh xuống
    scrollIcon.classList.add("rotate-down");
  } else {
    // Đang cuộn lên -> Mũi tên nghoảnh lên
    scrollIcon.classList.remove("rotate-down");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// 3. Khi click vào thì cuộn lên đầu trang mượt mà
scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

$(document).ready(function () {
  // Gọi đến class mà bạn đã đặt ở thẻ bao bọc sản phẩm
  $(".product-slider-activation").slick({
    slidesToShow: 4, // Số sản phẩm hiện ra trên màn hình máy tính
    slidesToScroll: 1, // Mỗi lần kéo/bấm sẽ nhảy qua mấy sản phẩm
    infinite: true, // Cho phép trượt vòng tròn (hết lại quay về đầu)
    arrows: true, // Hiện 2 nút mũi tên trái phải
    draggable: true, // QUAN TRỌNG: Cho phép nắm chuột kéo sang phải/trái
    swipeToSlide: true, // Giúp cảm giác kéo bằng tay/chuột mượt hơn
    autoplay: true, // Tự động chuyển sản phẩm sau vài giây
    autoplaySpeed: 2000, // Tốc độ tự chuyển (3000 = 3 giây)

    // Cấu hình hiển thị trên điện thoại
    responsive: [
      {
        breakpoint: 1024, // Dưới 1024px (Máy tính bảng)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Dưới 768px (Điện thoại)
        settings: {
          slidesToShow: 2, // Hiện 2 sản phẩm như layout col-6 của bạn
        },
      },
    ],
  });
});
