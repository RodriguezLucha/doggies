import React from 'react';
export const Dog = props => (
  <div className="dog">
    <img
      alt='doggy-pic'
      className='doggy-pic'
      src={`${props.dog.img}`} />
  </div>
);
