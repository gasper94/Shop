import React from 'react';

// Styles
import '../custom-buttom/custom-button.styles.scss';


// google-sign-in property will render if isGoogleSignIn is True.
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}  {...otherProps}>
        {children}
    </button>

);

export default CustomButton;
