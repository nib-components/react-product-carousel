# @nib-components/react-product-carousel

A wrapper around `nuka-carousel` for displaying products at nib.

## Installation

    npm install @nib-components/react-product-carousel

## Usage

    import React from 'react';
    import ReactDOM from 'react-dom';
    import ProductCarousel from '@nib-components/react-product-carousel';

    ReactDOM.render(
      <ProductCarousel>
        <div className="product"/>
        <div className="product"/>
        <div className="product"/>
      </ProductCarousel>,
      document.querySelector('#app')
    );
    
Can add a custom className.

##To Do

 - More Doco
 - Tests