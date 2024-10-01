export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    
  };
};
// variants.js

// Create a new variant for scale-up animation
export const scaleUp = (delay) => ({
  hidden: {
    opacity: 0,     // Element starts invisible
    scale: 0.8,     // Element starts smaller
  },
  show: {
    opacity: 1,     // Element fades in
    scale: 1,       // Element scales up to original size
    transition: {
      type: "spring",
      stiffness: 150,    // Control the spring stiffness
      damping: 12,       // Control the spring damping effect
      delay: delay,      // Delay the animation if needed
      duration: 1,     // Animation duration
    },
  },
});
