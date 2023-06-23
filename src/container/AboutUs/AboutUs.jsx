import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G } alt='G Letter'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='Spoon' className='about__img'/>
        <p className='p__opensans'>Celebrated and critically acclaimed Chef Manish Mehrotra is the culinary director for Indian Accent restaurants. He pioneered inventive indian cuisine. He was awarded the Best Chef in India by American Express and has also been called the most exciting modern Indian chef in the world today.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='Knife'/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='Spoon' className='about__img'/>
        <p className='p__opensans'>Celebrated and critically acclaimed Chef Manish Mehrotra is the culinary director for Indian Accent restaurants. He pioneered inventive indian cuisine. He was awarded the Best Chef in India by American Express and has also been called the most exciting modern Indian chef in the world today.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
