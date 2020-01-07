import React from 'react';
import { connect} from 'react-redux';

// Actions
import { addItem } from '../../redux/cart/cart.actions'

// Components
import CustomButton from '../custom-buttom/custom-buttom';

// Styles
import './collection-item.styles.scss';
// import { dispatch } from 'rxjs/internal/observable/pairs';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;

    return (
    <div className='collection-item'>
        <div 
            className='image'
            style={{
                // String interpolation
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted> ADD TO CART </CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

