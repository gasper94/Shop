import React from 'react';

// Components
import Directory from '../../Components/directory/directory';

// Style sheets
import './homepage.styles.scss';

// Funcional Component, no lifecycle needed or saving data
const HomePage = () => (

    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;
