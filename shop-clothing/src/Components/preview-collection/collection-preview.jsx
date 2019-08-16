import React from 'react';

import CollectionItem from '../collection-item/collection-item';

// Styles
import './collection-preview.styles.scss';

// CollectionPreview recieves props from collections and
// displays and filter the first four items.
// Note: performance concern in filtering and mapping items
// every time we remder the component.
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
  
  export default CollectionPreview;