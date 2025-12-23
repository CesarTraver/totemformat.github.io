document.querySelectorAll('.card-ref').forEach(el => {
  let tooltip;

  el.addEventListener('mouseenter', () => {
    const imgPath = el.dataset.img;
    if (!imgPath) return;

    tooltip = document.createElement('div');
    tooltip.className = 'card-tooltip';

    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = 'Card preview';

    tooltip.appendChild(img);
    el.appendChild(tooltip);
  });

  el.addEventListener('mouseleave', () => {
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  });
});
