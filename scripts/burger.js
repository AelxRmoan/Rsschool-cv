

    const burger = document.querySelector('.burger_button')
    const navBar = document.querySelector('.navigation_bar-ul')

    burger.addEventListener('click', () => {
        burger.classList.toggle('fa-times');
        navBar.classList.toggle('open');
    })

    window.addEventListener("resize", function() {
        if (window.matchMedia("(min-width: 500px)").matches) {
          burger.classList.remove('fa-times')
          navBar.classList.remove('open');
        }
      })



    //   document.addEventListener('DOMContentLoaded', (event) => {
    //     document.querySelectorAll('code').forEach((el) => {
    //       hljs.highlightElement(el);
    //     });
    //   });   highlight Specify
