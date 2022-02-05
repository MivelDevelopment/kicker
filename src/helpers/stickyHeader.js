export const stickyHeader = () => {
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
      document.querySelector('.logo-img').style.maxWidth = "100px";
      document.querySelector('header').classList.add('sticky-header');
    } else {
      document.querySelector('.logo-img').style.maxWidth = "200px";
      document.querySelector('header').classList.remove('sticky-header');
    }
  }
}