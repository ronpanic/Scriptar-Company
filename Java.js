document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const background = document.getElementById('background');
  
    button.addEventListener('click', function() {
      menu.classList.toggle('menu--open');
      background.classList.toggle('background--open');
    });
  });

  
  const d = document;

  const transition = () => {
    let trs = d.querySelector(".trs");
    trs.classList.add("show");
  }
  
  window.setTimeout(transition, 1000);
  setTimeout(transition, 10000);
  