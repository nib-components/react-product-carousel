# @nib-components/react-product-carousel

A wrapper around `nuka-carousel` for displaying products at nib.

## Installation

    npm install @nib-components/react-product-carousel

## Usage

    import React from 'react';
    import ReactDOM from 'react-dom';
    import ProductCarousel from '@nib-components/react-product-carousel';

    const onBeforeSlide = (currentSlide) => {
      console.log('before'); // eslint-disable-line
      console.log(currentSlide); // eslint-disable-line
    };

    const onAfterSlide = (currentSlide) => {
      console.log('after'); // eslint-disable-line
      console.log(currentSlide); // eslint-disable-line
    };

    ReactDOM.render(
      <ProductCarousel prompt="Here is a message" onBeforeSlide={onBeforeSlide} onAfterSlide={onAfterSlide}>
        <div className="product"/>
        <div className="product"/>
        <div className="product"/>
      </ProductCarousel>,
      document.querySelector('#app')
    );

Can add a custom className.

#Props

Prompt: Default value for prompt is 'Swipe to view our products'
onAfterSlide: function is called after slide with the number of the current slide
onBeforeSlide: function is called before slide with the number of the previous slide

## Change log

### 0.4.0

- Feature: Added onBeforeSlide and onAfterSlide hooks.
- new props: Optional 'onBeforeSlide', Optional 'onAfterSlide'.

### 0.3.0

- Feature: You can now add a custom prompt with a new 'prompt' attribute added to the Product Carousel tag
- new prop: 'prompt'

### 0.2.4

- fix: Just include the v2-icons mixins, not the full css.

##To Do

 - More Doco
 - Tests