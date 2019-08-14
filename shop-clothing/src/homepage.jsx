import React from 'react';

import './homepage.styles.scss';

// Funcional Component, no lifecycle needed or saving data
const HomePage = () => (

    <div className='homepage'>
        <div className='directory-menu'>

            {/* #1 */}
            <div className='menu-item'>
                <div className='content'>
                    {/* The six different HTML headings: */}
                    <h1 className='title'>HATS</h1>
                    {/* A <span> element used to color a part of a text */}
                    <span class='subtitle'>SHOP NOW</span>
                </div>
            </div>

            {/* #2 */}
            <div className='menu-item'>
                <div className='content'>
                    {/* The six different HTML headings: */}
                    <h1 className='title'>JACKETS</h1>
                    {/* A <span> element used to color a part of a text */}
                    <span class='subtitle'>SHOP NOW</span>
                </div>
            </div>

            {/* #3 */}
            <div className='menu-item'>
                <div className='content'>
                    {/* The six different HTML headings: */}
                    <h1 className='title'>SNEAKERS</h1>
                    {/* A <span> element used to color a part of a text */}
                    <span class='subtitle'>SHOP NOW</span>
                </div>
            </div>

            {/* #4 */}
            <div className='menu-item'>
                <div className='content'>
                    {/* The six different HTML headings: */}
                    <h1 className='title'>WOMEN</h1>
                    {/* A <span> element used to color a part of a text */}
                    <span class='subtitle'>SHOP NOW</span>
                </div>
            </div>

            {/* #5 */}
            <div className='menu-item'>
                <div className='content'>
                    {/* The six different HTML headings: */}
                    <h1 className='title'>MAN</h1>
                    {/* A <span> element used to color a part of a text */}
                    <span class='subtitle'>SHOP NOW</span>
                </div>
            </div>
            
        </div>
    </div>
);

export default HomePage;
