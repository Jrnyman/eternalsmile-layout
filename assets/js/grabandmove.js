const container2 = document.getElementById('comic-viewport');
const container = document.getElementById('comic-viewport');

let Dragging = false;

let isDown = false;
let startX;
let scrollLeft;
let velocityX = 0;
let lastX;
let animationId;

container.addEventListener('mousemove', () => {
  Dragging = true;
});
container.addEventListener('mousedown', () => {
  Dragging = false;
});

container.addEventListener('click', (e) => {
  if (Dragging) {
    e.preventDefault();
    e.stopPropagation();
  }
}, true);

container.addEventListener('mousedown', (e) => {
  isDown = true;
  container.classList.add('active');

  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  lastX = e.pageX;

  cancelAnimationFrame(animationId);
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();

  const currentX = e.pageX - container.offsetLeft;
  const walk = currentX - startX;

  velocityX = e.pageX - lastX;
  lastX = e.pageX;

  container.scrollLeft = scrollLeft - walk;
});

const stopDragging = () => {
  if (!isDown) return;
  isDown = false;
  container.classList.remove('active');

  startInertia();
};

container.addEventListener('mouseup', stopDragging);
container.addEventListener('mouseleave', stopDragging);

function startInertia() {
  container.scrollLeft -= velocityX;

  velocityX *= 0.97;

  if (Math.abs(velocityX) > 0.5) {
    animationId = requestAnimationFrame(startInertia);
  }
}

// i don't know if I want this behavior anymore
//container.addEventListener('wheel', () => {
//  cancelAnimationFrame(animationId);
//});

const gmNextpage = document.getElementById('nextpage');
const gmRightpage = document.getElementById('rightpage');

function Overlaper(el1, el2) {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();

  const isOverlapping = !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );

  if (isOverlapping) {
    console.log("i aughta move");
  };

};

container.addEventListener('mousedown', (e) => {
  Overlaper(gmNextpage, gmRightpage);
});

