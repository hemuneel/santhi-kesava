import React from 'react';
import SignInAndSignUpPage from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'',password:''})
    }

    handleChange = event => {
        const { value,name } = event.target;

        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name = "email" type="email" value={this.state.email} label='Email' handleChange={this.handleChange} required/>
                    <FormInput name = "password" type="password" value={this.state.email}  label='Password' handleChange={this.handleChange} required/>

                    <CustomButton type='submit'>SIGN IN</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;