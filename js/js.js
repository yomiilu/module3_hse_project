document.addEventListener("DOMContentLoaded", function(){
  const girl1 = document.querySelector('.girl1');
  if (girl1) {
    setInterval(() => {
      girl1.style.opacity = '0';
      setTimeout(() => {
        girl1.style.opacity = '1';
      }, 200);
    }, 2000);
  }




  const flower1 = document.querySelector('.flower1');
  const flower1_1 = document.querySelector('.flower1_1');
  const flower2 = document.querySelector('.flower2');
  const flower2_1 = document.querySelector('.flower2_1');
  const flower3 = document.querySelector('.flower3');
  const flower3_1 = document.querySelector('.flower3_1');
  const flower4 = document.querySelector('.flower4');
  const flower4_1 = document.querySelector('.flower4_1');
  const flower5 = document.querySelector('.flower5');

  const flowers = [flower1, flower1_1, flower2, flower2_1, flower3, flower3_1, flower4, flower4_1, flower5];

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const scrollLimit = window.innerWidth * 0.7;
    let scrollProgress = scrollTop / scrollLimit;
    scrollProgress = Math.max(0, Math.min(scrollProgress, 1));

    flowers.forEach((flower) => {
      if (flower) {
        flower.style.setProperty('--scroll-progress', scrollProgress);
      }
    });
  });






  const dialogClosed = document.querySelector('.dialog_closed');
  const dialogOpened = document.querySelector('.dialog_opened');
  const text = document.querySelector('.text');
  const textik = document.querySelector('.textik1');
  
  if (dialogClosed && dialogOpened && text && textik) {
    dialogClosed.style.display = 'none';
    dialogOpened.style.display = 'block';
    text.style.display = 'block';
    textik.style.display = 'block';
    
    dialogOpened.addEventListener('click', function() {
      dialogOpened.style.display = 'none';
      text.style.display = 'none';
      textik.style.display = 'none';
      dialogClosed.style.display = 'block';
    });
    
    dialogClosed.addEventListener('click', function() {
      dialogClosed.style.display = 'none';
      dialogOpened.style.display = 'block';
      text.style.display = 'block';
      textik.style.display = 'block';
    });
  }





  
const poliv = document.querySelector('.poliv');
const poliv2 = document.querySelector('.poliv2');

if (poliv && poliv2) {
  let isDragging = false;
  poliv.draggable = false;

  poliv.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    poliv.style.opacity = '0';
    poliv2.style.opacity = '1';
    poliv2.style.position = 'fixed';
    poliv2.style.marginLeft = '0';
    poliv2.style.marginTop = '0';
    poliv2.style.left = e.clientX - poliv2.offsetWidth / 2 + 'px';
    poliv2.style.top = e.clientY - poliv2.offsetHeight / 2 + 'px';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    poliv2.style.left = e.clientX - poliv2.offsetWidth / 2 + 'px';
    poliv2.style.top = e.clientY - poliv2.offsetHeight / 2 + 'px';
  });

  const stopDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    poliv.style.opacity = '1';
    poliv2.style.opacity = '0';
    poliv2.style.left = '';
    poliv2.style.top = '';
    poliv2.style.position = '';
    poliv2.style.marginLeft = '';
    poliv2.style.marginTop = '';
  };

  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('mouseleave', stopDrag);
}

});
