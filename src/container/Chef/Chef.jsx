import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'> 
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>The six course Chef's Tasting menu where each course is paired with</p>
        </div>
        <p className='p__opensans'>a selection of wines from India and across the world. Having started his career in Mumbai as part of Ananda Solomon's team at the Thai Pavilion of the Taj Hotels, he joined Old World Hospitality in 2000 and has been with the company ever since.</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>

    </div>

  </div>
);

export default Chef;
