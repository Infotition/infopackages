/**
 * Appends at the clicked position an adds the provided class to play
 * the configured animation.
 *
 * @param event         The fired click event.
 * @param splashClass   The class which should play the animation.
 */
export const createSplashAnimation = (event: any, splashClass: string) => {
  const target = event.currentTarget;
  const targetRect = target.getBoundingClientRect();

  // Calculate values of the circle (initial the max dimension times some shrink factor)
  const circle = document.createElement('span');
  const diameter = Math.max(target.clientWidth, target.clientHeight) * 0.33;
  const radius = diameter / 2;

  // Set the position of the circle to the position clicked relative inside the target
  circle.setAttribute('aria-hidden', 'true');
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - targetRect.left - radius}px`;
  circle.style.top = `${event.clientY - targetRect.top - radius}px`;

  // Add default styles
  circle.style.position = 'absolute';
  circle.style.borderRadius = '50%';
  circle.style.transform = 'scale(0)';

  // Play the animation
  circle.classList.add(splashClass);

  // If an old ripple is animating / was animated, delete the span
  const ripple = target.getElementsByClassName(splashClass)[0];
  if (ripple) ripple.remove();

  target.appendChild(circle);
};
