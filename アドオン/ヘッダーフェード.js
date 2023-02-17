(function() {
  const fh = document.getElementById('fixed-header');
  const fh2 = document.getElementById('fixed-header2');
  const fh3 = document.getElementById('fixed-header3');
  const fh4 = document.getElementById('fixed-header4');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1) {
      fh.classList.add('is-show');
      fh2.classList.add('is-show2');
      fh3.classList.add('is-show3');
      fh4.classList.add('is-show4');
    } else {
      fh.classList.remove('is-show');
      fh2.classList.remove('is-show2');
      fh3.classList.remove('is-show3'); 
      fh4.classList.remove('is-show4');      
    }
  });
}());