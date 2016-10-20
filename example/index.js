import React from 'react';
import ReactDOM from 'react-dom';
import ProductCarousel from '..';
import ProductHeader from '@nib-components/react-product-header';

const price = {amount: 22, frequency: 'weekly'};

ReactDOM.render(
  <ProductCarousel title="Put your hands up for Carousel!">
    <div className="product-overview">
      <ProductHeader name="Basic Hospital" price={price} type="hospital" index={0}/>
      <div className="product-overview__body"></div>
    </div>
    <div className="product-overview">
      <ProductHeader name="Standard Hospital" price={price} type="hospital" index={1}/>
      <div className="product-overview__body"></div>
    </div>
    <div className="product-overview">
      <ProductHeader name="Top Hospital" price={price} type="hospital" index={2}/>
      <div className="product-overview__body"></div>
    </div>
  </ProductCarousel>,
  document.querySelector('#app')
);