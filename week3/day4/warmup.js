/* playing with this site: http://www.republiquedesmangues.fr/
  trying to do fun stuff with the mango
*/

var mango = document.getElementById('mangue');

mango.addEventListener('click', function (event) {
  mango.width += 25;
  mango.height += 25;
  mango.style.animation = 'spin'
  mango.style.animationDuration = '0.5s'
  mango.style.animationIterationCount = 'infinite'
  mango.style.animationTimingFunction = 'linear'
})
