# @nib-components/react-product-carousel

A wrapper around `nuka-carousel` for displaying products at nib.

## Installation

    npm install @nib-components/react-product-carousel

## Usage

    import React from 'react';
    import ReactDOM from 'react-dom';
    import ProductCarousel from '@nib-components/react-product-carousel';

    const onBeforeSlide = (currentSlide) => {
      console.log('before');
      console.log(currentSlide);
    };

    const onAfterSlide = (currentSlide) => {
      console.log('after');
      console.log(currentSlide);
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

#### Prompt:

Default value for prompt is 'Swipe to view our products'

#### onAfterSlide:

function is called after slide with the number of the current slide


#### onBeforeSlide:

function is called before slide with the number of the previous slide

#### hideControls:

`bool`. Hide arrows and disable swipe on desktop. Defaults true.

#### hideControlsAt:

`number`. Either `750` or `1000`. To be used in conjunction with `hideControls`. If `hideControls={true}`, defaults to 750.

#### ghostProducts:

`bool`. Show grey boxes at the start and end of the carousel. Defaults false.

## Change log

## 2.2.0

- Additional `hideControlsAt` prop to choose at which point to disable carousel functionality

## 2.1.0

- Sticky carousel arrows

## 2.0.0

- Editable `ghostProducts`
- Breaking change in `v2-icons`

### 1.1.0

- Add: `hideControls` and `ghostProducts` flags

### 1.0.1

- Bump version of `sass-grid` to major version.

### 1.0.0

- Fix: Reduce z-index of arrows
- Bump to major version for npm `<1.0.0` fix

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
