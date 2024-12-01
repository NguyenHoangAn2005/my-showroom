/*const swiper = new Swiper('.swiper-container', {
  loop: true, // Vòng lặp
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000, // Tự động trượt sau 3 giây
  },
});
*/
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");

    // Ẩn tất cả các slide
    slides.forEach((slide) => {
        slide.style.display = "none";
        slide.style.opacity = "0";
    });

    // Hiển thị slide hiện tại với hiệu ứng mờ dần
    slides[index].style.display = "block";
    setTimeout(() => {
        slides[index].style.opacity = "1";
    }, 50);
}

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slide");

    // Cập nhật slide hiện tại
    currentSlide += direction;

    // Quay vòng khi vượt quá số slide
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

// Hiển thị slide đầu tiên khi tải trang
showSlide(currentSlide);


