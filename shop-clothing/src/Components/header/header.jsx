import React from 'react';
import {Link} from 'react-router-dom';

// importing Logo
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Style sheet
import '../header/header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='shop' to='/'>CONTACT</Link>
        </div>
    </div>
);

export default Header;