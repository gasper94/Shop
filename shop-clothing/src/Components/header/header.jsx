import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

// importing Logo. This is a specific syntax.
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Style sheet
import '../header/header.styles.scss';

const Header = ({currentUser}) => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='shop' to='/'>CONTACT</Link>
            
            {/* Sign out button. if current user is a object it will evaluate to true,
                if it is null it will evaluate to false */}
            {
                currentUser ?
                (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className='option' to='signin'>SIGN IN</Link>)
            }
        </div>
    </div>
);

export default Header;