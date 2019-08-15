import React from 'react';

import { withRouter } from 'react-router-dom';

// Style sheets
import '../menu-item/menu-item.styles.scss';


// Functional component, because our component doesnt need to hold any state.
// Passes Title as prop, by distructuring them.
//
// You can get access to the history object's properties and the closest <Route>'s match via the withRouter higher-order component.
// withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div 
    className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
) 

export default withRouter(MenuItem);





