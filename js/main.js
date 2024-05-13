const openBtn = document.getElementById('openBtn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.menu .close-btn');

openBtn.addEventListener('click', () => {
  menu.classList.add('open');
  openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
  openBtn.style.display = 'block';
});

document.addEventListener('click', (event) => {
  const target = event.target;
  const isClickInsideMenu = menu.contains(target);
  const isClickInsideOpenButton = openBtn.contains(target);

  if (!isClickInsideMenu && !isClickInsideOpenButton) {
    menu.classList.remove('open');
    openBtn.style.display = 'block';
  }
});

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();


/*animation*/
const texts = document.querySelectorAll('.text');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateText() {
  texts.forEach((text, index) => {
    if (isInViewport(text)) {
      setTimeout(() => {
        text.style.opacity = 2;
        text.style.transform = 'translateX(0)';
      }, index * 200);
    }
  });
}

window.addEventListener('scroll', animateText);
window.addEventListener('load', animateText);
window.addEventListener('resize', animateText);
animateText();