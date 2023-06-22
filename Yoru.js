var swiper = new Swiper(".menu_slide", {
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor:true,
    autoplay: {
    delay: 7500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    loop: true,
    breakpoints: {
        450: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      },
    });

    var swiper = new Swiper(".home_slide", {
      spaceBetween: 30,
      centeredSlides: true,
      grabCursor:true,
      autoplay: {
      delay: 7500,
      disableOnInteraction: false,
      },
      pagination: {
      el: ".swiper-pagination",
      clickable: true,
      },
      loop: true,
      });

    $(document).ready(function () {
      $(".filter-item").click(function () {
          const value = $(this).attr("data-filter");
          if (value == "all"){
              $(".post-box").show("1000")
          } else{
              $(".post-box")
                  .not("." + value)
                  .hide(1000);
              $(".post-box")
              .filter("." + value)
              .show("1000")
          }
      });
      $(".filter-item").click(function () {
          $(this).addClass("active-filter").siblings().removeClass("active-filter")
      });
  });
  /* LOGIN */
  const formOpenBtn = document.querySelector("#form-open"),
  homeback = document.querySelector(".homeback"),
  formContainer = document.querySelector(".form-container"),
  formCloseBtn = document.querySelector(".form-close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".password-hide");

  formOpenBtn.addEventListener("click", () => homeback.classList.add("show"));
  formCloseBtn.addEventListener("click", () => homeback.classList.remove("show"));

  pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
      let getPwInput = icon.parentElement.querySelector("input");
      if (getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("bx-hide", "bx-show");
      } else {
        getPwInput.type = "password";
        icon.classList.replace("bx-show", "bx-hide");
      }
    });
  });

  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
  });
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
  });

  /*Read more */
  let more = document.querySelectorAll('.more');
  for (let i = 0; i<more.length; i++) {
    more[i].addEventListener('click', function(){
      more[i].parentNode.classList.toggle('active')
    })
  }

