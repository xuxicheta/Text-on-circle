/**
 * elem must have styles
 * position: relative;
 * width: px; - unless width will be 100%
 * height: px; - radius of circle
 * @param {HTMLElement} elem element with text
 * @param {number} letterSpacing space between letters normalized to font size
 */
function textOnCircle(elem, letterSpacing = 2.5) {
  const style = {
  	'position': 'absolute',
    'left': '50%',
  	'top': '0',
  	'height': `${elem.clientHeight}px`,
  	'transform-origin': 'bottom',
  };

	const letters = elem.innerHTML.trim().split('');
  elem.innerHTML = '';

  const tStep = parseInt(getComputedStyle(elem)['font-size'], 10) / letterSpacing;
  const tStart = (1 - letters.length) * tStep / 2;

  letters.forEach((u, i) => {
  	const span = document.createElement('span');
    Object.assign(span.style, style);
    span.style.transform = `rotate(${tStart + (tStep * i)}deg)`;
    span.innerHTML = u;
    elem.appendChild(span);
  });
  return elem;
}

export default textOnCircle;