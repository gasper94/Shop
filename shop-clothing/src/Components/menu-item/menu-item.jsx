import React from 'react';


// Style sheets
import '../menu-item/menu-item.styles.scss';


// Functional component, because our component doesnt need to hold any state.
// Passes Title as prop, by distructuring them.
const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div 
            className='background-image' 
            style= {{
                // Pass the url as the String interpolated value.
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='content'>
            {/* The six different HTML headings: */}
            <h1 className='title'>{title.toUpperCase()}</h1>
            {/* A <span> element used to color a part of a text */}
            <span class='subtitle'>SHOP NOW</span>
        </div>
    </div>
) 

export default MenuItem;














