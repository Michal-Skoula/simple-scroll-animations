# Simple scroll animations
#### 🌍 [Showcase website](https://michal-skoula.github.io/simple-scroll-animations)

Tailwind inspired way to create simple scroll animations for your website. Extremely simple to use for someone who wants to spice up their website presentation. 

I made this for my personal website, as I really only needed simple animations and this was the most comfortable way I found of making them.
``` HTML
<h1 class="animate once left-to-right delay200">And that's it!</h1
```
## 💎 Highlights
- Every setting fully customizable
- Super simple to use, only need to remember 5 classes
- Mostly CSS only and utilizing the intersectionObserver API
- Bundle size of 3.2kB

## 🏗️ Installation
**1. Link CSS and JS in your project**

Add the following code in the `<head>` element:
``` HTML
<link rel="stylesheet" src="">
<script defer src="">
``` 
**2. Add `animate` class to elements you want to animate**
``` HTML
<h1 class="animate">This is now animated!</h1>
```
**3. Add aditional classes to modify the behaviour**
``` HTML
<h1 class="animate once left-to-right delay100">Left to right animation with a delay</h1>
```
*For a more detailed overview of available classes, see **Configuration**.*

**4. Change settings to suit your preferences**

This library comes with a few settings to tweak to your liking, which you change by editing CSS variables inside the document `:root`. You can copy the following code inside your CSS should you want to change any values. ==You do not need to change any of these values if you don't want to.==
``` CSS
:root {
  /*  */
  --reanimate-on-scroll-by-default: 1;
  --default-animation-duration: 500ms; 
  --default-animation-duration-step:200ms; 
  --transition-delay-step: 150ms; 
  --blur-strength: 3px; 
  --translate-amount-x: 60%;
  --translate-amount-y: 50%;
}
```  
A more detailed description of the available settings can be seen in **Configuration**.

## ⚙️ Configuration

### Settings
``` CSS
:root {
  /* Sets if by default animations should play every time they are loaded (1) or only once (0) */
  --reanimate-on-scroll-by-default: 1;

  /* Default duration for all animations. Can be overriden by setting a duration100-1000 value. */
  --default-animation-duration: 500ms; 

  /* For duration100-1000, what the step values should be.  */
  /* For a value of200ms, duration200 = 400ms, duration300 = 600ms and so on.  */
  /* Equation is: calc(var(--default-animation-duration-step) * var(--duration)); */
  --default-animation-duration-step:200ms;

  /* For duration100-1000, what the step values should be.  */
  /* For a value of 200ms, duration200 = 400ms, duration300 = 600ms and so on.  */
  /* Equation is: calc(var(--default-animation-duration-step) * var(--duration)); */

  /* Sets the values for each step of the animation in a list and delay100-1000 values. */
  /* For a value of 150ms, delay100 = 150ms, delay300 = 450ms and so on.  */
  /* Equation is: calc(var(--transition-delay-step) * var(--delay) */
  --transition-delay-step: 150ms;

  /* How strong the blur is when elements are animating in. Can be turned off. */
  --blur-strength: 3px; 

  /* How much elements should be moved when animated e.g. right-to-left. */
  --translate-amount-x: 60%;
  --translate-amount-y: 50%;
}
```
### Available animation types
- `fade-in` (default)
- `right-to-left`
- `left-to-right`
- `top-to-bottom`
- `bottom-to-top`

### Available Classes
- `animate`: Makes an element be animatable. This is mandatory for every element that is to be animated.
- `name-of-animation`: Type of animation which should display on scroll, see **Animation types**.
- `once / always`: If the animation should play once or every time it enters the viewport
- `staggered`: Used on lists of elements, such as cards, buttons, menu items etc.
- `delay100-1000`: custom delay for when the animation should play
- `duration100-1000`: custom duration amount for how long the animation should play for.

## 🌳 Examples
### Website hero section 
``` HTML
<h1 class="animate fade-in staggered">This library is stupid easy to use.</h1>
<p class="animate fade-in staggered">Just add a couple of classes which mostly read like english and that's it!</p>
<a class="animate fade-in staggered">Read more</a>
<img class="animate bottom-to-top delay300"> 
```
### Cards
``` HTML

```

