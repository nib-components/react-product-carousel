import React from 'react';
import ReactDOM from 'react-dom';
import ProductCarousel, {GhostProduct} from '..';
import ProductHeader from '@nib-components/react-product-header';

const price = [
  {amount: Math.random() * 22, frequency: 'weekly'},
  {amount: Math.random() * 44, frequency: 'weekly'},
  {amount: Math.random() * 66, frequency: 'weekly'}
];

const onBeforeSlide = (currentSlide) => {
  console.log('before'); // eslint-disable-line
  let slideInFocus = 'middle';

  switch(currentSlide){
    case 0:
      slideInFocus = 'left';
      break;
    case 2:
      slideInFocus = 'right';
      break;
  }
  console.log(slideInFocus); // eslint-disable-line
};

const onAfterSlide = (currentSlide) => {
  console.log('after'); // eslint-disable-line
  let slideInFocus = 'middle';

  switch(currentSlide){
    case 0:
      slideInFocus = 'left';
      break;
    case 2:
      slideInFocus = 'right';
      break;
  }
  console.log(slideInFocus); // eslint-disable-line
};

ReactDOM.render(
  <ProductCarousel
    prompt="Put your hands up for Carousel!"
    onAfterSlide={onAfterSlide}
    onBeforeSlide={onBeforeSlide}
    className="custom-class"
    ghostProducts
  >
    <GhostProduct>
      <h3>Can't find what you're looking for?</h3>
      <p>Click the refine cover link in the top left corner to update your details so we can change the products you see.</p>
      <a href="#">Refine Cover</a>
    </GhostProduct>

    <div className="product-overview">
      <ProductHeader name="Basic Hospital" price={price[0]} type="hospital" index={0}/>
      <div className="product-overview__body"></div>
    </div>
    <div className="product-overview">
      <ProductHeader name="Standard Hospital" price={price[1]} type="hospital" index={1}/>
      <div className="product-overview__body"></div>
    </div>
    <div className="product-overview">
      <ProductHeader name="Top Hospital" price={price[2]} type="hospital" index={2}/>
      <div className="product-overview__body"></div>
    </div>

    <GhostProduct>
      <h3>Looking for a higher level of cover?</h3>
      <p>Refine your cover by editing your details in the sidebar, or contact us on 123 456 to speak to a consultant.</p>
    </GhostProduct>
  </ProductCarousel>,
  document.querySelector('#app')
);
