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



setTimeout(function() {
    document.querySelector('.black_square').style.opacity = '1';
}, 3000);




  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '100000000000';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let sparkles = [];

  const colors = [
    'rgba(247, 176, 204', 
    'rgba(200, 220, 255', 
    'rgba(220, 200, 255', 
    'rgba(180, 230, 255', 
    'rgba(255, 200, 220'
  ];

  document.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 4; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      sparkles.push({
        x: e.clientX + (Math.random() - 0.5) * 15,
        y: e.clientY + (Math.random() - 0.5) * 15,
        size: Math.random() * 6 + 2,
        speedX: (Math.random() - 0.5) * 1.2,
        speedY: (Math.random() - 0.5) * 1.2 - 0.3,
        life: 0.5 + Math.random() * 0.5,
        color: color,
        angle: Math.random() * Math.PI * 2
      });
    }
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = sparkles.length - 1; i >= 0; i--) {
      const s = sparkles[i];
      
      s.x += s.speedX;
      s.y += s.speedY;
      s.life -= 0.008;
      s.size *= 0.99;
      s.angle += 0.02;
      
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.angle);
      
      ctx.beginPath();
      ctx.moveTo(-s.size, 0);
      ctx.lineTo(s.size, 0);
      ctx.strokeStyle = s.color + ', ' + (s.life * 0.5) + ')';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(0, -s.size);
      ctx.lineTo(0, s.size);
      ctx.strokeStyle = s.color + ', ' + (s.life * 0.5) + ')';
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(0, 0, s.size * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = s.color + ', ' + (s.life * 0.7) + ')';
      ctx.fill();
      
      ctx.restore();
      
      if (s.life <= 0.01 || s.size < 0.5) {
        sparkles.splice(i, 1);
      }
    }
    
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

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

document.addEventListener('mousemove', (e) => {
  const poliv2 = document.querySelector('.poliv2');
  const flowerSmall = document.querySelector('.flower_small');
  const flowerGrow = document.querySelector('.flower_grow');
  
  if (!poliv2 || !flowerSmall || !flowerGrow) return;
  if (poliv2.style.opacity !== '1') return;
  
  let r1 = poliv2.getBoundingClientRect();
  let r2 = flowerSmall.getBoundingClientRect();
  
  if (r1.left < r2.right && r1.right > r2.left && 
      r1.top < r2.bottom && r1.bottom > r2.top) {
    flowerSmall.style.display = 'none';
    flowerGrow.style.display = 'block';
  }
});

});
