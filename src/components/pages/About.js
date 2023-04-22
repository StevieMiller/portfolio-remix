import React from 'react';
import Headshot from '../../images/headshot.png'

export default function About() {
  return (
    <section>
    <div className='page-container'>
      <img src={Headshot} alt='Headshot of Stevie Miller' className='headshot'/>
      <h2 className='greeting'>Hi, my name is Stevie.</h2>
      <p>I'm a web developer based in New Mexico. I have a passion for creating beautiful, functional websites that help businesses grow and thrive. </p>
  <p>When I'm not coding, you can usually find me hiking and camping, dancing at a music festival, or reading a good book.</p>
</div>
    </section>
  );
};
