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

container.addEventListener('wheel', () => {
  cancelAnimationFrame(animationId);
});
