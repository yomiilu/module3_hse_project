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

  






  const dialog_closed = document.querySelector('.dialog_closed');
  const dialog_opened = document.querySelector('.dialog_opened');
  const text = document.querySelector('.text');
  const textik = document.querySelector('.textik1');
  
  if (dialog_closed && dialog_opened && text && textik) {
    dialog_closed.style.display = 'none';
    dialog_opened.style.display = 'block';
    text.style.display = 'block';
    textik.style.display = 'block';
    
    dialog_opened.addEventListener('click', function() {
      dialog_opened.style.display = 'none';
      text.style.display = 'none';
      textik.style.display = 'none';
      dialog_closed.style.display = 'block';
    });
    
    dialog_closed.addEventListener('click', function() {
      dialog_closed.style.display = 'none';
      dialog_opened.style.display = 'block';
      text.style.display = 'block';
      textik.style.display = 'block';
    });
  }

  const dialog_closed2 = document.querySelector('.dialog_closed2');
  const dialog_opened2 = document.querySelector('.dialog_opened2');
  const text2 = document.querySelector('.text2');
  const textik2 = document.querySelector('.textik2');
  const textik_2 = document.querySelector('.textik_2');
  const text_small2 = document.querySelector('.text_small2');
  
  if (dialog_closed2 && dialog_opened2 && text2 && textik2) {
    dialog_closed2.style.display = 'none';
    dialog_opened2.style.display = 'block';
    text2.style.display = 'block';
    textik2.style.display = 'block';
    
    dialog_opened2.addEventListener('click', function() {
      dialog_opened2.style.display = 'none';
      text2.style.display = 'none';
      textik2.style.display = 'none';
      dialog_closed2.style.display = 'block';
      textik4.style.display = 'none';
      text_small3.style.display = 'none';
    });
    
    dialog_closed2.addEventListener('click', function() {
      dialog_closed2.style.display = 'none';
      dialog_opened2.style.display = 'block';
      text2.style.display = 'block';
      textik2.style.display = 'block';
      textik4.style.display = 'block';
      text_small3.style.display = 'block';
    });
  }



  const dialog_closed3 = document.querySelector('.dialog_closed3');
  const dialog_opened3 = document.querySelector('.dialog_opened3');
  const text3 = document.querySelector('.text3');
  const textik3 = document.querySelector('.textik3');
  const textik4 = document.querySelector('.textik4');
  const text_small3 = document.querySelector('.text_small3');

  
  if (dialog_closed3 && dialog_opened3 && text3 && textik3 && textik4 && text_small3) {
    dialog_closed3.style.display = 'none';
    dialog_opened3.style.display = 'block';
    text3.style.display = 'block';
    textik3.style.display = 'block';
    
    dialog_opened3.addEventListener('click', function() {
      dialog_opened3.style.display = 'none';
      text3.style.display = 'none';
      textik3.style.display = 'none';
      dialog_closed3.style.display = 'block';
      textik4.style.display = 'none';
      text_small3.style.display = 'none';
    });
    
    dialog_closed3.addEventListener('click', function() {
      dialog_closed3.style.display = 'none';
      dialog_opened3.style.display = 'block';
      text3.style.display = 'block';
      textik3.style.display = 'block';
      textik4.style.display = 'block';
      text_small3.style.display = 'block';
    });
  }

  const dialog_closed4 = document.querySelector('.dialog_closed4');
  const dialog_opened4 = document.querySelector('.dialog_opened4');
  const text_small4= document.querySelector('.text_small4')
  const text4 = document.querySelector('.text4')
  const textik5 = document.querySelector('.textik5')
  const textik6 = document.querySelector('.textik6')

  
  if (dialog_closed4 && dialog_opened4 && text4 && textik5 && textik6 && text_small4) {
    dialog_closed4.style.display = 'none';
    dialog_opened4.style.display = 'block';
    text4.style.display = 'block';
    textik4.style.display = 'block';
    
    dialog_opened4.addEventListener('click', function() {
      dialog_opened4.style.display = 'none';
      text4.style.display = 'none';
      textik5.style.display = 'none';
      dialog_closed4.style.display = 'block';
      textik6.style.display = 'none';
      text_small4.style.display = 'none';
    });
    
    dialog_closed4.addEventListener('click', function() {
      dialog_closed4.style.display = 'none';
      dialog_opened4.style.display = 'block';
      text4.style.display = 'block';
      textik5.style.display = 'block';
      textik6.style.display = 'block';
      text_small4.style.display = 'block';
    });
  }



setTimeout(function() {
    document.querySelector('.black_square').style.opacity = '0.5';
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
  const textik1_2 = document.querySelector('.textik1_2')
  const textik1 = document.querySelector('.textik1')
  const text_small1 = document.querySelector('.text_small1')
  const text = document.querySelector('.text')
  
  if (!poliv2 || !flowerSmall || !flowerGrow) return;
  if (poliv2.style.opacity !== '1') return;


  
  let r1 = poliv2.getBoundingClientRect();
  let r2 = flowerSmall.getBoundingClientRect();
  
  if (r1.left < r2.right && r1.right > r2.left && 
      r1.top < r2.bottom && r1.bottom > r2.top) {
    flowerSmall.style.display = 'none';
    flowerGrow.style.display = 'block';
    const sound5 = document.getElementById('done');
    sound5.volume=0.3;
            if (sound5) {
                sound5.currentTime = 0;
                sound5.play().catch(e => console.log('ошибка!', e));
            }
    text.style.opacity = '0';
    textik1.style.opacity = '0';
    textik1_2.style.opacity = '1';
    text_small1.style.opacity = '1';

    

    document.querySelector('.black_square').style.opacity = '0';
  }
});

let polivClicked = false;

const flowerSmall = document.querySelector('.flower_small');
const flowerGrow = document.querySelector('.flower_grow');

console.log('poliv:', poliv);
console.log('flowerSmall:', flowerSmall);
console.log('flowerGrow:', flowerGrow);

if (poliv) {
  poliv.addEventListener('click', () => {
    polivClicked = true;

  });
}

if (flowerSmall && flowerGrow) {
  flowerSmall.addEventListener('click', () => {
    if (polivClicked) {
      flowerSmall.style.display = 'none';
      flowerGrow.style.display = 'block';
      document.querySelector('.black_square').style.opacity = '0';
      polivClicked = false;
    }
  });
}



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

    let selected_first_index = null;
let moved = false;

document.addEventListener('mousemove', function() {
    if (clone) moved = true;
});

potions.forEach(function(potion) {
    potion.addEventListener('click', function() {

        if (moved) {
            moved = false;
            return;
        }

        const clicked_index = parseInt(this.getAttribute('data-index'));

        if (selected_first_index === null) {
            selected_first_index = clicked_index;
        } 
        else if (selected_first_index !== clicked_index) {

            [itemsOrder[selected_first_index], itemsOrder[clicked_index]] =
            [itemsOrder[clicked_index], itemsOrder[selected_first_index]];

            updatePotions();

            shakeFlask(potions[selected_first_index]);
            shakeFlask(potions[clicked_index]);

            const sound = document.getElementById('potion_sound');
            if (sound) {
                sound.currentTime = 0;
                sound.play().catch(() => {});
            }

            check_full_same_color_rows();

            selected_first_index = null;
        } 
        else {
            selected_first_index = null;
        }
    });
});
    
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

                shakeFlask(this);
                shakeFlask(potions[draggedIndex]);


                const sound = document.getElementById('potion_sound');
                if (sound) {
                    sound.currentTime = 0;
                    sound.play().catch(e => console.log('ошибка!', e));
                }
                
                check_full_same_color_rows();


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


  

  function check_full_same_color_rows() {
    const all_potions = Array.from(document.querySelectorAll('[data-index]'));

    const potions_with_position = all_potions.map(el => {
        const rect = el.getBoundingClientRect();
        const img = el.querySelector('img');
        let color = null;

        if (img) {
            if (img.classList.contains('potion_pink'))   color = 'pink';
            if (img.classList.contains('potion_blue'))   color = 'blue';
            if (img.classList.contains('potion_purple')) color = 'purple';
        }

        return {
            element: el,
            top: rect.top,
            left: rect.left,
            color: color
        };
    });

    const row_tolerance = 40;
    const rows = [];
    let current_row = [];
    let previous_top = potions_with_position[0]?.top ?? 0;

    potions_with_position.sort((a, b) => a.top - b.top);

    potions_with_position.forEach(item => {
        if (Math.abs(item.top - previous_top) > row_tolerance && current_row.length > 0) {
            rows.push(current_row);
            current_row = [];
        }
        current_row.push(item);
        previous_top = item.top;
    });

    if (current_row.length > 0) {
        rows.push(current_row);
    }

    let completed_rows = 0;

    rows.forEach((row_items, row_number) => {
        if (row_items.length < 5) return;

        row_items.sort((a, b) => a.left - b.left);

        const colors = row_items.map(item => item.color);
        const first_color = colors[0];

        if (!first_color) return;

        const all_same = colors.every(c => c === first_color);

        if (all_same) {
            console.log(`Ряд ${row_number + 1} — полностью ${first_color} (${colors.length} шт)`);
            completed_rows++;
        }
    });

    if (completed_rows === 3 && rows.length >= 3) {
          const sound5 = document.getElementById('done');
          sound5.volume=0.3;
            if (sound5) {
                sound5.currentTime = 0;
                sound5.play().catch(e => console.log('ошибка!', e));
            }
            textik2.style.opacity = '0';
            text2.style.opacity = '0';
            textik_2.style.opacity = '1';
            text_small2.style.opacity = '1';
    } else if (completed_rows > 0) {
        console.log(`Пока собрано ${completed_rows} из 3 рядов`);
    } else {
        console.log("Полных одноцветных рядов пока нет");
    }
}


let selected = null;

potions.forEach(function(potion) {
    potion.addEventListener('click', function() {
        const idx = parseInt(this.getAttribute('data-index'));

        if (selected === null) {
            selected = idx;
        } else if (selected !== idx) {
            [itemsOrder[selected], itemsOrder[idx]] = [itemsOrder[idx], itemsOrder[selected]];

            updatePotions();

            shakeFlask(potions[selected]);
            shakeFlask(potions[idx]);

            const sound = document.getElementById('potion_sound');
            if (sound) {
                sound.currentTime = 0;
                sound.play().catch(function(){});
            }

            check_full_same_color_rows();

            selected = null;
        } else {
            selected = null;
        }
    });
});



    const close_button = document.querySelector('.close_button');
    const game3 = document.querySelector('.game3');
    const instruments = document.querySelector('.instruments');

    close_button.addEventListener('click', function() {
        game3.style.display = 'none';

        document.querySelector('.black_square').style.opacity = '0';

    });

    instruments.addEventListener('click', function() {
        game3.style.display = 'block';
        document.querySelector('.black_square').style.opacity = '0.5';
    });



const rezak = document.querySelector('.rezak');
const rezak2 = document.querySelector('.rezak2');
const piece_glasses = document.querySelectorAll('.piece_glass1, .piece_glass2, .piece_glass3, .piece_glass4');
const piece_glasses_2 = document.querySelectorAll('.piece_glass1_2, .piece_glass2_2, .piece_glass3_2, .piece_glass4_2');

let isRezakDragging = false;

if (rezak && rezak2) {
  rezak.draggable = false;

  rezak.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isRezakDragging = true;
    rezak.style.opacity = '0';
    rezak2.style.opacity = '1';
    rezak2.style.position = 'fixed';
    rezak2.style.marginLeft = '0';
    rezak2.style.marginTop = '0';
    rezak2.style.left = e.clientX - rezak2.offsetWidth / 2 + 'px';
    rezak2.style.top = e.clientY - rezak2.offsetHeight / 2 + 'px';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isRezakDragging) return;
    rezak2.style.left = e.clientX - rezak2.offsetWidth / 2 + 'px';
    rezak2.style.top = e.clientY - rezak2.offsetHeight / 2 + 'px';
    
  });

  const stopDrag = () => {
    if (!isRezakDragging) return;
    isRezakDragging = false;
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

if (rezak2 && piece_glasses.length > 0) {
  let cut_progress = [0, 0, 0, 0];
  
  document.addEventListener('mousemove', (e) => {
    if (!isRezakDragging) return;
    
    const rezak2_style = window.getComputedStyle(rezak2);
    if (rezak2_style.opacity !== '1') return;
    
    const rezak2_rect = rezak2.getBoundingClientRect();
    const tool_x = rezak2_rect.left;
    const tool_y = rezak2_rect.top;
    
    piece_glasses.forEach((piece, index) => {
      if (piece.classList.contains('cut')) return;

      
      const rect = piece.getBoundingClientRect();
      const border_size = 25;
      
      const on_border = (
        (Math.abs(tool_x - rect.left) < border_size && tool_y > rect.top && tool_y < rect.bottom) ||
        (Math.abs(tool_x - rect.right) < border_size && tool_y > rect.top && tool_y < rect.bottom) ||
        (Math.abs(tool_y - rect.top) < border_size && tool_x > rect.left && tool_x < rect.right) ||
        (Math.abs(tool_y - rect.bottom) < border_size && tool_x > rect.left && tool_x < rect.right)
      );
      
      if (on_border) {
        piece.style.opacity = '0.9';
        piece_glasses_2[index].style.transition = 'opacity 0.5s ease';
        piece_glasses_2[index].style.opacity = '1';
        
        cut_progress[index]++;
        
        if (cut_progress[index] > 50) {
          piece.classList.add('cut');
          piece.style.transition = 'opacity 0.5s ease';
          piece.style.opacity = '0';
          
          piece_glasses_2[index].style.transition = 'transform 0.5s ease';
          piece_glasses_2[index].style.transform = 'translate(50px, 30px)';
          const sound3 = document.getElementById('broken_glass');
          sound3.volume=0.3;
            if (sound3) {
                sound3.currentTime = 0;
                sound3.play().catch(e => console.log('ошибка!', e));
            }
          
          const all_cut = Array.from(piece_glasses).every(p => p.classList.contains('cut'));
          if (all_cut) {
            console.log('Все осколки вырезаны!');
          }
        }
      } else {
        if (!piece.classList.contains('cut')) {
          piece.style.opacity = '1';
        }
      }
    });
  });
}

const pieces = document.querySelectorAll('.piece_glass1_2, .piece_glass2_2, .piece_glass3_2, .piece_glass4_2');
const taken_pieces = document.querySelectorAll('.piece_glass_taken1, .piece_glass_taken2, .piece_glass_taken3, .piece_glass_taken4');

pieces.forEach((piece, index) => {
    let isDragging = false;
    let taken = taken_pieces[index];
    
    piece.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        
        piece.style.opacity = '0';
        taken.style.opacity = '1';
        taken.style.position = 'fixed';
        taken.style.marginLeft = '0';
        taken.style.marginTop = '0';
        taken.style.left = e.clientX - taken.offsetWidth / 2 + 'px';
        taken.style.top = e.clientY - taken.offsetHeight / 2 + 'px';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        taken.style.left = e.clientX - taken.offsetWidth / 2 + 'px';
        taken.style.top = e.clientY - taken.offsetHeight / 2 + 'px';
    });
    
    const stopDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        piece.style.opacity = '1';
        taken.style.opacity = '0';
        taken.style.left = '';
        taken.style.top = '';
        taken.style.position = 'absolute';
        taken.style.marginLeft = '';
        taken.style.marginTop = '';
    };
    
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('mouseleave', stopDrag);
});

const no_div = document.querySelector('.no_div');
const oskolki1 = document.querySelector('.oskolki1');
const oskolki2 = document.querySelector('.oskolki2');
let pieces_in_no_div = 0;
let pieces_added = [false, false, false, false];

pieces.forEach((piece, index) => {
    let isDragging = false;
    let taken = taken_pieces[index];
    let clone = null;
    
    piece.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        
        const rect = piece.getBoundingClientRect();
        
        clone = taken.cloneNode(true);
        clone.style.position = 'fixed';
        clone.style.zIndex = '1000000';
        clone.style.width = taken.offsetWidth + 'px';
        clone.style.height = taken.offsetHeight + 'px';
        clone.style.left = e.clientX - taken.offsetWidth / 2 + 'px';
        clone.style.top = e.clientY - taken.offsetHeight / 2 + 'px';
        clone.style.pointerEvents = 'none';
        document.body.appendChild(clone);
        
        piece.style.opacity = '0';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging || !clone) return;
        clone.style.left = e.clientX - taken.offsetWidth / 2 + 'px';
        clone.style.top = e.clientY - taken.offsetHeight / 2 + 'px';
    });
    
    const stopDrag = () => {
        if (!isDragging || !clone) return;
        isDragging = false;
        
        const clone_rect = clone.getBoundingClientRect();
        const no_div_rect = no_div.getBoundingClientRect();
        
        const is_in_no_div = (
            clone_rect.left < no_div_rect.right &&
            clone_rect.right > no_div_rect.left &&
            clone_rect.top < no_div_rect.bottom &&
            clone_rect.bottom > no_div_rect.top
        );
        
        if (is_in_no_div && !pieces_added[index]) {
            pieces_added[index] = true;
            pieces_in_no_div++;
            
            if (pieces_in_no_div >= 2) {
                oskolki1.style.opacity = '1';
            }
            if (pieces_in_no_div >= 4) {
                oskolki2.style.opacity = '1';
                game3.style.opacity = '0';
                textik3.style.opacity ='0';
                text3.style.opacity ='0';
                textik4.style.opacity ='1';
                text_small3.style.opacity ='1';
                document.querySelector('.black_square').style.opacity = '0';
                const sound5 = document.getElementById('done');
                sound5.volume=0.3;
                  if (sound5) {
                      sound5.currentTime = 0;
                      sound5.play().catch(e => console.log('ошибка!', e));
                  }
            }
            
            piece.style.display = 'none';
            taken.style.display = 'none';
        } else {
            piece.style.opacity = '1';
        }
        
        clone.remove();
        clone = null;
    };
    
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('mouseleave', stopDrag);
});

 const girl3 = document.querySelector('.girl_open');
  if (girl3) {
    setInterval(() => {
      girl3.style.opacity = '0';
      setTimeout(() => {
        girl3.style.opacity = '1';
      }, 200);
    }, 2000);
  }

  
const pack1 = document.querySelector('.pack1');
const pack2 = document.querySelector('.pack2');
const pack2_2 = document.querySelector('.pack2_2');
const game4 = document.querySelector('.game4');
const close_button2 = document.querySelector('.close_button2');

if (close_button2 && game4) {
    close_button2.addEventListener('click', function() {
        game4.style.display = 'none';
        const black_Square = document.querySelector('.black_square');
        if (black_Square) black_Square.style.opacity = '0';
        const sound5 = document.getElementById('done');
        sound5.volume=0.3;
                if (sound5) {
                    sound5.currentTime = 0;
                    sound5.play().catch(e => console.log('ошибка!', e));
                }
        pack2_2.style.opacity = '1';
        text4.style.opacity = '0';
        textik5.style.opacity = '0';
        text_small4.style.opacity = '1';
        textik6.style.opacity = '1';
    });
}

  if (pack1 && game4) {
      pack1.addEventListener('click', function() {
          game4.style.display = 'block';
          document.querySelector('.black_square').style.opacity = '0.5';
      });
  }

  if (pack2 && game4) {
      pack2.addEventListener('click', function() {
          game4.style.display = 'block';
          document.querySelector('.black_square').style.opacity = '0.5';
      });
  }


const paper = document.querySelector('.paper');
const game5= document.querySelector('.game5')
const game6 = document.querySelector('.game6')

if (paper && game5) {
    paper.addEventListener('click', function() {
        game5.style.display = 'block';
        game6.style.display = 'block';
        document.querySelector('.black_square').style.opacity = '0.5';
    });
}









const canvas2 = document.getElementById('paint');
if (canvas2) {
    const ctx = canvas2.getContext('2d');
    let isDrawing = false;
    canvas2.width = 200;  
    canvas2.height = 100; 
    canvas2.style.width = '200px';  
    canvas2.style.height = '100px'; 
    canvas2.style.marginTop = '290px'; 
    canvas2.style.marginLeft = '260px'; 
  
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#5B3DA8';
    
    canvas2.addEventListener('mousedown', (e) => {
        isDrawing = true;
        ctx.beginPath();
        const sound4 = document.getElementById('drawing');
        sound4.volume=0.3;
              if (sound4) {
                  sound4.currentTime = 0;
                  sound4.play().catch(e => console.log('ошибка!', e));
              }
        ctx.moveTo(e.offsetX, e.offsetY);
        
    });
    canvas2.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    });
    canvas2.addEventListener('mouseup', () => isDrawing = false);
    canvas2.addEventListener('mouseout', () => isDrawing = false); 
}

const canvas3 = document.getElementById('paint2');
if (canvas3) {
    const ctx = canvas3.getContext('2d');
    let isDrawing = false;
    canvas3.width = 200;  
    canvas3.height = 100; 
    canvas3.style.width = '200px';  
    canvas3.style.height = '100px'; 
    canvas3.style.marginTop = '290px'; 
    canvas3.style.marginLeft = '395px'; 
  
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#5B3DA8';
    canvas3.addEventListener('mousedown', (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });
    canvas3.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        const sound4 = document.getElementById('drawing');
        sound4.volume=0.3;
              if (sound4) {
                  sound4.currentTime = 0;
                  sound4.play().catch(e => console.log('ошибка!', e));
              }
    });
    canvas3.addEventListener('mouseup', () => isDrawing = false);
    canvas3.addEventListener('mouseout', () => isDrawing = false); 
}

const tick_boxes = document.querySelectorAll('.for_tick1, .for_tick2, .for_tick3, .for_tick4');
const ticks = document.querySelectorAll('.tick1, .tick2, .tick3, .tick4');
let counter = 0;
    
    ticks.forEach(tick => {
        tick.style.display = 'none';
    });
    tick_boxes.forEach((box, index) => {
        box.addEventListener('click', function() {
            if (ticks[index] && ticks[index].style.display !== 'block') {
                ticks[index].style.display = 'block';
                counter++;
                this.style.pointerEvents = 'none';

                if (counter === 4){
                  game5.style.display = 'none';
                }
            }
        });
    });

  const button = document.querySelector('.button');
  if (button) {
    button.addEventListener('click', () => {
        window.location.href = 'https://deziiign.com/designer/evgeniya-chernyshenko-caecc657a5fa47999073f9ddd446fbe3';
    });
}

const okay = document.querySelector('.okay');
const textik_phone1= document.querySelector('.textik_phone1');
const message_phone = document.querySelector('.message_phone');
okay.addEventListener('click', function() {
    
    textik_phone1.style.opacity = '0';
    message_phone.style.opacity = '0';
    okay.style.opacity = '0';
    
});

const okay2 = document.querySelector('.okay2');
okay2.addEventListener('click', function() {
    
    game3.style.opacity = '0';
    document.querySelector('.black_square').style.opacity = '0';
});


});