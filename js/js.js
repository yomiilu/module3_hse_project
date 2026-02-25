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
});

document.querySelector('.dialog_closed').onclick = function() {
  // Прячем закрытый
  this.style.opacity = '0';
  this.style.pointerEvents = 'none';
  
  // Показываем открытый
  document.querySelector('.dialog_opened').style.opacity = '1';
  
  // Показываем текст
  document.querySelector('.text').style.opacity = '1';
}