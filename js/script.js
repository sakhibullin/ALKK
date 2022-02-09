const swiper = new Swiper('.slides', {
    speed: 400,
    spaceBetween: 100,
    loop:true,
    autoplay: {
      delay: 5000,
    },
  });

  const swiper2 = new Swiper('.rates__swiper', {
    speed: 400,
    spaceBetween: 20,
    width:739,
    // loop:true,
    // slidesPerView: 4,
    scrollbar: {
      el: ".bar1",
      hide: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        width:230,
        spaceBetween: 20,
        scrollbar: {
          el: ".bar1",
          hide: false,
          dragSize:180
        },
      },
      480: {
        slidesPerView: 2,
        width:480,
        spaceBetween: 20,
        scrollbar: {
          el: ".bar1",
          hide: false,
          dragSize:180
        },
      },
      1000: {
        slidesPerView: 3,
        scrollbar: {
          el: ".bar1",
          hide: false,
        },
      },
      20000:{
        slidesPerView:4,
        scrollbar: {
          el: ".bar1",
          hide: true,
        },
      }
    }
  });  

  const swiperPortfolio = new Swiper('.portfolio__swiper', {
    speed: 400,
    spaceBetween: 20,
    width:739,
    slidesPerView: 4,
    scrollbar: {
      el: ".bar1",
      hide: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        width:230,
        spaceBetween: 20,
        scrollbar: {
          el: ".bar2",
          hide: false,
          dragSize:180
        },
      },
      480: {
        slidesPerView: 2,
        width:480,
        spaceBetween: 20,
        scrollbar: {
          el: ".bar2",
          hide: false,
          dragSize:180
        },
      },
      1000: {
        slidesPerView: 3,
        scrollbar: {
          el: ".bar2",
          hide: false,
        },
      },
      20000:{
        slidesPerView:4,
        scrollbar: {
          el: ".bar2",
          hide: true,
        },
      }
    }

  });  



document.querySelectorAll("#cost")[0].addEventListener('change',f1)  

function f1(){
  let cost = document.querySelectorAll("#cost")[0].value
  let text = document.querySelectorAll('.cost__val')[0]
  text.textContent = cost
  let line = document.querySelectorAll('#cost')[0]
  line.style.cssText = `background:linear-gradient(90deg, #EAECEF 0%, rgba(255, 4, 4, 0.882716) ${cost/1000}%, rgba(255, 4, 4, 0) ${cost/1000}%), #F5F7F9;`
}


