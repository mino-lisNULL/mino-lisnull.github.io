(function() {
  const fh = document.getElementById('fixed-header');
  const fh2 = document.getElementById('fixed-header2');
  const fh3 = document.getElementById('fixed-header3');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1) {
      fh.classList.add('is-show');
      fh2.classList.add('is-show2');
      fh3.classList.add('is-show3');
    } else {
      fh.classList.remove('is-show');
      fh2.classList.remove('is-show2');
      fh3.classList.remove('is-show3');      
    }
  });
}());