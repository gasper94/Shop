import React from 'react';
import { signInWithGoogle} from '../..//firebase/firebase.utils';

// Components
import FormInput from '../form-input/form-input.jsx';
import CustomButton from '../custom-buttom/custom-buttom.jsx';

// Styles
import '../sign-in/sign-in.styles.scss';



// We need to use a class component because we need to
// store what the user is typing.


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    // Prevents from firing submit
    handleSubmit = event => {{
        event.preventDefault();

        this.setState({email:'' , password: ''})
    }}

    // Dynamically updating app state by user input
    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }

    // Renders Sign in Component
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleSubmit}>
                    {/* Email */}
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange ={this.handleChange} 
                        label='Email'
                        
                    />

                    {/* Password */}
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange ={this.handleChange}
                        label ='Password'
                        
                    />

                    <div className='buttons'>
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;