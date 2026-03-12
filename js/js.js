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
    const sound2 = document.getElementById('watering');
    sound2.volume=0.3;
          if (sound2) {
              sound2.currentTime = 0;
              sound2.play().catch(e => console.log('ошибка!', e));
    }
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

    document.querySelector('.black_square').style.opacity = '0';
  }
});
const potions = document.querySelectorAll('[data-index]');


if (potions.length > 0) {
    let itemsOrder = [];
    for (let i = 0; i < 15; i++) {
        itemsOrder.push(i);
    }
    
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    
    const potionImages = [
        'img/potion_pink.svg',
        'img/potion_pink.svg',
        'img/potion_pink.svg',
        'img/potion_pink.svg',
        'img/potion_pink.svg',
        'img/potion_blue.svg',
        'img/potion_blue.svg',
        'img/potion_blue.svg',
        'img/potion_blue.svg',
        'img/potion_blue.svg',
        'img/potion_purple.svg',
        'img/potion_purple.svg',
        'img/potion_purple.svg',
        'img/potion_purple.svg',
        'img/potion_purple.svg'
    ];
    
        function shakeFlask(flaskElement) {
        console.log('Трясем!', flaskElement);
        flaskElement.classList.add('shaking');
        setTimeout(() => {
            flaskElement.classList.remove('shaking');
        }, 300);
    }

    function updatePotions() {
      
        potions.forEach((potion, index) => {
            const img = potion.querySelector('img');
            const colorIndex = itemsOrder[index];
            const src = potionImages[colorIndex];

            img.src = src;

            img.classList.remove('potion_pink', 'potion_blue', 'potion_purple');

            if (src.includes('pink')) {
                img.classList.add('potion_pink');
            } else if (src.includes('blue')) {
                img.classList.add('potion_blue');
            } else if (src.includes('purple')) {
                img.classList.add('potion_purple');
            }
        });
    }
    
    itemsOrder = shuffleArray(itemsOrder);
    updatePotions();
    
    let draggedIndex = null;
    let draggedElement = null;
    let clone = null;
    
    potions.forEach((potion) => {
        potion.addEventListener('mousedown', function(e) {
            e.preventDefault();
            draggedIndex = parseInt(this.getAttribute('data-index'));
            draggedElement = this;
            
            clone = this.cloneNode(true);
            clone.style.position = 'fixed';
            clone.style.zIndex = '100000000000';
            clone.style.width = this.offsetWidth + 'px';
            clone.style.height = this.offsetHeight + 'px';
            clone.style.margin = '0';
            clone.style.left = e.clientX - this.offsetWidth/2 + 'px';
            clone.style.top = e.clientY - this.offsetHeight/2 + 'px';
            clone.style.pointerEvents = 'none';
            clone.style.opacity = '0.8';
            document.body.appendChild(clone);
            
            this.style.opacity = '0.5';
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!clone) return;
            e.preventDefault();
            clone.style.left = e.clientX - clone.offsetWidth/2 + 'px';
            clone.style.top = e.clientY - clone.offsetHeight/2 + 'px';
        });
        
        potion.addEventListener('mouseup', function(e) {
            if (draggedIndex === null) return;
            
            const targetIndex = parseInt(this.getAttribute('data-index'));
            
            if (draggedIndex !== targetIndex) {
                [itemsOrder[draggedIndex], itemsOrder[targetIndex]] = 
                [itemsOrder[targetIndex], itemsOrder[draggedIndex]];
                updatePotions();

                const sound = document.getElementById('potion_sound');
                if (sound) {
                    sound.currentTime = 0;
                    sound.play().catch(e => console.log('ошибка!', e));
                }


                console.log('Должно трястись!'); 
                shakeFlask(this);
                if (draggedElement) {
                    shakeFlask(draggedElement);
                }

            }
            
            if (clone) {
                clone.remove();
                clone = null;
            }
            if (draggedElement) {
                draggedElement.style.opacity = '1';
            }
            
            draggedIndex = null;
            draggedElement = null;
        });
    });
    
    document.addEventListener('mouseup', function() {
        if (clone) {
            clone.remove();
            clone = null;
        }
        if (draggedElement) {
            draggedElement.style.opacity = '1';
        }
        draggedIndex = null;
        draggedElement = null;
    });}




    const close_button = document.querySelector('.close_button');
    const game3 = document.querySelector('.game3');
    const instruments = document.querySelector('.instruments');

    close_button.addEventListener('click', function() {
        game3.style.display = 'none';

        document.querySelector('.black1_square').style.opacity = '0';

    });

    instruments.addEventListener('click', function() {
        game3.style.display = 'block';
        document.querySelector('.black1_square').style.opacity = '1';
    });



const rezak = document.querySelector('.rezak');
const rezak2 = document.querySelector('.rezak2');

if (rezak && rezak2) {
  let isDragging = false;
  rezak.draggable = false;

  rezak.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    rezak.style.opacity = '0';
    rezak2.style.opacity = '1';
    rezak2.style.position = 'fixed';
    rezak2.style.marginLeft = '0';
    rezak2.style.marginTop = '0';
    rezak2.style.left = e.clientX - rezak2.offsetWidth / 2 + 'px';
    rezak2.style.top = e.clientY - rezak2.offsetHeight / 2 + 'px';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    rezak2.style.left = e.clientX - rezak2.offsetWidth / 2 + 'px';
    rezak2.style.top = e.clientY - rezak2.offsetHeight / 2 + 'px';
  });

  const stopDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    rezak.style.opacity = '1';
    rezak2.style.opacity = '0';
    rezak2.style.left = '';
    rezak2.style.top = '';
    rezak2.style.position = '';
    rezak2.style.marginLeft = '';
    rezak2.style.marginTop = '';
  };
  
  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('mouseleave', stopDrag);
}

});
