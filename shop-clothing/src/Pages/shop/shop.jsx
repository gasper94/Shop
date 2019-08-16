import React from 'react';

import SHOP_DATA from './shop';
import CollectionPreview from '../../Components/preview-collection/collection-preview.jsx';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    // Destructuring collection to pass as props
    const {collections} = this.state;
    return (<div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps}) =>(
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
      </div>
    );
  }
}

export default ShopPage;