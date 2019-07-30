import React from 'react';
import {Dog} from './Dog';
export const DogList = props => (
  <div className="dogs-wrapper">
    {
      props.sliceDogs().map(dog =>
        (
          <Dog
            dog={dog}
            key={dog.id}/>
        ))
    }
  </div>
);