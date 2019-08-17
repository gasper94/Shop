import React from 'react';

// Components
import SignIn from '../../Components/sign-in/sign-in.jsx';
import SignUp from '../../Components/sign-up/sign-up';

// Styles Sheets
import '../sign-in-and-sign-up/sign-in-and-sign-up.styles.scss';

const SignInAndSignOutPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignOutPage;