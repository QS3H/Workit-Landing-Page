# Frontend Mentor - Workit landing page solution

This is my solution to the [Workit landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/workit-landing-page-2fYnyle5lu).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/Workit%20Screenshot.png)

### Links

- Solution URL: [Solution on Frontend Mentor](https://your-solution-url.com)
- Live Site URL: [live site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- CSS animations and keyframes
- Vanilla JavaScript (for minor interactive behavior)

### What I learned

- Structuring a responsive landing page with layered background SVGs and decorative patterns.
- Creating smooth entrance animations with `@keyframes` and using an `is-visible` class for reveal effects.
- Leveraging custom properties for a consistent color system and spacing scale.

```css
/* Example: reveal animation utility */
.reveal {
  opacity: 0;
  transform: translateY(12px);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 400ms, transform 400ms;
}
```

### Continued development

I want to refine scroll-based reveal utilities (intersection observers), improve accessibility for keyboard focus states, and explore reducing motion for users with `prefers-reduced-motion` while maintaining visual polish.

### Useful resources

- [MDN – Using CSS custom properties (variables)](https://developer.mozilla.org/docs/Web/CSS/Using_CSS_custom_properties)
- [MDN – CSS Grid Layout](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout)
- [MDN – CSS Animations](https://developer.mozilla.org/docs/Web/CSS/CSS_Animations)

## Author

- Frontend Mentor - [@QS3H](https://www.frontendmentor.io/profile/QS3H)
- Github - [QS3H](https://github.com/QS3H)

## Acknowledgments

Thanks to Frontend Mentor for the design and challenge brief.
